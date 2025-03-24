"use server";

import { prisma } from "@/utils/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  try {
    const user = await currentUser();
    if (!user) return;
    const input = (formData.get("input") as string)?.trim();
    if (!input) return;

    await prisma.todo.create({
      data: { title: input, userId: user.id },
    });

    revalidatePath("/");
  } catch (error) {
    console.error("Error creating todo:", error);
  }
}

export async function changeStatus(formData: FormData) {
  try {
    const user = await currentUser();
    if (!user) return;
    const inputId = formData.get("inputId") as string;
    const todo = await prisma.todo.findUnique({
      where: { id: inputId, userId: user.id },
    });

    if (!todo) return;

    await prisma.todo.update({
      where: { id: inputId },
      data: { isCompleted: !todo.isCompleted },
    });

    revalidatePath("/");
  } catch (error) {
    console.error("Error changing todo status:", error);
  }
}

export async function editTodo(formData: FormData) {
  try {
    const user = await currentUser();
    if (!user) return;
    const newTitle = (formData.get("newTitle") as string)?.trim();
    const inputId = formData.get("inputId") as string;

    if (!newTitle) return; // Prevents empty updates

    await prisma.todo.update({
      where: { id: inputId, userId: user.id },
      data: { title: newTitle },
    });

    revalidatePath("/");
  } catch (error) {
    console.error("Error editing todo:", error);
  }
}

export async function deleteTodo(formData: FormData) {
  try {
    const user = await currentUser();
    if (!user) return;
    const inputId = formData.get("inputId") as string;

    await prisma.todo.delete({
      where: { id: inputId, userId: user.id },
    });

    revalidatePath("/");
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
}

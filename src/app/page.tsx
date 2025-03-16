"use server";
import * as actions from "@/actions";
import Button from "@/components/button/button";
import Form from "@/components/form/form";
import Input from "@/components/input/input";
import Todo from "@/components/todos/Todo";
import { prisma } from "@/utils/prisma";

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="w-screen min-h-screen flex flex-col items-center py-20 px-4">
      <h1 className="text-5xl font-extrabold text-center mb-8 text-gray-200 tracking-wide">
        DoneZo
      </h1>
      <div className="w-full max-w-3xl">
        <Form action={actions.createTodo} className="flex gap-3 mb-6">
          <Input
            name="input"
            type="text"
            placeholder="Add a new task..."
            className="flex-1"
          />
          <Button
            type="submit"
            text="Add"
            bgColor="bg-[var(--primary-color)] hover:shadow-md hover:scale-105 duration-300"
          />
        </Form>
        <div className="flex flex-col gap-4 items-center w-full">
          {data.map((todo, id) => (
            <Todo key={id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
}

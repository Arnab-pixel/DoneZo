"use client";
import * as actions from "@/actions";
import Form from "../form/form";
import Input from "../input/input";
import Button from "../button/button";
import { useState } from "react";
import { todoProps } from "@/types";
import { MdEdit } from "react-icons/md";

const EditTodo = ({ todo }: { todo: todoProps }) => {
  const [editTodoState, setEditTodoState] = useState(false);

  const handleEdit = () => {
    if (!todo.isCompleted) {
      setEditTodoState(!editTodoState);
    }
  };

  return (
    <div className="flex gap-5 items-center">
      <Button
        onClick={handleEdit}
        text={<MdEdit />}
        bgColor="bg-blue-500"
        className={todo.isCompleted ? "opacity-50 cursor-not-allowed" : ""}
        disabled={todo.isCompleted} // Disables the button when task is completed
      />
      {editTodoState && (
        <Form action={actions.editTodo}>
          <Input name="inputId" value={todo.id} type="hidden" />
          <div className="flex justify-center gap-5 items-center">
            <Input type="text" name="newTitle" placeholder="Edit Todo..." />
            <Button
              type="submit"
              text="Save"
              bgColor="bg-[var(--primary-color)]"
            />
          </div>
        </Form>
      )}
    </div>
  );
};

export default EditTodo;

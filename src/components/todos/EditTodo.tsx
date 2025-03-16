import { useState } from "react";
import * as actions from "@/actions";
import Form from "../form/form";
import Input from "../input/input";
import Button from "../button/button";
import { todoProps } from "@/types";
import { MdEdit } from "react-icons/md";

const EditTodo = ({ todo }: { todo: todoProps }) => {
  const [editTodoState, setEditTodoState] = useState(false);

  const handleEdit = () => {
    if (todo.isCompleted) return;
    setEditTodoState(true);  // Open edit mode
  };

  const handleSubmit = () => {
    setEditTodoState(false); // Close edit mode after saving
  };

  return (
    <div className="flex gap-5 items-center">
      {!editTodoState ? (
        <Button 
          onClick={handleEdit} 
          text={<MdEdit />} 
          bgColor="bg-[var(--primary-color)]" 
          className={`${todo.isCompleted ? "opacity-50 cursor-not-allowed" : ""}`} 
          disabled={todo.isCompleted} 
        />
      ) : (
        <Form action={actions.editTodo} onSubmit={handleSubmit}>
          <Input name="inputId" value={todo.id} type="hidden" />
          <div className="flex justify-center gap-5 items-center">
            <Input type="text" name="newTitle" placeholder="Edit Todo..." />
            <Button type="submit" text="Save" bgColor="bg-[var(--primary-color)]" />
          </div>
        </Form>
      )}
    </div>
  );
};

export default EditTodo;

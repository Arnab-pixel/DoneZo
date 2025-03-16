import { todoProps } from "@/types";
import Form from "../form/form";
import Input from "../input/input";
import Button from "../button/button";
import { FaTrash } from "react-icons/fa";
import * as actions from "@/actions";

const DeleteTodo = ({ todo }: { todo: todoProps }) => {
  return (
    <Form action={actions.deleteTodo} className="flex">
      <Input type="hidden" name="inputId" value={todo.id} />
      <Button type="submit" bgColor="bg-red-500" text={<FaTrash />} />
    </Form>
  );
};

export default DeleteTodo;

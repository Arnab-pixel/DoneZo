import { todoProps } from "@/types";
import Button from "../button/button";
import Form from "../form/form";
import Input from "../input/input";
import * as actions from "@/actions";
import { FaCheck, FaUndo } from "react-icons/fa";

const ChangeTodo = ({ todo }: { todo: todoProps }) => {
  return (
    <Form action={actions.changeStatus} className="flex">
      <Input name="inputId" value={todo.id} type="hidden" />
      <Button
        type="submit"
        text={todo.isCompleted ? <FaUndo /> : <FaCheck />}
        bgColor={todo.isCompleted ? "bg-yellow-500" : "bg-green-500"}
      />
    </Form>
  );
};

export default ChangeTodo;

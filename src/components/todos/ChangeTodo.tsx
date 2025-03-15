import { todoProps } from "@/types";
import Button from "../button/button";
import Form from "../form/form";
import Input from "../input/input";
import * as actions from "@/actions";
import { FaCheck, FaUndo } from "react-icons/fa";

const ChangeTodo = ({ todo }: { todo: todoProps }) => {
  return (
    <Form action={actions.changeStatus}>
      <Input name="inputId" value={todo.id} type="hidden"></Input>
      <Button
        text={todo.isCompleted ? <FaUndo /> : <FaCheck />}
        type="submit"
        actionButton
        bgColor={todo.isCompleted ? "bg-yellow-500" : "bg-green-500"}
      ></Button>
    </Form>
  );
};

export default ChangeTodo;

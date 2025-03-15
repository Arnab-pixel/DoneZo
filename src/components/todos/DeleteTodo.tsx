import { todoProps } from "@/types";
import React from "react";
import Form from "../form/form";
import Input from "../input/input";
import Button from "../button/button";
import { FaTrash } from "react-icons/fa";

import * as actions from "@/actions";
const DeleteTodo = ({ todo }: { todo: todoProps }) => {
  return (
    <Form action={actions.deleteTodo}>
      <Input type="hidden" name="inputId" value={todo.id}></Input>
      <Button
        actionButton
        type="submit"
        bgColor="bg-red-500"
        text={<FaTrash />}
      ></Button>
    </Form>
  );
};

export default DeleteTodo;

import { todoProps } from "@/types";

import ChangeTodo from "./ChangeTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

const Todo = ({ todo }: { todo: todoProps }) => {
  const todoStyle = {
    textDecoration: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };

  return (
    <div
      style={todoStyle}
      className="w-10/12 mx-auto flex flex-wrap items-center bg-[var(--card-background)] border border-[var(--border-color)] shadow-lg py-4 px-20 rounded-2xl"
    >
      <ChangeTodo todo={todo} />
      <span className="text-center font-bold grow">{todo.title}</span>
      <div className="flex items-center">
        <EditTodo todo={todo} />
      </div>

      <div className="flex items-center ">
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;

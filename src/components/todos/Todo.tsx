import { todoProps } from "@/types";
import ChangeTodo from "./ChangeTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

const Todo = ({ todo }: { todo: todoProps }) => {
  return (
    <div
      className="w-full max-w-2xl p-4 flex items-center justify-between bg-[var(--card-background)] 
    border border-[var(--border-color)] shadow-md rounded-lg transition-all hover:shadow-xl hover:scale-105 duration-300"
    >
      <ChangeTodo todo={todo} />
      <span
        className={`text-white font-medium ${
          todo.isCompleted ? "line-through opacity-50" : ""
        }`}
      >
        {todo.title}
      </span>
      <div className="flex gap-3">
        <EditTodo todo={todo} />
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;

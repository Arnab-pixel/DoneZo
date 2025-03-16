import * as actions from "@/actions";
import Button from "../button/button";
import Form from "../form/form";
import Input from "../input/input";

const AddTodo = () => {
  return (
    <div className="w-full max-w-lg">
      <Form action={actions.createTodo}>
        <div className="flex gap-4 items-center justify-center">
          <Input
            name="input"
            type="text"
            placeholder="Add a new task..."
            aria-label="Add a new todo"
            className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
          />
          <Button
            type="submit"
            text="Add"
            bgColor="bg-[var(--primary-color)] hover:bg-opacity-80 transition"
          />
        </div>
      </Form>
    </div>
  );
};

export default AddTodo;

import * as actions from "@/actions";
import Button from "../button/button";
import Form from "../form/form";
import Input from "../input/input";

const AddTodo = () => {
  return (
    <div>
      <Form action={actions.createTodo}>
        <div className="flex gap-7 items-center justify-center">
          <Input name="input" type="text" placeholder="Add to get it Done..." />
          <Button
            type="submit"
            text="Add"
            bgColor="bg-[var(--primary-color)]"
          />
        </div>
      </Form>
    </div>
  );
};

export default AddTodo;

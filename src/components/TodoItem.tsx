import styled from "styled-components";
import { Todo } from "../types/type";

const Li = styled.li``;
const Input = styled.input``;
const Label = styled.label``;

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <Li>
      <Label>
        <Input type="checkbox" />
        {todo.title}
      </Label>
    </Li>
  );
};

export default TodoItem;

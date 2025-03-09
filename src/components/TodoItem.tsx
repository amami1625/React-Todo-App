import styled from "styled-components";
import { Todo } from "../types/type";

const Li = styled.li``;
const Label = styled.label``;
const Button = styled.button``;

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <Li>
      <Label>{todo.title}</Label>
      <Button>完了</Button>
      <Button>削除</Button>
    </Li>
  );
};

export default TodoItem;

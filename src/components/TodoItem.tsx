import styled from "styled-components";
import { Todo } from "../types/type";

const Li = styled.li``;
const Label = styled.label``;
const Button = styled.button``;

type TodoItemProps = {
  todo: Todo;
  deleteHandler: (documentId: string) => void;
};

const TodoItem = ({ todo, deleteHandler }: TodoItemProps) => {

  return (
    <Li>
      <Label>{todo.title}</Label>
      <Button onClick={() => deleteHandler(todo.id)}>削除</Button>
    </Li>
  );
};

export default TodoItem;

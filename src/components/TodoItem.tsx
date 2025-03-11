import styled from "styled-components";
import { Todo } from "../types/type";

const Li = styled.li``;
const Label = styled.label``;
const Button = styled.button``;

type TodoItemProps = {
  todo: Todo;
  deleteHandler: (documentId: string) => void;
  updateHandler: (id: string) => void;
};

const TodoItem = ({ todo, deleteHandler, updateHandler }: TodoItemProps) => {

  return (
    <Li>
      <Label>{todo.title}</Label>
      <Button onClick={() => deleteHandler(todo.id)}>削除</Button>
      <Button onClick={() => updateHandler(todo.id)}>完了</Button>
    </Li>
  );
};

export default TodoItem;

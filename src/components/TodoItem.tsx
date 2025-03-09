import styled from "styled-components";
import { Todo } from "../types/type";

const Li = styled.li``;
const Label = styled.label``;
const Button = styled.button``;

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
};

const TodoItem = ({ todo, onDelete, onComplete }: TodoItemProps) => {
  const deleteHandler = () => {
    if (!confirm("タスクを削除しますか？")) return;
    onDelete(todo.id);
  };

  const completeHandler = () => {
    if (!confirm("タスクを完了しますか？")) return;
    onComplete(todo.id)
  }

  return (
    <Li>
      <Label>{todo.title}</Label>
      <Button onClick={completeHandler}>完了</Button>
      <Button onClick={deleteHandler}>削除</Button>
    </Li>
  );
};

export default TodoItem;

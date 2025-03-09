import styled from "styled-components";
import { Todo } from "../types/type";

const Li = styled.li``;
const Label = styled.label``;
const Button = styled.button``;

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: number) => void;
};

const TodoItem = ({ todo, onDelete }: TodoItemProps) => {
  const deleteHandler = () => {
    if (!confirm("Todo を削除しますか？")) return;
    onDelete(todo.id);
  };

  return (
    <Li>
      <Label>{todo.title}</Label>
      <Button>完了</Button>
      <Button onClick={deleteHandler}>削除</Button>
    </Li>
  );
};

export default TodoItem;

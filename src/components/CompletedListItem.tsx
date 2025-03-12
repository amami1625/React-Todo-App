import styled from "styled-components";
import Button from "./common/Button";
import { Todo } from "../types/type";
import { useTodos } from "../hooks/useTodos";

const Li = styled.li`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
`;
const Label = styled.label`
  font-size: 1.3rem;
  flex-grow: 1;
`;

type CompletedListItemProps = {
  todo: Todo;
};

const CompletedListItem = ({ todo }: CompletedListItemProps) => {
  const { handleTodoUpdate } = useTodos();

  return (
    <Li>
      <Label>{todo.title}</Label>
      <Button
        text="未完了に戻す"
        clickHandler={() => {
          handleTodoUpdate(todo.id, todo.isCompleted);
        }}
      />
    </Li>
  );
};

export default CompletedListItem;

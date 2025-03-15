import styled from "styled-components";
import Button from "./common/Button";
import { Todo } from "../types/type";

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
  updateHandler: (id: string, isCompleted: boolean) => Promise<void>;
};

const CompletedListItem = ({ todo, updateHandler }: CompletedListItemProps) => {
  return (
    <Li>
      <Label>{todo.title}</Label>
      <Button
        text="未完了に戻す"
        clickHandler={() => {
          updateHandler(todo.id, todo.isCompleted);
        }}
      />
    </Li>
  );
};

export default CompletedListItem;

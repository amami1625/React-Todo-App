import styled from "styled-components";
import { Todo } from "../types/type";
import Button from "./common/Button";
import React from "react";

const Li = styled.li`
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
const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

type TodoItemProps = {
  todo: Todo;
  deleteHandler: (documentId: string) => void;
  updateHandler: (id: string, isCompleted: boolean) => void;
};

const TodoItem = React.memo(
  ({ todo, deleteHandler, updateHandler }: TodoItemProps) => {
    return (
      <Li>
        <Label>{todo.title}</Label>
        <Wrapper>
          <Button text="完了" clickHandler={() => updateHandler(todo.id, todo.isCompleted)} />
          <Button text="削除" clickHandler={() => deleteHandler(todo.id)} />
        </Wrapper>
      </Li>
    );
  }
);

export default TodoItem;

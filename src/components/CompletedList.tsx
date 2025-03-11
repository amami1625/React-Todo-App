import { ReactElement } from "react";
import styled from "styled-components";
import { Todo } from "../types/type";
import Button from "./common/Button";

const Ul = styled.ul`
  list-style: none;
  margin: 0 0 10px 0;
  padding: 0;
`;
const H2 = styled.h2`
  font-size: 1.8rem;
  text-align: center;
`;

type CompletedListProps = {
  todos: Todo[];
  permanentlyDeleteHandler: (todos: Todo[]) => Promise<void>;
  children: ReactElement[];
};

const CompletedList = ({
  todos,
  permanentlyDeleteHandler,
  children,
}: CompletedListProps) => {
  return (
    <>
      <H2>完了済のタスク</H2>
      <Ul>{children}</Ul>
      <Button
        text="完了済みのタスクを削除する"
        clickHandler={() => permanentlyDeleteHandler(todos)}
        width={"500px"}
      />
    </>
  );
};

export default CompletedList;

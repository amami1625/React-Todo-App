import React from "react";
import { ReactNode } from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const H2 = styled.h2`
  font-size: 1.8rem;
  text-align: center;
`;

type TodoListProps = {
  children?: ReactNode;
};

const TodoList = React.memo(({ children }: TodoListProps) => {
  return (
    <>
      <H2>未完了のタスク</H2>
      <Ul>{children}</Ul>
    </>
  );
});

export default TodoList;

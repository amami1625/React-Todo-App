import { ReactElement } from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const H2 = styled.h2``;

type TodoListProps = {
  children: ReactElement[];
};

const TodoList = ({ children }: TodoListProps) => {
  return (
    <>
      <H2>未完了のタスク</H2>
      <Ul>{children}</Ul>
    </>
  );
};

export default TodoList;

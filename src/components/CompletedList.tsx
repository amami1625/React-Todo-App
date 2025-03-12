import { ReactNode } from "react";
import styled from "styled-components";
import { Todo } from "../types/type";

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
  children: ReactNode;
};

const CompletedList = ({ children }: CompletedListProps) => {
  return (
    <>
      <H2>完了済のタスク</H2>
      <Ul>{children}</Ul>
    </>
  );
};

export default CompletedList;

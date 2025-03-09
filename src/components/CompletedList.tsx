import { ReactElement } from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const H2 = styled.h2``;

type CompletedListProps = {
  children: ReactElement[];
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

import { ReactElement } from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

type CompletedListProps = {
  children: ReactElement[];
};

const CompletedList = ({ children }: CompletedListProps) => {
  return <Ul>{ children }</Ul>;
};

export default CompletedList;

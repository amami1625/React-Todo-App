import { ReactNode } from "react";
import styled from "styled-components";

const Div = styled.div`
  max-width: 800px;
  padding: 0 2rem;
  margin: 0 auto;
`;

type ContainerProps = {
  children: ReactNode;
};

const container = ({ children }: ContainerProps) => {
  return <Div>{children}</Div>;
};

export default container;

import React from "react";
import styled from "styled-components";

const HeaderElm = styled.header`
  color: #fff;
  text-align: center;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: rgb(130, 192, 255);
`;
const H1 = styled.h1`
  font-size: 2rem;
`;

const Header = React.memo(() => {
  return (
    <HeaderElm>
      <H1>My Todo App(β)</H1>
    </HeaderElm>
  );
});

export default Header;

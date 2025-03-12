import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: right;
`;
const Span = styled.span`
  display: block;
  box-sizing: border-box;
  text-align: center;
  width: 34px;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

type CloseButtonProps = {
  clickHandler: () => void;
};

const CloseButton = ({ clickHandler }: CloseButtonProps) => {
  return (
    <Div>
      <Span onClick={clickHandler}>x</Span>
    </Div>
  );
};

export default CloseButton;

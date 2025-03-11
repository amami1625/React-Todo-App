import styled from "styled-components";

const ButtonElm = styled.button`
  max-width: ${(props) => props.style?.maxWidth};
  padding: 10px 25px;
  color: #fff;
  transition: 0.3s ease-in-out;
  font-weight: 600;
  background: #6bb6ff;
  filter: drop-shadow(0px 2px 4px #ccc);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 10px 20px -5px rgb(0 0 0 / 15%), 0 0 5px rgb(0 0 0 / 10%);
  }
`;

type ButtonProps = {
  text: string;
  clickHandler?: () => void;
  width?: string;
};

const Button = ({ text, clickHandler, width = "240px" }: ButtonProps) => {
  return (
    <ButtonElm onClick={clickHandler} style={{ maxWidth: width }}>
      {text}
    </ButtonElm>
  );
};

export default Button;

import React, { useRef } from "react";
import styled from "styled-components";
import Button from "./common/Button";

const FormElm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;
const Input = styled.input`
  flex-grow: 1;
  font-size: 1rem;
  padding: 0.8rem;
  margin-right: 1rem;
  border: solid 1px #ccc;
  border-radius: 4px;
`;

type FormProps = {
  addHandler: (title: string) => void;
};

const Form = ({ addHandler }: FormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = inputRef.current?.value ?? "";
    if (title === "") return;
    addHandler(title);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <FormElm onSubmit={submitHandler}>
      <Input type="text" ref={inputRef} />
      <Button text="タスクを追加"/>
    </FormElm>
  );
};

export default Form;

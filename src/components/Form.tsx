import React, { useRef } from "react";
import styled from "styled-components";

const FormElm = styled.form``;
const Input = styled.input``;
const Button = styled.button``;

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
      <Button>タスクを追加</Button>
    </FormElm>
  );
};

export default Form;

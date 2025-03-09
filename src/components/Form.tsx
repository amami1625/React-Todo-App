import React, { useRef } from "react";
import styled from "styled-components";
import { Todo } from "../types/type";

const FormElm = styled.form``;
const Input = styled.input``;
const Button = styled.button``;

type FormProps = {
  onSubmit: (newTodo: Todo) => void;
};

const Form = ({ onSubmit }: FormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = inputRef.current?.value ?? "";
    if (title === "") return;
    onSubmit({ id: Date.now(), title, isCompleted: false });
    inputRef.current!.value = ""
  };

  return (
    <FormElm onSubmit={submitHandler}>
      <Input type="text" ref={inputRef} />
      <Button>タスクを追加</Button>
    </FormElm>
  );
};

export default Form;

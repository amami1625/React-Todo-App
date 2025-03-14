import React, { useState } from "react";
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

const Form = React.memo(({ addHandler }: FormProps) => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title === "") return;
    addHandler(title);
    setTitle("");
  };

  return (
    <FormElm onSubmit={submitHandler}>
      <Input type="text" value={title} onChange={changeHandler} />
      <Button text="タスクを追加" />
    </FormElm>
  );
});

export default Form;

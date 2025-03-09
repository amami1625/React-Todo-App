import styled from "styled-components";

const FormElm = styled.form``;
const Input = styled.input``;
const Button = styled.button``;

const Form = () => {
  return (
    <FormElm>
      <Input type="text" />
      <Button>タスクを追加</Button>
    </FormElm>
  );
};

export default Form;

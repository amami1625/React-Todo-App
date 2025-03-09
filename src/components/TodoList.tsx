import { ReactElement } from 'react';
import styled from 'styled-components'

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

type TodoListProps = {
  children: ReactElement[];
}

const TodoList = ({ children }: TodoListProps) => {
  return (
    <Ul>{children}</Ul>
  )
}

export default TodoList
import styled from "styled-components";

const Li = styled.li`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
`;

type CompletedListItemProps = {
  todo: string;
};

const CompletedListItem = ({ todo }: CompletedListItemProps) => {
  return <Li>{todo}</Li>;
};

export default CompletedListItem;

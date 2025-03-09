import styled from "styled-components";

const Li = styled.li``;

type CompletedListItemProps = {
  todo: string;
};

const CompletedListItem = ({ todo }: CompletedListItemProps) => {
  return <Li>{todo}</Li>;
};

export default CompletedListItem;

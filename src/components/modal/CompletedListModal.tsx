import CompletedList from "../CompletedList";
import CompletedListItem from "../CompletedListItem";
import { useTodos } from "../../hooks/useTodos";
import Modal from "../common/Modal";
import Button from "../common/Button";
import CloseButton from "../common/CloseButton";
import { useCompleted } from "../../hooks/useCompleted";

const CompletedListModal = () => {
  const { completedTodos, handleTodoDeleteCompleted } = useTodos();
  const { toggleCompletedModal } = useCompleted()

  return (
    <Modal>
      <CloseButton clickHandler={toggleCompletedModal}/>
      <CompletedList todos={completedTodos}>
        {completedTodos.map((todo) => (
          <CompletedListItem todo={todo.title} key={todo.id} />
        ))}
      </CompletedList>
      <Button text="完了済みのタスクを削除" clickHandler={() => handleTodoDeleteCompleted(completedTodos)}/>
    </Modal>
  );
};

export default CompletedListModal;

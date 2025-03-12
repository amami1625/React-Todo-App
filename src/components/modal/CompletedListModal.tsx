import CompletedList from "../CompletedList";
import CompletedListItem from "../CompletedListItem";
import { useTodos } from "../../hooks/useTodos";
import Modal from "../common/Modal";
import Button from "../common/Button";
import CloseButton from "../common/CloseButton";
import { useModal } from "../../context/ModalProvider";

const CompletedListModal = () => {
  const { completedTodos, handleTodoDeleteCompleted } = useTodos();
  const { toggleCompletedModal } = useModal();

  return (
    <Modal>
      <CloseButton clickHandler={toggleCompletedModal} />
      <CompletedList todos={completedTodos}>
        {completedTodos.map((todo) => (
          <CompletedListItem todo={todo} key={todo.id} />
        ))}
      </CompletedList>
      <Button
        text="完了済みのタスクを削除"
        clickHandler={handleTodoDeleteCompleted}
      />
    </Modal>
  );
};

export default CompletedListModal;

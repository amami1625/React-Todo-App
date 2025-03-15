import CompletedList from "../CompletedList";
import CompletedListItem from "../CompletedListItem";
import Modal from "../common/Modal";
import Button from "../common/Button";
import CloseButton from "../common/CloseButton";
import { useModal } from "../../context/ModalProvider";
import { useCompletedTodos } from "../../hooks/useCompletedTodos";
import { useTodos } from "../../hooks/useTodos";

const CompletedListModal = () => {
  const { handleTodoUpdate } = useTodos();
  const { completedTodos, handleTodoDeleteCompleted } = useCompletedTodos();
  const { toggleCompletedModal } = useModal();

  return (
    <Modal>
      <CloseButton clickHandler={toggleCompletedModal} />
      <CompletedList>
        {completedTodos.map((todo) => (
          <CompletedListItem
            todo={todo}
            key={todo.id}
            updateHandler={handleTodoUpdate}
          />
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

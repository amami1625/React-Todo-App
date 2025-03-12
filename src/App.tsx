import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import Header from "./components/Header";
import Form from "./components/Form";
import { useTodos } from "./hooks/useTodos";
import Container from "./components/common/Container";
import CompletedListModal from "./components/modal/CompletedListModal";
import { useCompleted } from "./hooks/useCompleted";
import Button from "./components/common/Button";

function App() {
  const { todos, handleTodoAdd, handleTodoUpdate, handleTodoDelete } =
    useTodos();

  const { showCompletedModal, toggleCompletedModal } = useCompleted();

  return (
    <>
      <Header />
      <Container>
        <Form addHandler={handleTodoAdd} />
        <TodoList>
          {todos.map((todo) => (
            <TodoItem
              todo={todo}
              updateHandler={handleTodoUpdate}
              deleteHandler={handleTodoDelete}
              key={todo.id}
            />
          ))}
        </TodoList>
        <Button
          text="完了済みのタスク"
          clickHandler={toggleCompletedModal}
          width={"500px"}
        />
      </Container>
      {showCompletedModal && <CompletedListModal />}
    </>
  );
}

export default App;

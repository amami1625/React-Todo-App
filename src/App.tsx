import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import Header from "./components/Header";
import Form from "./components/Form";
import { useTodos } from "./hooks/useTodos";
import CompletedList from "./components/CompletedList";
import CompletedListItem from "./components/CompletedListItem";
import Container from "./components/common/Container";

function App() {
  const {
    todos,
    completedTodos,
    handleTodoAdd,
    handleTodoUpdate,
    handleTodoDelete,
    handleTodoDeleteCompleted,
  } = useTodos();

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
        <CompletedList
          todos={completedTodos}
          permanentlyDeleteHandler={handleTodoDeleteCompleted}
        >
          {completedTodos.map((todo) => (
            <CompletedListItem todo={todo.title} key={todo.id} />
          ))}
        </CompletedList>
      </Container>
    </>
  );
}

export default App;

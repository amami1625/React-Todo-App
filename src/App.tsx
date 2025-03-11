import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import Header from "./components/Header";
import Form from "./components/Form";
import CompletedList from "./components/CompletedList";
import CompletedListItem from "./components/CompletedListItem";
import { useTodos } from "./hooks/useTodos";

function App() {
  const {
    todos,
    completedTodos,
    handleTodoAdd,
    handleTodoComplete,
    handleTodoDelete,
  } = useTodos();

  return (
    <>
      <Header />
      <Form onSubmit={handleTodoAdd} />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            onDelete={handleTodoDelete}
            onComplete={handleTodoComplete}
            key={todo.id}
          />
        ))}
      </TodoList>
      <CompletedList>
        {completedTodos.map((todo) => (
          <CompletedListItem todo={todo} key={todo} />
        ))}
      </CompletedList>
    </>
  );
}

export default App;

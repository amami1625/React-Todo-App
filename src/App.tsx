import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import Header from "./components/Header";
import Form from "./components/Form";
import { useTodos } from "./hooks/useTodos";
import CompletedList from "./components/CompletedList";
import CompletedListItem from "./components/CompletedListItem";

function App() {
  const {
    todos,
    completedTodos,
    handleTodoAdd,
    handleTodoUpdate,
    handleTodoDelete,
  } = useTodos();

  return (
    <>
      <Header />
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
      <CompletedList>
        {completedTodos.map(todo => <CompletedListItem todo={todo.title}/>)}
      </CompletedList>
    </>
  );
}

export default App;

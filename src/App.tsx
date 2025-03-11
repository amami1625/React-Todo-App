import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import Header from "./components/Header";
import Form from "./components/Form";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { todos, handleTodoAdd, handleTodoDelete } = useTodos();

  return (
    <>
      <Header />
      <Form addHandler={handleTodoAdd} />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            deleteHandler={handleTodoDelete}
            key={todo.id}
          />
        ))}
      </TodoList>
    </>
  );
}

export default App;

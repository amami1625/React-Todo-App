import { useState } from "react";
import TodoList from "./components/TodoList";
import { Todo } from "./types/type";
import TodoItem from "./components/TodoItem";
import Header from "./components/Header";
import Form from "./components/Form";
import CompletedList from "./components/CompletedList";
import CompletedListItem from "./components/CompletedListItem";

function App() {
  const tempTodos = [
    { id: 1, title: "sample1", isCompleted: false },
    { id: 2, title: "sample2", isCompleted: false },
    { id: 3, title: "sample3", isCompleted: false },
  ];
  const [todos, setTodos] = useState<Todo[]>(tempTodos);
  const [completedTodos, setCompletedTodos] = useState<string[]>([]);

  const handleTodoDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleTodoComplete = (id: number) => {
    const completeTodo = todos[todos.findIndex((todo) => todo.id === id)];
    setTodos(todos.filter((todo) => todo.id !== id));
    setCompletedTodos([...completedTodos, completeTodo.title]);
  };

  const handleTodoAdd = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <Header />
      <Form onSubmit={handleTodoAdd}/>
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
        {completedTodos.map(todo => <CompletedListItem todo={todo} key={todo}/>)}
      </CompletedList>
    </>
  );
}

export default App;

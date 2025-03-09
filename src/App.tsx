import { useState } from "react"
import TodoList from "./components/TodoList"
import { Todo } from "./types/type";
import TodoItem from "./components/TodoItem";

function App() {
  const tempTodos = [
    {id: 1, title: "sample1", isCompleted: false},
    {id: 2, title: "sample2", isCompleted: false},
    {id: 3, title: "sample3", isCompleted: false},
  ]
  const [todos, setTodos] = useState<Todo[]>(tempTodos);
  const [completedTodos, setCompletedTodos] = useState<string[]>([]);

  const handleTodoDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <TodoList>
        {todos.map(todo => <TodoItem todo={todo} onDelete={handleTodoDelete} key={todo.id}/>)}
      </TodoList>
    </>
  )
}

export default App

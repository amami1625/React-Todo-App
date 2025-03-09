import { useState } from "react"
import TodoList from "./components/TodoList"

function App() {
  const tempTodos = [
    {id: 1, title: "sample1", isCompleted: false},
    {id: 2, title: "sample2", isCompleted: false},
    {id: 3, title: "sample3", isCompleted: false},
  ]
  const [todos, setTodos] = useState(tempTodos);

  return (
    <>
      <TodoList />
    </>
  )
}

export default App

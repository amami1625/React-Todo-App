import { useEffect, useState } from "react";
import { Todo } from "../types/type";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<string[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const querySnapshot = await getDocs(collection(db, "todos"));
      const todosData = querySnapshot.docs.map((todo) => ({
        id: todo.id,
        ...todo.data(),
      })) as Todo[];
      setTodos(todosData);
    };

    fetchTodos();
  }, []);

  const handleTodoAdd = async (newTodo: Todo) => {
    await addDoc(collection(db, "todos"), newTodo);
    setTodos([...todos, newTodo]);
  };

  const handleTodoComplete = (id: string) => {
    const completeTodo = todos[todos.findIndex((todo) => todo.id === id)];
    setTodos(todos.filter((todo) => todo.id !== id));
    setCompletedTodos([...completedTodos, completeTodo.title]);
  };

  const handleTodoDelete = async (id: string) => {
    await deleteDoc(doc(db, "todos", id));
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    completedTodos,
    handleTodoAdd,
    handleTodoComplete,
    handleTodoDelete,
  };
};

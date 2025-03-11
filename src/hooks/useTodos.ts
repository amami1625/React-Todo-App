import { useEffect, useState } from "react";
import { Todo } from "../types/type";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Todo[];
        const todos = docs.filter((doc) => !doc.isCompleted);
        const completedTodos = docs.filter((doc) => doc.isCompleted);
        setTodos(todos);
        setCompletedTodos(completedTodos);
      });
      return () => unsubscribe();
    };

    fetchTodos();
  }, []);

  const handleTodoAdd = async (title: string) => {
    try {
      await addDoc(collection(db, "todos"), {
        title,
        isCompleted: false,
      });
    } catch (err) {
      console.error("タスクの追加に失敗しました: ", err);
    }
  };

  const handleTodoUpdate = async (id: string) => {
    const completed = doc(db, "todos", id);
    await updateDoc(completed, {
      isCompleted: true,
    });
  };

  const handleTodoDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "todos", id));
    } catch (err) {
      console.error("タスクの削除に失敗しました: ", err);
    }
  };

  return {
    todos,
    completedTodos,
    handleTodoAdd,
    handleTodoUpdate,
    handleTodoDelete,
  };
};

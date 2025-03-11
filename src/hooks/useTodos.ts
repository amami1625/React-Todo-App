import { useEffect, useState } from "react";
import { Todo } from "../types/type";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
        const todosData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Todo[];
        setTodos(todosData);
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

  const handleTodoDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "todos", id));
    } catch (err) {
      console.error("タスクの削除に失敗しました: ", err);
    }
  };

  return {
    todos,
    handleTodoAdd,
    handleTodoDelete,
  };
};

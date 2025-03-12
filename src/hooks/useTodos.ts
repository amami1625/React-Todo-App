import { useCallback, useEffect, useState } from "react";
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
    const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Todo[];

      setTodos(docs.filter((doc) => !doc.isCompleted));
      setCompletedTodos(docs.filter((doc) => doc.isCompleted));
    });
    return () => unsubscribe(); // クリーンアップ処理
  }, []);

  const handleTodoAdd = useCallback(async (title: string) => {
    try {
      await addDoc(collection(db, "todos"), {
        title,
        isCompleted: false,
      });
    } catch (err) {
      console.error("タスクの追加に失敗しました: ", err);
    }
  }, []);

  const handleTodoUpdate = useCallback(
    async (id: string, isCompleted: boolean) => {
      const completed = doc(db, "todos", id);
      await updateDoc(completed, {
        isCompleted: !isCompleted,
      });
    },
    []
  );

  const handleTodoDelete = useCallback(async (id: string) => {
    if (!confirm("タスクを削除しますか？")) return;
    try {
      await deleteDoc(doc(db, "todos", id));
    } catch (err) {
      console.error("タスクの削除に失敗しました: ", err);
    }
  }, []);

  const handleTodoDeleteCompleted = useCallback(async () => {
    if (!confirm("完了済みのタスクを削除しますか？")) return;
    try {
      await Promise.all(
        completedTodos.map((todo) => deleteDoc(doc(db, "todos", todo.id)))
      );
    } catch (err) {
      console.error("タスクの削除に失敗しました: ", err);
    }
  }, [completedTodos]);

  return {
    todos,
    completedTodos,
    handleTodoAdd,
    handleTodoUpdate,
    handleTodoDelete,
    handleTodoDeleteCompleted,
  };
};

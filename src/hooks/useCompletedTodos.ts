import { useCallback, useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { Todo } from "../types/type";

export const useCompletedTodos = () => {
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Todo[];

      setCompletedTodos(docs.filter((doc) => doc.isCompleted));
    });
    return () => unsubscribe(); // クリーンアップ処理
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
    completedTodos,
    handleTodoDeleteCompleted,
  };
};

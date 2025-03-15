import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, test, vi } from "vitest";
import TodoItem from "../components/TodoItem";
import { Todo } from "../types/type";

describe("TodoItemコンポーネント", () => {
  let user: ReturnType<typeof userEvent.setup>;
  let todo: Todo;
  const mockDeleteHandler = vi.fn();
  const mockUpdateHandler = vi.fn();
  beforeEach(() => {
    user = userEvent.setup();
    todo = {
      id: "test-id",
      title: "test-title",
      isCompleted: false,
    };
    mockDeleteHandler.mockClear();
    mockUpdateHandler.mockClear();
  });

  test("リストが正しくレンダリングされる", () => {
    render(
      <TodoItem
        todo={todo}
        deleteHandler={mockDeleteHandler}
        updateHandler={mockUpdateHandler}
      />
    );

    const li = screen.getByRole("listitem");
    expect(li).toBeInTheDocument();

    const label = screen.getByText("test-title");
    expect(label).toBeInTheDocument();

    const deleteBtn = screen.getByRole("button", { name: "削除" });
    expect(deleteBtn).toBeInTheDocument();

    const updateBtn = screen.getByRole("button", { name: "完了" });
    expect(updateBtn).toBeInTheDocument();
  });

  test("完了ボタンをクリックすると updateHandler が呼ばれる", async () => {
    render(
      <TodoItem
        todo={todo}
        deleteHandler={mockDeleteHandler}
        updateHandler={mockUpdateHandler}
      />
    );

    const updateBtn = screen.getByRole("button", { name: "完了" });
    await user.click(updateBtn);

    expect(mockUpdateHandler).toHaveBeenCalledTimes(1);
    expect(mockUpdateHandler).toHaveBeenCalledWith("test-id", todo.isCompleted);
  });

  test("削除ボタンをクリックすると deleteHandler が呼ばれる", async () => {
    render(
      <TodoItem
        todo={todo}
        deleteHandler={mockDeleteHandler}
        updateHandler={mockUpdateHandler}
      />
    );

    const deleteBtn = screen.getByRole("button", { name: "削除" });
    await user.click(deleteBtn);

    expect(mockDeleteHandler).toHaveBeenCalledTimes(1);
    expect(mockDeleteHandler).toHaveBeenCalledWith("test-id");
  });
});

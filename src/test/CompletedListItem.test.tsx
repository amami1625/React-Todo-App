import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import CompletedListItem from "../components/CompletedListItem";

describe("CompletedTodoListItemコンポーネント", () => {
  let user: ReturnType<typeof userEvent.setup>;
  const mockTodo = {
    id: "test-id",
    title: "test-title",
    isCompleted: true,
  };
  const mockUpdateHandler = vi.fn();
  beforeEach(() => {
    user = userEvent.setup();
    render(
      <CompletedListItem todo={mockTodo} updateHandler={mockUpdateHandler} />
    );
    mockUpdateHandler.mockClear();
  });

  test("リストが正しくレンダリングされる", () => {
    const li = screen.getByRole("listitem");
    expect(li).toBeInTheDocument();

    const label = screen.getByText("test-title");
    expect(label).toBeInTheDocument();

    const updateBtn = screen.getByRole("button", { name: "未完了に戻す" });
    expect(updateBtn).toBeInTheDocument();
  });

  test("未完了に戻すボタンをクリックすると handleTodoUpdate が呼ばれる", async () => {
    const updateBtn = screen.getByRole("button", { name: "未完了に戻す" });
    await user.click(updateBtn);

    expect(mockUpdateHandler).toHaveBeenCalledTimes(1);
  });
});

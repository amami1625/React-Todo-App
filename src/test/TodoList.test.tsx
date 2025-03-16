import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import TodoList from "../components/TodoList";

describe("TodoListコンポーネント", () => {
  test("h2タグ正しくレンダリングされる", () => {
    render(<TodoList />);

    const h2 = screen.getByRole("heading", {
      level: 2,
      name: "未完了のタスク",
    });
    expect(h2).toBeInTheDocument();
  });

  test("ulタグが正しくレンダリングされる", () => {
    render(<TodoList />);

    const ul = screen.getByRole("list");
    expect(ul).toBeInTheDocument();
  });

  test("ulタグのchildrenが正しくレンダリングされる", () => {
    render(
      <TodoList>
        <li>タスク1</li>
        <li>タスク2</li>
      </TodoList>
    );

    expect(screen.getByText("タスク1")).toBeInTheDocument();
    expect(screen.getByText("タスク2")).toBeInTheDocument();
  });

  test("ulタグにchildrenが存在しない場合も正しくレンダリングされる", () => {
    render(<TodoList></TodoList>);

    const ul = screen.getByRole("list");
    expect(ul.childElementCount).toBe(0);
  });
});

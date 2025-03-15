import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import CompletedList from "../components/CompletedList";

describe("CompletedListコンポーネント", () => {
  beforeEach(() => {
    render(<CompletedList />);
  });

  test("h2タグが正しくレンダリングされる", () => {
    const h2 = screen.getByRole("heading", {
      level: 2,
      name: "完了済のタスク",
    });
    expect(h2).toBeInTheDocument();
  });

  test("ulタグが正しくレンダリングされる", () => {
    const ul = screen.getByRole("list");
    expect(ul).toBeInTheDocument();
  });

  test("ulタグのchildrenが正しくレンダリングされる", () => {
    render(
      <CompletedList>
        <li>タスク1</li>
        <li>タスク2</li>
      </CompletedList>
    );

    expect(screen.getByText("タスク1")).toBeInTheDocument();
    expect(screen.getByText("タスク2")).toBeInTheDocument();
  });

  test("ulタグにchildrenが存在しない場合も正しくレンダリングされる", () => {
    const ul = screen.getByRole("list");
    expect(ul).toBeEmptyDOMElement();
  });
});

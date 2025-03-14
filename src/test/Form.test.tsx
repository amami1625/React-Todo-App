import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import Form from "../components/Form";
import userEvent from "@testing-library/user-event";

describe("Formコンポーネント", () => {
  let user: ReturnType<typeof userEvent.setup>;
  beforeEach(() => {
    user = userEvent.setup();
  });

  test("フォームが正しくレンダリングされる", () => {
    render(<Form addHandler={() => {}} />);

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();

    const button = screen.getByRole("button", { name: "タスクを追加" });
    expect(button).toBeInTheDocument();
  });

  test("インプットに文字を入力できる", async () => {
    render(<Form addHandler={() => {}} />);

    const input = screen.getByRole("textbox");
    await user.type(input, "ユーザーがテキストを入力");
    expect(input).toHaveValue("ユーザーがテキストを入力");
  });

  test("ボタンをクリックすると addHandler が呼ばれる", async () => {
    const mockAddHandler = vi.fn();
    render(<Form addHandler={mockAddHandler} />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: "タスクを追加" });

    await user.type(input, "ユーザーがテキストを入力");
    await user.click(button);

    expect(mockAddHandler).toHaveBeenCalledTimes(1);
    expect(mockAddHandler).toHaveBeenCalledWith("ユーザーがテキストを入力");
  });

  test("送信後、インプットがリセットされる", async () => {
    render(<Form addHandler={() => {}} />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: "タスクを追加" });

    await user.type(input, "ユーザーがテキストを入力");
    await user.click(button);

    expect(input).toHaveValue("");
  });

  test("インプットが空の状態だと addHandler が呼ばれない", async () => {
    const mockAddHandler = vi.fn();
    render(<Form addHandler={mockAddHandler} />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("");

    const button = screen.getByRole("button", { name: "タスクを追加" });

    await user.click(button);

    expect(mockAddHandler).not.toHaveBeenCalled();
  });
});

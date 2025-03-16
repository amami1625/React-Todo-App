import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import Button from "../components/common/Button";
import userEvent from "@testing-library/user-event";

describe("Buttonコンポーネント", () => {
  let mockHandler: ReturnType<typeof vi.fn>;
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
    mockHandler = vi.fn();
    mockHandler.mockReset();
  });

  test("buttonタグが正しくレンダリングされる", () => {
    render(<Button text="テスト" clickHandler={mockHandler} />);
    const button = screen.getByRole("button", { name: "テスト" });
    expect(button).toBeInTheDocument();
  });

  test("クリックすると clickHandler が呼ばれる", async () => {
    render(<Button text="テスト" clickHandler={mockHandler} />);
    const button = screen.getByRole("button", { name: "テスト" });
    await user.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  test("clickHandler が存在しない場合にクリックしてもエラーにならない", async () => {
    render(<Button text="テスト" />);
    const button = screen.getByRole("button", { name: "テスト" });
    await user.click(button);
  });

  test("デフォルトの width が適用されている", () => {
    render(<Button text="テスト" clickHandler={mockHandler} />);
    const button = screen.getByRole("button", { name: "テスト" });
    expect(button).toHaveStyle("max-width: 240px");
  });

  test("指定した幅の width が適用されている", () => {
    render(<Button text="テスト" clickHandler={mockHandler} width="300px" />);
    const button = screen.getByRole("button", { name: "テスト" });
    expect(button).toHaveStyle("max-width: 300px");
  });
});

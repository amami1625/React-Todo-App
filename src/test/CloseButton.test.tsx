import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import CloseButton from "../components/common/CloseButton";

describe("CloseButtonコンポーネント", () => {
  let mockHandler: ReturnType<typeof vi.fn>;
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
    mockHandler = vi.fn();
    mockHandler.mockReset();
    render(<CloseButton clickHandler={mockHandler} />);
  });

  test("spanタグが正しくレンダリングされるか", () => {
    const span = screen.getByRole("button", { name: "x" });
    expect(span).toBeInTheDocument();
  });

  test("クリックすると clickHandler が呼ばれる", async () => {
    const span = screen.getByRole("button", { name: "x" });
    await user.click(span);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});

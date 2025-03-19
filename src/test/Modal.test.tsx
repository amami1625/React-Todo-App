import { render, screen, within } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Modal from "../components/common/Modal";

describe("Modalコンポーネント", () => {
  test("初期レンダリングが正しく行われる", () => {
    render(<Modal />);

    const modalWrapper = screen.getByTestId("modal-wrapper");
    const modalBody = screen.getByTestId("modal-body");
    const modalContent = screen.getByTestId("modal-content");

    expect(modalWrapper).toBeInTheDocument();
    expect(modalBody).toBeInTheDocument();
    expect(modalContent).toBeInTheDocument();
  });

  test("children が正しくレンダリングされる", () => {
    render(
      <Modal>
        <h1>テスト見出し</h1>
        <p>テスト段落</p>
      </Modal>
    );

    const modalContent = screen.getByTestId("modal-content");

    const h1 = within(modalContent).getByRole("heading", { level: 1 });
    const p = within(modalContent).getByText("テスト段落");
    expect(h1).toBeInTheDocument();
    expect(p).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Header from "../components/Header";

describe("テストサンプル", () => {
  test("H1タグの確認", () => {
    render(<Header />);
    const h1 = screen.getByRole("heading");
    expect(h1.textContent).toBe("My Todo App(β)");
  });
});

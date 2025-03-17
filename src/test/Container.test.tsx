import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Container from "../components/common/Container";

describe("Containerコンポーネント", () => {
  test("children が正しくレンダリングされる", () => {
    render(
      <Container>
        <p>テスト</p>
      </Container>
    );

    expect(screen.getByText("テスト")).toBeInTheDocument();
  });
});

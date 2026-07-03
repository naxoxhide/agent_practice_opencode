import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero (smoke)", () => {
  test("renderiza sin lanzar error, con el titulo, la bajada y el CTA hacia el timeline", () => {
    render(<Hero />);
    expect(screen.getByText("tripleS: Into the Dimension")).toBeTruthy();
    const cta = screen.getByRole("link", { name: "Explorar la linea de tiempo" });
    expect(cta.getAttribute("href")).toBe("#timeline");
  });
});

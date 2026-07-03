import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header (smoke)", () => {
  test("renderiza sin lanzar error, con el wordmark y los 3 links de navegacion", () => {
    render(<Header />);
    expect(screen.getByText("tripleS: Into the Dimension")).toBeTruthy();
    expect(screen.getByRole("link", { name: "Historia" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Integrantes" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Sub-unidades" })).toBeTruthy();
  });
});

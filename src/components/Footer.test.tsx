import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer (smoke)", () => {
  test("renderiza sin lanzar error, con el wordmark y el disclaimer de fan-site", () => {
    render(<Footer />);
    expect(screen.getByText("tripleS: Into the Dimension")).toBeTruthy();
    expect(screen.getByText(/Sitio no oficial hecho por fans/)).toBeTruthy();
  });
});

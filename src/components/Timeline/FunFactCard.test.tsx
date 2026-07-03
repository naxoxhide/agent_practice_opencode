import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { FunFactCard } from "./FunFactCard";
import type { FunFactEntry } from "@/types/content";

const entry: FunFactEntry = {
  kind: "funfact",
  id: "test-funfact",
  title: "Titulo de prueba",
  body: "Cuerpo del dato curioso de prueba.",
};

describe("FunFactCard", () => {
  test("renderiza la etiqueta 'Dato curioso', el titulo y el cuerpo", () => {
    render(<FunFactCard entry={entry} />);
    expect(screen.getByText("Dato curioso")).toBeTruthy();
    expect(screen.getByText(entry.title)).toBeTruthy();
    expect(screen.getByText(entry.body)).toBeTruthy();
  });
});

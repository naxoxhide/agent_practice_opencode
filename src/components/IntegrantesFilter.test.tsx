import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { IntegrantesFilter } from "./IntegrantesFilter";
import { subunits, getSubunit } from "@/data/subunits";

describe("IntegrantesFilter", () => {
  test("muestra las 24 integrantes por defecto", () => {
    render(<IntegrantesFilter />);
    expect(screen.getByText("24 integrantes")).toBeTruthy();
  });

  test("filtra por sub-unidad al hacer click en su boton", () => {
    const nxt = getSubunit("nxt")!;
    render(<IntegrantesFilter />);

    fireEvent.click(screen.getByRole("button", { name: nxt.name }));

    expect(screen.getByText(`${nxt.memberIds.length} integrantes`)).toBeTruthy();
    expect(screen.getByText("Lynn")).toBeTruthy();
    expect(screen.queryByText("Seoyeon")).toBeNull();
  });

  test("vuelve a mostrar todas al hacer click en 'Todas'", () => {
    const nxt = getSubunit("nxt")!;
    render(<IntegrantesFilter />);

    fireEvent.click(screen.getByRole("button", { name: nxt.name }));
    fireEvent.click(screen.getByRole("button", { name: "Todas" }));

    expect(screen.getByText("24 integrantes")).toBeTruthy();
    expect(screen.getByText("Seoyeon")).toBeTruthy();
  });

  test("renderiza un boton de filtro por cada sub-unidad", () => {
    render(<IntegrantesFilter />);
    for (const subunit of subunits) {
      expect(screen.getByRole("button", { name: subunit.name })).toBeTruthy();
    }
  });
});

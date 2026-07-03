import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { SubunitBadge } from "./SubunitBadge";
import { subunits } from "@/data/subunits";

describe("SubunitBadge", () => {
  test("renderiza el nombre de una sub-unidad valida", () => {
    render(<SubunitBadge subunitId="nxt" />);
    expect(screen.getByText("NXT")).toBeTruthy();
  });

  test("enlaza al ancla de la sub-unidad en /subunidades", () => {
    render(<SubunitBadge subunitId="nxt" />);
    expect(screen.getByRole("link").getAttribute("href")).toBe("/subunidades#nxt");
  });

  test("no renderiza nada si el id de sub-unidad no existe", () => {
    const { container } = render(<SubunitBadge subunitId="no-existe" />);
    expect(container.firstChild).toBeNull();
  });

  test("todas las sub-unidades reales se pueden renderizar sin error", () => {
    for (const subunit of subunits) {
      const { unmount } = render(<SubunitBadge subunitId={subunit.id} />);
      expect(screen.getByText(subunit.name)).toBeTruthy();
      unmount();
    }
  });
});

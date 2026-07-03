import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import {
  SparkleSticker,
  DimensionRingSticker,
  ObjektCardSticker,
  PhotocardSticker,
  SssBadgeSticker,
} from "./Stickers";

describe("Stickers", () => {
  test("SparkleSticker pinta exactamente el diamante de radio 4 (41 pixeles)", () => {
    // |x-5| + |y-5| <= 4 en una grilla 11x11 => 2*4^2 + 2*4 + 1 = 41 puntos.
    const { container } = render(<SparkleSticker />);
    expect(container.querySelectorAll("rect").length).toBe(41);
  });

  test("DimensionRingSticker pinta los 4 anillos concentricos (97 pixeles)", () => {
    // Distancia Chebyshev par (0,2,4,6) en grilla 13x13 => 1 + 8*2 + 8*4 + 8*6 = 97.
    const { container } = render(<DimensionRingSticker />);
    expect(container.querySelectorAll("rect").length).toBe(97);
  });

  test("ObjektCardSticker y PhotocardSticker renderizan un svg sin lanzar error", () => {
    const objekt = render(<ObjektCardSticker />);
    expect(objekt.container.querySelector("svg")).toBeTruthy();

    const photocard = render(<PhotocardSticker />);
    expect(photocard.container.querySelector("svg")).toBeTruthy();
  });

  test("SssBadgeSticker renderiza el texto SSS", () => {
    const { getByText } = render(<SssBadgeSticker />);
    expect(getByText("SSS")).toBeTruthy();
  });
});

import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { FloatingSticker } from "./FloatingSticker";

describe("FloatingSticker (smoke)", () => {
  test("renderiza sus children y aplica las variables CSS de flotado", () => {
    const { getByText, container } = render(
      <FloatingSticker rotate={12} duration={5} delay={0.5}>
        <span>hijo</span>
      </FloatingSticker>
    );

    expect(getByText("hijo")).toBeTruthy();

    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.classList.contains("sticker-float")).toBe(true);
    expect(wrapper.style.getPropertyValue("--sticker-rot")).toBe("12deg");
    expect(wrapper.style.getPropertyValue("--sticker-duration")).toBe("5s");
    expect(wrapper.style.getPropertyValue("--sticker-delay")).toBe("0.5s");
  });
});

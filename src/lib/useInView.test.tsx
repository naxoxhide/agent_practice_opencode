import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { act, render, screen } from "@testing-library/react";
import { useInView } from "./useInView";

function TestComponent() {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  return <div ref={ref}>{isVisible ? "visible" : "hidden"}</div>;
}

function stubMatchMedia(matches: boolean) {
  vi.stubGlobal(
    "matchMedia",
    vi.fn().mockImplementation((query: string) => ({
      matches,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }))
  );
}

describe("useInView", () => {
  let observedCallback: IntersectionObserverCallback | null = null;
  const observeMock = vi.fn();
  const disconnectMock = vi.fn();

  beforeEach(() => {
    observedCallback = null;
    observeMock.mockReset();
    disconnectMock.mockReset();

    vi.stubGlobal(
      "IntersectionObserver",
      vi.fn().mockImplementation((callback: IntersectionObserverCallback) => {
        observedCallback = callback;
        return {
          observe: observeMock,
          unobserve: vi.fn(),
          disconnect: disconnectMock,
          takeRecords: () => [],
          root: null,
          rootMargin: "",
          thresholds: [],
        };
      })
    );

    stubMatchMedia(false);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test("empieza oculto y observa el nodo", () => {
    render(<TestComponent />);
    expect(screen.getByText("hidden")).toBeTruthy();
    expect(observeMock).toHaveBeenCalledTimes(1);
  });

  test("se vuelve visible y desconecta el observer cuando entra en el viewport", () => {
    render(<TestComponent />);

    act(() => {
      observedCallback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });

    expect(screen.getByText("visible")).toBeTruthy();
    expect(disconnectMock).toHaveBeenCalledTimes(1);
  });

  test("no se vuelve visible si isIntersecting es false", () => {
    render(<TestComponent />);

    act(() => {
      observedCallback?.(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });

    expect(screen.getByText("hidden")).toBeTruthy();
  });

  test("con prefers-reduced-motion activo, es visible de inmediato y no observa", () => {
    stubMatchMedia(true);
    render(<TestComponent />);
    expect(screen.getByText("visible")).toBeTruthy();
    expect(observeMock).not.toHaveBeenCalled();
  });
});

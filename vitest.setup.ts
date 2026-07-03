import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

// Sin esto, el DOM de cada test queda montado para el siguiente (RTL solo
// hace auto-cleanup si detecta los globals de Jest; aqui importamos
// describe/test explicitamente, asi que se registra a mano.
afterEach(() => {
  cleanup();
});

// jsdom no implementa IntersectionObserver ni matchMedia. Estos mocks minimos
// evitan que useInView() explote en cualquier test que renderice un
// componente que lo use (TimelineItem, FunFactCard, etc.). Los tests que
// necesitan controlar el comportamiento exacto (useInView.test.ts) lo
// sobreescriben localmente con vi.stubGlobal.
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin = "";
  readonly scrollMargin = "";
  readonly thresholds: ReadonlyArray<number> = [];
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = () => [];
}

if (typeof globalThis.IntersectionObserver !== "function") {
  vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
}

if (typeof window.matchMedia !== "function") {
  vi.stubGlobal(
    "matchMedia",
    vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))
  );
}

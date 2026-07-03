import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MvEmbed } from "./MvEmbed";

describe("MvEmbed", () => {
  const props = { youtubeId: "3TQd2ahq6oU", title: "Rising" };

  test("muestra la miniatura y no el iframe antes del click", () => {
    render(<MvEmbed {...props} />);
    expect(screen.getByRole("button", { name: `Reproducir MV: ${props.title}` })).toBeTruthy();
    expect(document.querySelector("iframe")).toBeNull();
  });

  test("al hacer click reemplaza la miniatura por el iframe embebido", () => {
    render(<MvEmbed {...props} />);
    fireEvent.click(screen.getByRole("button", { name: `Reproducir MV: ${props.title}` }));

    const iframe = document.querySelector("iframe");
    expect(iframe).not.toBeNull();
    expect(iframe?.getAttribute("src")).toBe(
      `https://www.youtube.com/embed/${props.youtubeId}?autoplay=1`
    );
    expect(iframe?.getAttribute("title")).toBe(props.title);
    expect(screen.queryByRole("button")).toBeNull();
  });
});

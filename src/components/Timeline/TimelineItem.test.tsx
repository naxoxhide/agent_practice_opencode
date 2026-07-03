import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { TimelineItem } from "./TimelineItem";
import type { MilestoneEntry } from "@/types/content";

const baseEntry: MilestoneEntry = {
  kind: "milestone",
  id: "test-entry",
  date: "2023-02-13",
  title: "Debut oficial de tripleS",
  body: "Texto de prueba del hito.",
};

describe("TimelineItem", () => {
  test("renderiza titulo, cuerpo y fecha formateada en espanol", () => {
    render(<TimelineItem entry={baseEntry} />);
    expect(screen.getByText(baseEntry.title)).toBeTruthy();
    expect(screen.getByText(baseEntry.body)).toBeTruthy();

    const expectedDate = new Intl.DateTimeFormat("es", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(`${baseEntry.date}T00:00:00`));
    const timeEl = document.querySelector("time");
    expect(timeEl?.textContent).toBe(expectedDate);
    expect(timeEl?.getAttribute("dateTime")).toBe(baseEntry.date);
  });

  test("no renderiza badge de sub-unidad ni MV si el hito no los tiene", () => {
    render(<TimelineItem entry={baseEntry} />);
    expect(document.querySelector("iframe, img, button")).toBeNull();
  });

  test("renderiza el badge de sub-unidad cuando subunitId esta presente", () => {
    render(<TimelineItem entry={{ ...baseEntry, subunitId: "nxt" }} />);
    expect(screen.getByText("NXT")).toBeTruthy();
  });

  test("renderiza el MV embebido cuando youtubeId y mvTitle estan presentes", () => {
    render(
      <TimelineItem
        entry={{ ...baseEntry, youtubeId: "3TQd2ahq6oU", mvTitle: "Rising" }}
      />
    );
    expect(screen.getByRole("button", { name: "Reproducir MV: Rising" })).toBeTruthy();
  });
});

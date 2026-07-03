import { timeline } from "@/data/timeline";
import { TimelineItem } from "@/components/Timeline/TimelineItem";
import { FunFactCard } from "@/components/Timeline/FunFactCard";

export function Timeline() {
  return (
    <section id="timeline" className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <h2 className="text-center font-display text-lg holo-text sm:text-xl">
        Linea de tiempo: 2022 — 2026
      </h2>
      <div className="relative mt-12 space-y-8 border-l-4 border-ink pl-6 sm:pl-10">
        {timeline.map((entry) =>
          entry.kind === "milestone" ? (
            <TimelineItem key={entry.id} entry={entry} />
          ) : (
            <FunFactCard key={entry.id} entry={entry} />
          )
        )}
      </div>
    </section>
  );
}

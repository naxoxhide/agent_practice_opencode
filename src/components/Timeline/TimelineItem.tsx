"use client";

import { useInView } from "@/lib/useInView";
import { SubunitBadge } from "@/components/SubunitBadge";
import { MvEmbed } from "@/components/Timeline/MvEmbed";
import type { MilestoneEntry } from "@/types/content";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("es", { year: "numeric", month: "long", day: "numeric" }).format(
    new Date(`${iso}T00:00:00`)
  );
}

export function TimelineItem({ entry }: { entry: MilestoneEntry }) {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`reveal pixel-frame bg-cosmo-surface p-5 sm:p-6 ${isVisible ? "is-visible" : ""}`}
    >
      <time dateTime={entry.date} className="font-display text-[9px] text-holo-cyan">
        {formatDate(entry.date)}
      </time>
      <h3 className="mt-2 font-display text-sm holo-text sm:text-base">{entry.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{entry.body}</p>
      {entry.subunitId && (
        <div className="mt-4">
          <SubunitBadge subunitId={entry.subunitId} />
        </div>
      )}
      {entry.youtubeId && entry.mvTitle && (
        <div className="mt-4 max-w-sm">
          <MvEmbed youtubeId={entry.youtubeId} title={entry.mvTitle} />
        </div>
      )}
    </article>
  );
}

"use client";

import { useInView } from "@/lib/useInView";
import { SparkleSticker } from "@/components/stickers/Stickers";
import type { FunFactEntry } from "@/types/content";

export function FunFactCard({ entry }: { entry: FunFactEntry }) {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <aside
      ref={ref}
      className={`reveal pixel-frame pixel-corner holo-fill ml-4 p-5 sm:ml-10 sm:p-6 ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="flex items-start gap-3 text-cosmo-void">
        <SparkleSticker size={28} className="mt-0.5 shrink-0" />
        <div>
          <p className="font-display text-[9px] uppercase tracking-wide">Dato curioso</p>
          <h3 className="mt-1 font-display text-sm">{entry.title}</h3>
          <p className="mt-2 text-sm leading-relaxed">{entry.body}</p>
        </div>
      </div>
    </aside>
  );
}

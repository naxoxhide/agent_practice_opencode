"use client";

import { useState } from "react";
import { members } from "@/data/members";
import { subunits } from "@/data/subunits";
import { MemberCard } from "@/components/MemberCard";

export function IntegrantesFilter() {
  const [filter, setFilter] = useState<string | null>(null);
  const filtered = filter ? members.filter((m) => m.subunitIds.includes(filter)) : members;

  return (
    <>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setFilter(null)}
          className={`pixel-button pixel-frame-sm px-3 py-1.5 font-display text-[9px] ${
            filter === null ? "holo-fill text-cosmo-void" : "bg-cosmo-surface text-ink"
          }`}
        >
          Todas
        </button>
        {subunits.map((subunit) => (
          <button
            key={subunit.id}
            type="button"
            onClick={() => setFilter(subunit.id)}
            className={`pixel-button pixel-frame-sm px-3 py-1.5 font-display text-[9px] ${
              filter === subunit.id ? "holo-fill text-cosmo-void" : "bg-cosmo-surface text-ink"
            }`}
          >
            {subunit.name}
          </button>
        ))}
      </div>
      <p className="mt-6 text-center font-display text-[9px] text-ink-muted">
        {filtered.length} integrante{filtered.length === 1 ? "" : "s"}
      </p>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {filtered.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </>
  );
}

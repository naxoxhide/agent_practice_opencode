import Link from "next/link";
import type { Member } from "@/types/content";

export function MemberCard({ member }: { member: Member }) {
  return (
    <Link
      href={`/integrantes/${member.slug}`}
      className="pixel-frame glow-on-hover group block aspect-[2.5/3.5] overflow-hidden bg-cosmo-surface"
    >
      <div className="holo-fill flex h-full flex-col justify-between p-3">
        <div className="flex items-start justify-between">
          <span className="bg-cosmo-void px-1.5 py-0.5 font-display text-[8px] text-holo-cyan">
            S{member.number}
          </span>
          <span className="bg-cosmo-void px-1.5 py-0.5 font-display text-[8px] text-holo-cyan">
            {member.country}
          </span>
        </div>
        <div className="bg-cosmo-void/80 p-2">
          <h3 className="font-display text-sm text-ink">{member.stageName}</h3>
          <p className="mt-1 font-display text-[8px] text-ink-muted">
            {member.subunitIds.length} sub-unidad{member.subunitIds.length === 1 ? "" : "es"}
          </p>
        </div>
      </div>
    </Link>
  );
}

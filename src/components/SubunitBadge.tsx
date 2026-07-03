import Link from "next/link";
import { getSubunit } from "@/data/subunits";

export function SubunitBadge({ subunitId }: { subunitId: string }) {
  const subunit = getSubunit(subunitId);
  if (!subunit) return null;
  return (
    <Link
      href={`/subunidades#${subunit.id}`}
      className="pixel-frame-sm holo-fill inline-block px-2 py-1 font-display text-[9px] text-cosmo-void"
    >
      {subunit.name}
    </Link>
  );
}

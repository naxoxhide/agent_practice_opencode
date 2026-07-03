import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline/Timeline";
import { MemberCard } from "@/components/MemberCard";
import { members } from "@/data/members";

export const metadata: Metadata = {
  title: "Historia completa de tripleS (2022-2026)",
  description:
    "La historia completa de tripleS desde el anuncio de Modhaus en 2022 hasta Assemble26: sub-unidades, MVs oficiales y datos curiosos en una linea de tiempo.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featuredMembers = members.slice(0, 8);

  return (
    <main>
      <Hero />
      <Timeline />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
        <h2 className="text-center font-display text-lg holo-text sm:text-xl">Integrantes</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-ink-muted">
          24 integrantes que rotan entre el grupo completo, sub-unidades y actividades en
          solitario, elegidas en gran parte por votacion de fans.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {featuredMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/integrantes"
            className="pixel-button pixel-frame-sm glow-on-hover inline-block bg-cosmo-surface px-5 py-2.5 font-display text-[10px] text-ink"
          >
            Ver las 24 integrantes
          </Link>
        </div>
      </section>
    </main>
  );
}

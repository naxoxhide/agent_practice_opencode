import type { Metadata } from "next";
import { subunits } from "@/data/subunits";
import { members } from "@/data/members";

export const metadata: Metadata = {
  title: "Sub-unidades de tripleS",
  description:
    "El sistema de sub-unidades de tripleS explicado: como se forman por votacion de fans y el listado completo de las 15 sub-unidades del grupo.",
  alternates: { canonical: "/subunidades" },
};

function memberName(id: string) {
  return members.find((m) => m.id === id)?.stageName ?? id;
}

export default function SubunidadesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <h1 className="text-center font-display text-lg holo-text sm:text-xl">
        El sistema de sub-unidades
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-ink-muted">
        tripleS no funciona como un grupo idol tradicional: sus 24 integrantes rotan entre el
        grupo completo y sub-unidades mas pequenas, en su mayoria elegidas por votacion de fans
        a traves de la app Cosmo. Cada sub-unidad tiene su propio concepto, EP y a veces su
        propio pais objetivo (como Hatchi, la unidad japonesa).
      </p>

      <div className="mt-12 space-y-6">
        {subunits.map((subunit) => (
          <section key={subunit.id} id={subunit.id} className="pixel-frame bg-cosmo-surface p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-sm holo-text">{subunit.name}</h2>
              <time dateTime={subunit.debutDate} className="font-display text-[9px] text-holo-cyan">
                {new Intl.DateTimeFormat("es", { year: "numeric", month: "long", day: "numeric" }).format(
                  new Date(`${subunit.debutDate}T00:00:00`)
                )}
              </time>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{subunit.description}</p>
            <p className="mt-3 font-display text-[9px] text-ink-muted">
              {subunit.releaseTitle} · &quot;{subunit.leadSingle}&quot;
            </p>
            <p className="mt-4 text-sm text-ink">
              {subunit.memberIds.map(memberName).join(", ")}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}

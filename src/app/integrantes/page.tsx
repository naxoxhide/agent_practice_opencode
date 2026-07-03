import type { Metadata } from "next";
import { IntegrantesFilter } from "@/components/IntegrantesFilter";

export const metadata: Metadata = {
  title: "Integrantes de tripleS",
  description:
    "Las 24 integrantes de tripleS: pais de origen, fecha de debut y en que sub-unidades participa cada una.",
  alternates: { canonical: "/integrantes" },
};

export default function IntegrantesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <h1 className="text-center font-display text-lg holo-text sm:text-xl">Integrantes de tripleS</h1>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm text-ink-muted">
        24 integrantes que rotan entre el grupo completo y las sub-unidades. Filtra para ver
        quien forma parte de cada una.
      </p>
      <IntegrantesFilter />
    </main>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { members, getMember } from "@/data/members";
import { getSubunit } from "@/data/subunits";
import { SubunitBadge } from "@/components/SubunitBadge";

export function generateStaticParams() {
  return members.map((member) => ({ slug: member.slug }));
}

type PageParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) return {};
  return {
    title: `${member.stageName} de tripleS — perfil e historia`,
    description: `${member.stageName} (${member.realName ?? member.stageName}), de ${member.country}: ${member.bio}`,
    alternates: { canonical: `/integrantes/${member.slug}` },
  };
}

export default async function MemberPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) notFound();

  const debuts = member.subunitIds
    .map((id) => getSubunit(id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
    .sort((a, b) => a.debutDate.localeCompare(b.debutDate));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Integrantes", item: "/integrantes" },
      { "@type": "ListItem", position: 2, name: member.stageName, item: `/integrantes/${member.slug}` },
    ],
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/integrantes" className="font-display text-[9px] text-holo-cyan">
        ← Todas las integrantes
      </Link>

      <header className="pixel-frame holo-fill mt-6 p-6 text-cosmo-void">
        <span className="bg-cosmo-void px-1.5 py-0.5 font-display text-[9px] text-holo-cyan">
          S{member.number}
        </span>
        <h1 className="mt-3 font-display text-xl sm:text-2xl">{member.stageName}</h1>
        {member.realName && <p className="mt-1 text-sm">{member.realName}</p>}
        <p className="mt-3 font-display text-[10px]">{member.country}</p>
      </header>

      <section className="pixel-frame mt-6 bg-cosmo-surface p-6">
        <h2 className="font-display text-sm holo-text">Biografia</h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{member.bio}</p>
        <p className="mt-4 border-l-4 border-holo-cyan pl-3 text-sm leading-relaxed text-ink-muted">
          {member.funFact}
        </p>
      </section>

      <section className="mt-6">
        <h2 className="font-display text-sm holo-text">Sub-unidades</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {member.subunitIds.map((id) => (
            <SubunitBadge key={id} subunitId={id} />
          ))}
        </div>
        <ol className="relative mt-8 space-y-6 border-l-4 border-ink pl-6">
          {debuts.map((subunit) => (
            <li key={subunit.id} className="pixel-frame-sm bg-cosmo-surface p-4">
              <time dateTime={subunit.debutDate} className="font-display text-[9px] text-holo-cyan">
                {new Intl.DateTimeFormat("es", { year: "numeric", month: "long", day: "numeric" }).format(
                  new Date(`${subunit.debutDate}T00:00:00`)
                )}
              </time>
              <h3 className="mt-1 font-display text-sm text-ink">{subunit.name}</h3>
              <p className="mt-2 text-sm text-ink-muted">{subunit.description}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

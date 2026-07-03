import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Historia" },
  { href: "/integrantes", label: "Integrantes" },
  { href: "/subunidades", label: "Sub-unidades" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-4 border-ink bg-cosmo-void/95 backdrop-blur-0">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-display text-xs holo-text sm:text-sm">
          tripleS: Into the Dimension
        </Link>
        <nav className="flex gap-3 font-display text-[10px] sm:gap-5 sm:text-xs">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink hover:text-holo-cyan transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

# AGENTS.md — tripleS: Into the Dimension

## Commands
| Command | What it does |
|---------|---------------|
| `npm run dev` | Start Next.js dev server (Turbopack) |
| `npm run build` | Type-check + lint + production build (Next.js) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (flat config, `eslint-config-next`) |
| `npm run check` | `node scripts/check-content.mjs` — validates data integrity (unique ids/slugs, cross-references between members/subunits/timeline, date parsing, YouTube id shape) |

- **No test framework installed.** `npm run check` is the lightweight content smoke test (plain `node:assert`, no Jest/Vitest).
- **ESLint is pinned to `^9.39.4`** (not 10.x): `eslint-config-next@16.2.10`'s bundled `eslint-plugin-react` crashes under ESLint 10's new `RuleContext` API (`getFilename()` removed). Revisit this pin next time `eslint-config-next` is upgraded.

## Architecture
- **Stack**: Next.js 16 (App Router, Turbopack) + React 19 + TypeScript + Tailwind CSS v4 (CSS-first config, no `tailwind.config.js` — tokens live in `src/app/globals.css` under `@theme`).
- **Content site, no CMS/DB**: all content is typed local data in `src/data/` (`members.ts`, `subunits.ts`, `timeline.ts`). It's a historical timeline that changes rarely — a database would be overkill.
- **Routes**: `/` (Hero + Timeline + members teaser), `/integrantes` (grid + client-side sub-unit filter), `/integrantes/[slug]` (24 static profiles via `generateStaticParams`), `/subunidades`.
- **`params`/`searchParams` are Promises** (Next 15+ convention) — always `await params` in pages/`generateMetadata`.
- **No animation library**: scroll-reveal via `src/lib/useInView.ts` (`IntersectionObserver` + `useSyncExternalStore` for `prefers-reduced-motion`, zero deps). Add Framer Motion only if parallax/spring physics are actually needed later.
- **MV embeds**: `src/components/Timeline/MvEmbed.tsx` is a click-to-load facade (YouTube thumbnail via `i.ytimg.com` → iframe only after click). Don't hardcode a YouTube video id without verifying it against the official `@triplescosmos` channel first.
- **Server vs Client Components**: keep `"use client"` on leaf nodes only (`MvEmbed`, `TimelineItem`, `FunFactCard`, `IntegrantesFilter`, `useInView`). `Timeline.tsx`, layouts and data-only components stay server components.

## Design system — "Pixel-Holo"
- **Two font families only**: `Press Start 2P` (`--font-pixel`, via `next/font/google`) for the logo/badges/short labels, `Inter` (`--font-sans`) for all body text and sub-headings (hierarchy via weight/size, not a third font).
- **Hard pixel frames, holographic fills**: `.pixel-frame` / `.pixel-frame-sm` (2-4px solid border, hard offset shadow, `border-radius: 0`) contain `.holo-fill` / `.holo-text` (violet → cyan → magenta gradient). Glow (`.glow-on-hover`) is reserved for hover/focus states, never the resting state — keeps body text readable on the dark background.
- **Stickers** (`src/components/stickers/Stickers.tsx`) are original SVGs (pixel-grid sparkle/ring generated from distance functions, card/badge shapes) — not copies of official tripleS/Modhaus artwork. `FloatingSticker.tsx` handles the floating animation, disabled under `prefers-reduced-motion`.
- Respect `prefers-reduced-motion` everywhere motion is added (`.sticker-float`, `.reveal`) — flagged as high-severity in UX guidelines for scroll/parallax effects.

## Content accuracy
- Facts sourced from Wikipedia (`TripleS`, `TripleS discography`) and, for YouTube ids / Alphie's roster, cross-checked against the official channel and Soompi. If a fact can't be verified, it's left out rather than guessed — don't add YouTube ids or biographical claims without a source.

## Git
- Active branch: `dev`. Commit with a descriptive message per logical chunk of work; don't force-push or rewrite history.

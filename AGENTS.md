# AGENTS.md — triples-objekts

## Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | **Type-check first** (`tsc -b`), then bundle (`vite build`) |
| `npm run lint` | Oxlint (Rust-based linter, not ESLint) |
| `npm run preview` | Serve production build locally |

- **No test framework** installed. CI workflow runs `npm run test:coverage` but that script does not exist — the workflow will fail.
- **No formatter** configured. Do not run `prettier` or any formatter command.

## Architecture

- **Stack**: React 19 + TypeScript 6 + Vite 8 (ESM, `"type": "module"`)
- **Entry**: `src/main.tsx` → `<App />` inside `<StrictMode>`
- **Structure**: `src/components/` (ObjektCard, ObjektModal), `src/data/objekts.ts` (mock data + types), CSS files co-located alongside components
- **Theme**: Y2K/cyberpunk (neon pinks/cyans/limes, pixel fonts, Windows 95-style modal, marquee ticker) — keep consistent when adding UI
- **Config**: oxlint.json for linting, vite.config.ts for build, tsconfig project references (`tsconfig.json` → `tsconfig.app.json` + `tsconfig.node.json`)

## Conventions

- **No comments** in code unless clarifying a non-obvious decision
- **CSS files** alongside their component files, not in a global styles folder
- **Typography**: "Press Start 2P" pixel font + Inter sans-serif from Google Fonts
- **TS strict**: `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, `noFallthroughCasesInSwitch` enforced

## Git

- Active branch: `dev`. PRs target `main`.
- README.md is the stock Vite template — not customized. Keep it that way unless asked.

## CI

Workflow (`.github/workflows/main.yml`) triggers on PRs to `main`. Currently broken (references missing `test:coverage` script).

## Context Log

After every task executed by an AI agent, skill, or automated process, append a concise entry to `docs/context.md` documenting:
- **Date/time** of the task
- **Task** — what was requested
- **Files touched** — list of files created/modified
- **Summary** — key decisions, shortcuts taken, deferred work, or notes relevant for future sessions

This log serves as persistent context for subsequent tasks, avoiding repeat analysis and keeping the agent aware of prior changes.

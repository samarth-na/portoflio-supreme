<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Repository Guide

## Critical Context

- **Next.js 16.2.4 + React 19** — Breaking changes from training data; check `node_modules/next/dist/docs/`
- **Package Manager**: Bun (`bun.lock` present). Use `bun install`, `bun run dev`, etc.
- **Lint/Format**: Biome 2.2.0 (not ESLint/Prettier). Commands: `bun run lint`, `bun run format`
- **React Compiler**: Enabled in `next.config.ts` — experimental, may affect debugging

## Developer Commands

```bash
# Development
bun run dev          # Starts dev server on localhost:3000

# Build & Deploy
bun run build        # Production build
bun run start        # Start production server

# Code Quality
bun run lint         # Biome check (lint + format check)
bun run format       # Biome format --write
```

## Architecture

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (lang="nl", metadata)
│   ├── page.tsx            # Home page with zoom calculation
│   └── globals.css         # Design tokens, CSS variables
└── components/newspaper/   # All UI components
    ├── PostalHeader.tsx    # Masthead component
    ├── NavStrip.tsx        # Navigation strip
    ├── MainGrid.tsx        # 2-column layout grid
    ├── LeftColumn.tsx      # Article content column
    ├── RightColumn.tsx     # Sidebar content
    └── *.module.css        # CSS Modules (being migrated to Tailwind)
```

## Styling State (Important)

**Hybrid CSS Modules + Tailwind v4** — Migration in progress:

- Tailwind v4 and `@tailwindcss/postcss` are installed
- CSS Module files still exist in `src/components/newspaper/*.module.css`
- Migration plan documented in `TAILWIND_MIGRATION_PLAN.md`
- Design tokens defined in `globals.css` using `:root` variables

**When modifying styles**: Check if component uses CSS Modules or Tailwind classes. Prefer Tailwind for new work, but maintain consistency with existing patterns.

## Design System Reference

See `FRONTEND-DESIGN.md` for complete specification:

- **Aesthetic**: "Modern vintage newspaper" — crisp editorial, bold typography
- **Colors**: `--paper: #ffffff`, `--ink: #0a0a0a`, `--accent: #c41e3a`
- **Typography**: Space Grotesk (primary), Georgia (serif fallback)
- **Layout**: Fixed 780px width, 2-column grid (1.6fr / 1fr)

## Special Implementation Notes

- **Zoom calculation** in `page.tsx`: Dynamically adjusts zoom based on viewport width (target 780px content)
- **Path alias**: `@/*` maps to `./src/*` (configured in `tsconfig.json`)
- **Language**: Dutch (`lang="nl"` in layout)
- **No test framework** currently configured

## Available Skills

This repo has `.agents/skills/` installed including:
- `frontend-design` — For building UI components
- `impeccable` — Design system utilities (adapt, animate, layout, typeset, etc.)

Reference skill docs in `.agents/skills/{skill-name}/SKILL.md` before using.

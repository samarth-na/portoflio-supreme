<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may differ from training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Repository Guide

## Critical Context

- **Next.js 16.2.4 + React 19** — Breaking changes from training data; check `node_modules/next/dist/docs/`
- **Package Manager**: Bun (`bun.lock`). Use `bun install`, `bun run dev`, etc.
- **Lint/Format**: Biome 2.2.0 (not ESLint/Prettier). Config: `biome.json`
- **React Compiler**: Enabled in `next.config.ts` — experimental, may affect debugging

## Developer Commands

```bash
bun run dev          # Start dev server on localhost:3000
bun run build        # Production build
bun run lint         # Biome check (lint + format)
bun run format       # Biome format --write
```

## Architecture

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Dutch lang="nl")
│   ├── page.tsx            # Home with zoom calculation
│   └── globals.css         # Tailwind v4 theme tokens
└── components/newspaper/   # UI components
    ├── PostalHeader.tsx
    ├── NavStrip.tsx
    ├── MainGrid.tsx
    ├── LeftColumn.tsx
    ├── RightColumn.tsx
    └── index.ts              # Barrel exports
```

## Styling

- **Tailwind v4** with `@import "tailwindcss"` and `@theme` tokens in `globals.css`
- **No CSS Modules** — migration complete, all styling via Tailwind classes
- **Path alias**: `@/*` → `./src/*` (tsconfig.json)
- **Design tokens**: oklch() colors, Montserrat (sans), Cormorant Garamond (serif), JetBrains Mono (mono)
- **Zoom calculation** in `page.tsx`: Dynamically scales 780px content to viewport

## Skills Available

`.agents/skills/` includes: `frontend-design`, `impeccable`, `layout`, `typeset`, `animate`, `adapt`, `audit`, `critique`, `colorize`, `polish`, `optimize`, `overdrive`, `tailwind-css-patterns`, `tailwind-design-system`

Reference: `.agents/skills/{skill}/SKILL.md`

# WOW Nieuwsbrief

A modern vintage newspaper-style newsletter for **WOW – Wij, Oxfam-Wereldwinkels** (maart/april/mei 2017).

Built with Next.js 16.2.4 + React 19, featuring a crisp editorial design with bold typography and a responsive zoom-based layout.

![Aesthetic](https://img.shields.io/badge/style-modern%20vintage%20newspaper-c41e3a)
![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black)
![React](https://img.shields.io/badge/React-19-61DAFB)

## Quick Start

This project uses [Bun](https://bun.sh/) as the package manager:

```bash
# Install dependencies
bun install

# Start development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the newsletter.

## Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server on localhost:3000 |
| `bun run build` | Create production build |
| `bun run start` | Start production server |
| `bun run lint` | Run Biome linter |
| `bun run format` | Format code with Biome |

## Design System

- **Aesthetic**: Modern vintage newspaper — crisp editorial layout with bold typography
- **Colors**: Paper white (`#ffffff`), Ink black (`#0a0a0a`), Accent red (`#c41e3a`)
- **Typography**: Space Grotesk (primary), Georgia (serif fallback)
- **Layout**: Fixed 780px content width with dynamic zoom scaling

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Dutch language, metadata)
│   ├── page.tsx            # Home page with zoom calculation
│   └── globals.css         # Design tokens, CSS variables
└── components/newspaper/   # UI components
    ├── PostalHeader.tsx    # Masthead with branding
    ├── NavStrip.tsx        # Navigation strip
    ├── MainGrid.tsx        # 2-column layout grid
    ├── LeftColumn.tsx      # Main article content
    └── RightColumn.tsx     # Sidebar content
```

## Tech Stack

- **Framework**: Next.js 16.2.4 (App Router)
- **Runtime**: React 19 with Experimental React Compiler
- **Styling**: Tailwind CSS v4 + CSS Modules (hybrid migration)
- **Linting**: Biome 2.2.0
- **Language**: TypeScript

## Special Features

- **Dynamic Zoom**: Automatically scales content based on viewport width for optimal 780px viewing
- **Dutch Language**: Full Dutch language support (`lang="nl"`)
- **Path Aliases**: `@/*` maps to `./src/*`

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)

---

Built with ❤️ for Oxfam-Wereldwinkels

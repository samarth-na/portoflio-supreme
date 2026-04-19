# Tailwind CSS v4 Migration Plan

## Goal

Migrate the newspaper page from CSS Modules to a clean Tailwind CSS v4 setup centered on a single `src/app/globals.css` file.

The migration must:

- keep the current visual output intact
- remove all five newspaper `.module.css` files
- preserve the current fixed-width newspaper composition and zoom behavior permanently
- avoid scattered one-off CSS by defining reusable theme tokens and utilities in `globals.css`
- stay aligned with the local Next.js 16 docs and Tailwind v4 CSS-first configuration

---

## Ground Rules

### Next.js / Tailwind constraints

- Tailwind v4 should be enabled through `@import "tailwindcss";` in `src/app/globals.css`.
- `postcss.config.mjs` should keep `@tailwindcss/postcss` and does not need extra Tailwind config for this project.
- No `tailwind.config.js` should be introduced unless a real limitation appears. This project can be completed with CSS-first config.
- `globals.css` is the only global stylesheet. It will contain:
  - Tailwind import
  - theme tokens
  - base styles
  - a small set of reusable custom utilities for repeated newspaper patterns

### Migration quality bar

- Do not replace repeated styles with long duplicated arbitrary-value class strings if they can be expressed once in `globals.css`.
- Do not drop existing spacing, timing, borders, gradients, or pseudo-elements during conversion.
- Do not change layout behavior unless the plan explicitly replaces it with an equivalent Tailwind-based implementation.

---

## Current Repository State

| Area | Status | Notes |
|------|--------|-------|
| Tailwind packages | Present | `tailwindcss` and `@tailwindcss/postcss` are already installed |
| PostCSS wiring | Correct | `postcss.config.mjs` already uses `@tailwindcss/postcss` |
| App CSS entry | Present | `src/app/layout.tsx` already imports `./globals.css` |
| Global layout styles | Present | `src/app/globals.css` contains tokens, reset, wrapper styles, and animation |
| Component styling | CSS Modules | 5 newspaper components import `.module.css` files |
| Page layout behavior | Custom | `src/app/page.tsx` applies runtime `zoom` based on viewport width |

### Files to migrate away from

```text
src/components/newspaper/PostalHeader.module.css
src/components/newspaper/NavStrip.module.css
src/components/newspaper/MainGrid.module.css
src/components/newspaper/LeftColumn.module.css
src/components/newspaper/RightColumn.module.css
```

---

## Target Architecture

### 1. `src/app/globals.css` becomes the single styling source

It will contain four layers of responsibility:

1. Tailwind import
2. Theme tokens
3. Base/global element styles
4. Reusable custom utilities for repeated newspaper visuals

### 2. Components become Tailwind-first JSX

Each newspaper component should render with inline class strings only.

Allowed exceptions:

- small local `const` strings for repeated class groups inside a component
- a tiny `cn()` helper only if one already exists later in the repo

Not needed:

- CSS Modules
- component-scoped CSS files
- `style={{}}` except for cases that are truly dynamic at runtime

### 3. Global CSS keeps only truly shared patterns

These styles belong in `globals.css` because they are repeated or foundational:

- font tokens
- color tokens
- page wrapper sizing
- base reset/body styles
- fade-in keyframes / animation utilities
- newspaper stripe placeholder background
- placeholder frame utility
- custom list bullet utility for pseudo-element bullets

---

## Step 1: Rebuild `src/app/globals.css` for Tailwind v4

Replace the current file with a Tailwind-v4-first structure.

### Required top-level structure

```css
@import "tailwindcss";

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap");

@theme {
  --color-paper: #ffffff;
  --color-ink: #0a0a0a;
  --color-accent: #c41e3a;
  --color-ink-light: #3d3d3d;
  --color-ink-muted: #6b6b6b;
  --color-rule-light: #ffffff;
  --color-accent-hover: #a01830;
  --color-accent-subtle: rgba(196, 30, 58, 0.08);

  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-serif: "Georgia", "Times New Roman", Times, serif;

  --spacing-page: 780px;

  --animate-fade-in-up: fade-in-up 0.6s ease-out forwards;

  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
```

### Why these token names

- Use `--font-sans` and `--font-serif`, not `--font-family-sans` / `--font-family-serif`.
- Tailwind v4 utilities like `font-sans`, `font-serif`, `text-accent`, and `border-ink` resolve from `@theme` namespace variables.

### Keep these base/global styles in `globals.css`

The current app still needs these rules globally:

- `html`, `body` overflow/background handling
- `html` font size
- `body` font stack, text color, antialiasing
- page wrapper sizing
- global margin reset

Recommended structure:

```css
@layer base {
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 14px;
    overflow-x: hidden;
    overflow-y: auto;
    background: var(--color-paper);
  }

  body {
    overflow-x: hidden;
    overflow-y: auto;
    background: var(--color-paper);
    color: var(--color-ink);
    font-family: var(--font-sans);
    font-size: 14px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
```

Important correction:

- Remove the current global `margin-top: 0.5rem` from `*`. That rule is too blunt and is being manually canceled in places like the nav strip. Spacing must move into explicit Tailwind classes on the actual elements that need it.

### Keep the page wrapper as a global utility

Because the page root already uses `"pageWrapper"` from JSX and the width is a page-level layout concern, retain it globally:

```css
@layer components {
  .pageWrapper {
    width: 100%;
    max-width: var(--spacing-page);
    margin: 0 auto;
    background: var(--color-paper);
    padding-inline: 1rem;
  }
}
```

### Add reusable newspaper utilities

These should live in `globals.css` to avoid repeated arbitrary CSS in JSX:

```css
@utility newspaper-placeholder {
  background: repeating-linear-gradient(
    45deg,
    var(--color-paper),
    var(--color-paper) 4px,
    var(--color-rule-light) 4px,
    var(--color-rule-light) 5px
  );
  border: 1px solid var(--color-rule-light);
}

@utility newspaper-placeholder-frame {
  @apply newspaper-placeholder flex items-center justify-center font-sans text-ink-muted transition-transform duration-300 ease-out;
}

@utility newspaper-hover-lift {
  @apply hover:scale-[1.02] hover:shadow-[0_4px_12px_rgba(10,10,10,0.1)];
}

@utility animate-fade-in-up {
  animation: var(--animate-fade-in-up);
  opacity: 0;
}

@utility prose-bullet-item {
  position: relative;
  padding-left: 6px;
}

@utility prose-bullet-item::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--color-ink);
}
```

Notes:

- `newspaper-placeholder` replaces the repeated striped background used across multiple placeholder boxes.
- `animate-fade-in-up` should be paired with delay utilities directly in JSX, e.g. `delay-100`, `delay-200`, or arbitrary animation shorthand if needed.
- `prose-bullet-item` is the cleanest way to preserve the custom bullet pseudo-element without keeping a CSS Module.

---

## Step 2: Preserve the current page-level layout behavior

The migration is not only about component CSS. The page currently depends on both global wrapper width and client-side zoom logic.

### Keep or explicitly replace the zoom behavior in `src/app/page.tsx`

Current behavior:

- computes `targetWidth = window.innerWidth - 512`
- sets `document.documentElement.style.zoom`
- clamps zoom to a minimum of `1`

This is part of the visual layout and must remain in place after the migration. The Tailwind work must not remove it or treat it as a temporary compatibility layer.

Plan:

- keep the zoom effect exactly as it behaves today
- do not plan a follow-up removal or replacement as part of this migration

### Keep page root structure unchanged during migration

The JSX structure in `src/app/page.tsx` should remain:

```tsx
<div className="pageWrapper">
  <PostalHeader />
  <NavStrip />
  <MainGrid leftColumn={<LeftColumn />} rightColumn={<RightColumn />} />
</div>
```

That keeps migration scope controlled:

- styling changes happen in the components and `globals.css`
- page behavior remains stable

---

## Step 3: Migrate each component completely

Do not migrate by partial property mapping. Migrate by selector parity.

Each component section below lists the exact behavior that must survive the conversion.

### `PostalHeader.tsx`

#### Required structure and classes

- root header:
  - `flex items-start justify-between border-b-2 border-ink pb-2`
- left block:
  - `shrink-0 font-sans text-[9px] leading-[1.4] text-ink-muted`
- center block:
  - `flex flex-1 flex-col items-center justify-center`
- logo:
  - `font-sans text-[4rem] leading-none font-black uppercase tracking-[-2px] text-ink`
- subtitle:
  - `mt-1 font-sans text-[12px] font-normal uppercase tracking-[4px] text-ink`
- right block:
  - `shrink-0 text-right font-sans`
- issue info:
  - `text-[11px] leading-[1.4] uppercase tracking-[1px] text-ink`
- contact info:
  - `mt-3 text-[9px] leading-[1.4] text-ink-muted`

#### Required cleanup

- remove the inline `style={{ marginTop: "8px" }}` on the postal code line
- replace it with `className="mt-2"`

### `NavStrip.tsx`

#### Root nav

- `mt-0 flex border-y border-ink`

#### Nav item

- `flex-1 border-r border-ink px-2.5 py-1.5 transition-colors duration-200 ease-in-out hover:bg-accent-subtle`
- last item must not render a right border:
  - use `last:border-r-0`

#### Content styles

- page number:
  - `mr-1 font-sans text-[14px] font-bold text-accent`
- section title:
  - `font-sans text-[11px] font-bold uppercase tracking-[0.5px] text-accent`
- description:
  - `mt-0.5 font-serif text-[11px] leading-[1.4] text-ink-light`

### `MainGrid.tsx`

#### Root grid

- `grid grid-cols-[1fr_0.6fr] gap-0`

#### Left and right wrappers

- left wrapper:
  - `border-r border-ink p-0`
- right wrapper:
  - `p-0`

### `LeftColumn.tsx`

#### Column root

- `flex flex-col`

#### Pull quote block

Must preserve:

- `flex`
- `relative`
- `m-[7px] mt-[7px] border-b border-ink p-[7px]`
- fade-in animation with no delay

Recommended class group:

```text
relative mt-[7px] m-[7px] flex border-b border-ink p-[7px] animate-fade-in-up
```

#### Paintbrush container and placeholder

- container: `mr-[7px] shrink-0`
- placeholder:
  - `newspaper-placeholder-frame newspaper-hover-lift`
  - `aspect-[60/80] w-[clamp(40px,15vw,60px)] h-auto text-[9px]`

#### Quote content

- wrapper: `flex flex-1 flex-col justify-center`
- quote:
  - `font-sans text-[16px] leading-[1.4] italic text-ink`
- attribution:
  - `mt-1 font-sans text-[10px] leading-[1.4] text-ink`

#### Circle image

- absolute wrapper:
  - `absolute top-[7px] right-[7px]`
- placeholder:
  - `newspaper-placeholder-frame newspaper-hover-lift size-[clamp(35px,12vw,55px)] overflow-hidden rounded-full text-[8px]`

#### Article block

Must preserve:

- `m-[6px_7px] p-[6px_7px]`
- fade-in animation with `0.1s` delay

Recommended strategy:

- use `animate-fade-in-up [animation-delay:0.1s]`

#### Shared text styles

- headline:
  - `mb-[6px] font-sans text-[11px] font-bold uppercase tracking-[2px] text-ink`
- body text:
  - `font-sans text-[11px] leading-[1.55] text-ink`
- paragraphs:
  - `mb-[6px] last:mb-0`
- link text:
  - `text-accent underline underline-offset-[2px] transition-colors duration-200 hover:text-accent-hover`

#### Landscape image

- container:
  - `mt-[6px] w-full`
- placeholder:
  - `newspaper-placeholder-frame newspaper-hover-lift h-[180px] w-full text-[10px]`

#### Cijfer block

Must preserve:

- `m-[6px_7px] border-t border-ink p-[6px_7px]`
- fade-in animation with `0.2s` delay

Use:

- `animate-fade-in-up [animation-delay:0.2s]`

### `RightColumn.tsx`

#### Column root

- `flex flex-col`

#### Hatched decorative box

Current CSS only guarantees:

- `w-full h-[60px] border-b border-ink`

If the design is meant to be striped, this can optionally also use `newspaper-placeholder`, but do not add that unless it is a deliberate visual choice. The current module does not define a striped background there.

#### WFTD article shell

Must preserve:

- `m-[5px_6px] mt-[6px] p-[5px_6px]`
- fade-in animation with `0.1s` delay

#### Headings and divider

- headline wrapper:
  - `mb-[6px]`
- `h2`:
  - `font-sans text-[12px] font-bold uppercase tracking-[1px] text-ink`
- `h3`:
  - `mt-[2px] font-sans text-[14px] font-bold uppercase tracking-[1px] text-ink`
- divider:
  - `my-1 border-0 border-t border-ink`

#### Subtitle

- `mb-[6px] font-sans text-[12px] font-bold italic text-ink`

#### Bullet grid

- root:
  - `grid grid-cols-2 gap-[6px]`
- right bullets wrapper:
  - `flex flex-col`
- lists:
  - `m-0 list-none p-0`
- bullet item:
  - `prose-bullet-item mb-[5px] font-sans text-[11px] leading-[1.5] text-ink last:mb-0`

#### Link and placeholders

- WFTD link:
  - `mt-[5px] inline-block text-[11px] text-accent underline underline-offset-[2px] transition-colors duration-200 hover:text-accent-hover`
- bicycle container:
  - `mt-[6px] aspect-[120/80] w-[clamp(80px,30%,120px)] h-auto`
- bicycle placeholder:
  - `newspaper-placeholder-frame newspaper-hover-lift size-full text-[9px]`
- Oxfam logo container:
  - `mt-[6px] flex items-center gap-1`
- icon placeholder:
  - `newspaper-placeholder-frame size-[clamp(24px,8vw,32px)] rounded-full text-[8px]`
- Oxfam text:
  - `font-sans text-[13px] leading-[1.2] font-bold text-ink`
- Oxfam sublabel:
  - `block font-normal`

---

## Step 4: Remove CSS Module imports from components

For each of these files:

```text
src/components/newspaper/PostalHeader.tsx
src/components/newspaper/NavStrip.tsx
src/components/newspaper/MainGrid.tsx
src/components/newspaper/LeftColumn.tsx
src/components/newspaper/RightColumn.tsx
```

Do the following:

1. Remove `import styles from "./*.module.css";`
2. Replace every `className={styles.foo}` with a Tailwind class string
3. Replace any leftover inline margin styles with classes
4. Keep JSX structure stable unless a tiny wrapper simplification reduces duplication

---

## Step 5: Delete obsolete CSS Modules

After all components compile and render correctly, delete:

```text
src/components/newspaper/PostalHeader.module.css
src/components/newspaper/NavStrip.module.css
src/components/newspaper/MainGrid.module.css
src/components/newspaper/LeftColumn.module.css
src/components/newspaper/RightColumn.module.css
```

Delete them only after JSX has been fully migrated.

---

## Implementation Order

Use this order to reduce breakage:

1. Update `src/app/globals.css` to Tailwind v4 structure
2. Migrate `MainGrid.tsx`
3. Migrate `PostalHeader.tsx`
4. Migrate `NavStrip.tsx`
5. Migrate `LeftColumn.tsx`
6. Migrate `RightColumn.tsx`
7. Remove CSS Module imports
8. Delete `.module.css` files
9. Run verification

Rationale:

- `MainGrid`, `PostalHeader`, and `NavStrip` are smaller and give a fast sanity check that the global theme tokens work.
- `LeftColumn` and `RightColumn` depend on the reusable utilities and animation strategy, so they should come after `globals.css` is settled.

---

## Verification Checklist

### Compile / static validation

- [ ] `next build` passes
- [ ] `biome check` passes
- [ ] no `.module.css` imports remain under `src/components/newspaper`
- [ ] no deleted `.module.css` files are still referenced

### Visual parity checks

- [ ] header alignment matches the pre-migration version
- [ ] nav strip still has no top gap and the last item has no right border
- [ ] main grid still uses `1fr / 0.6fr`
- [ ] left column placeholders preserve striped fill, borders, hover lift, and sizing
- [ ] right column bullets still render with custom bullet markers
- [ ] article/link colors match existing accent behavior
- [ ] staggered entry animation remains visible on:
  - pull quote block
  - left article block
  - left cijfer block
  - right WFTD article
- [ ] page wrapper width and zoom behavior remain unchanged and intentionally preserved

### Cleanup checks

- [ ] no `:root` newspaper design tokens remain outside Tailwind `@theme`
- [ ] no repeated placeholder gradient strings remain in component JSX
- [ ] no broad global spacing hacks remain in `globals.css`

---

## Definition of Done

The migration is complete when all of the following are true:

- all newspaper components use Tailwind class strings only
- `src/app/globals.css` is the only stylesheet used for this feature
- all five newspaper CSS Modules are deleted
- the visual result matches the current page
- the setup is a valid Tailwind v4 + Next.js 16 CSS-first configuration
- the runtime zoom behavior remains part of the shipped page

---

## Non-Goals

These are intentionally out of scope for this migration:

- redesigning the page
- introducing a component library or CVA abstraction
- switching Google Fonts loading to `next/font`

Those can be separate follow-up tasks after the Tailwind migration is stable.

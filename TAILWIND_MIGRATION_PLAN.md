# Tailwind CSS Migration Plan

## Overview

Migrate the project from scattered CSS Modules to a single Tailwind CSS setup with one `globals.css` file.

---

## Current State

| Item | Count | Location |
|------|-------|----------|
| CSS Module files | 5 | `src/components/newspaper/*.module.css` |
| Tailwind installed | ✅ Yes | `@tailwindcss/postcss`, `tailwindcss` in devDependencies |
| Tailwind configured | ❌ No | No `tailwind.config.js` exists |
| CSS in use | CSS Modules | Each component imports its own `.module.css` |

---

## Files to Delete

After migration, these files will be removed:

```
src/components/newspaper/PostalHeader.module.css
src/components/newspaper/NavStrip.module.css
src/components/newspaper/MainGrid.module.css
src/components/newspaper/LeftColumn.module.css
src/components/newspaper/RightColumn.module.css
```

---

## Step-by-Step Plan

### Step 1: Configure `globals.css`

**Before:**
```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap");

:root {
  --paper: #ffffff;
  --ink: #0a0a0a;
  /* ... all CSS variables ... */
}
```

**After:**
```css
@import "tailwindcss";

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap");

@theme {
  --color-paper: #ffffff;
  --color-ink: #0a0a0a;
  --color-accent: #c41e3a;
  --color-ink-light: #3d3d3d;
  --color-ink-muted: #6b6b6b;
  --color-rule: #0a0a0a;
  --color-rule-light: #ffffff;
  --color-accent-hover: #a01830;
  --color-accent-subtle: rgba(196, 30, 58, 0.08);

  --font-family-sans: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-family-serif: "Georgia", "Times New Roman", Times, serif;

  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 14px;
  --spacing-xl: 20px;

  --spacing-page: 780px;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@utility animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}
```

---

### Step 2: Convert Component Styles

#### `PostalHeader.tsx`

| CSS Module | Tailwind |
|------------|----------|
| `display: flex` | `flex` |
| `justify-content: space-between` | `justify-between` |
| `align-items: flex-start` | `items-start` |
| `padding-bottom: 8px` | `pb-2` |
| `border-bottom: 2px solid var(--ink)` | `border-b-2 border-ink` |
| `flex: 0 0 auto` | `shrink-0` |
| `font-family: var(--font-primary)` | `font-sans` |
| `font-size: 9px` | `text-[9px]` |
| `line-height: 1.4` | `leading-[1.4]` |
| `color: var(--ink-muted)` | `text-ink-muted` |
| `font-size: 4rem` | `text-[4rem]` |
| `font-weight: 900` | `font-black` |
| `letter-spacing: -2px` | `tracking-[-2px]` |
| `text-transform: uppercase` | `uppercase` |
| `margin-top: 4px` | `mt-1` |

#### `NavStrip.tsx`

| CSS Module | Tailwind |
|------------|----------|
| `border-top: 1px solid var(--ink)` | `border-t border-ink` |
| `border-bottom: 1px solid var(--ink)` | `border-b border-ink` |
| `display: flex` | `flex` |
| `flex: 1` | `flex-1` |
| `padding: 6px 10px` | `px-2.5 py-1.5` |
| `border-right: 1px solid var(--ink)` | `border-r border-ink` |
| `background-color: var(--accent-subtle)` | `bg-accent-subtle` |

#### `MainGrid.tsx`

| CSS Module | Tailwind |
|------------|----------|
| `display: grid` | `grid` |
| `grid-template-columns: 1fr 0.6fr` | `grid-cols-[1fr_0.6fr]` |
| `gap: 0` | `gap-0` |
| `border-right: 1px solid var(--ink)` | `border-r border-ink` |
| `padding: 0` | `p-0` |

#### `LeftColumn.tsx`

| CSS Module | Tailwind |
|------------|----------|
| `display: flex` | `flex` |
| `flex-direction: column` | `flex-col` |
| `padding: 7px` | `p-[7px]` |
| `margin: 7px` | `m-[7px]` |
| `border-bottom: 1px solid var(--ink)` | `border-b border-ink` |
| `position: relative` | `relative` |
| `flex: 0 0 auto` | `shrink-0` |
| `margin-right: 7px` | `mr-[7px]` |
| `width: clamp(40px, 15vw, 60px)` | `w-[clamp(40px,15vw,60px)]` |
| `height: auto` | `h-auto` |
| `aspect-ratio: 60 / 80` | `aspect-[60/80]` |
| `display: flex` | `flex` |
| `align-items: center` | `items-center` |
| `justify-content: center` | `justify-center` |
| `font-size: 9px` | `text-[9px]` |
| `color: var(--ink-muted)` | `text-ink-muted` |
| `transition: transform 0.3s...` | `transition-transform duration-300` |
| `box-shadow: 0 4px 12px...` | `shadow-md` |

#### `RightColumn.tsx`

Similar patterns to above. The bullet grid (`grid-template-columns: 1fr 1fr`) converts to `grid-cols-2`.

---

### Step 3: Remove CSS Module Imports

In each component, remove:
```typescript
import styles from "./PostalHeader.module.css";
```

And replace `styles.className` with direct Tailwind class strings.

---

### Step 4: Delete CSS Module Files

```
rm src/components/newspaper/PostalHeader.module.css
rm src/components/newspaper/NavStrip.module.css
rm src/components/newspaper/MainGrid.module.css
rm src/components/newspaper/LeftColumn.module.css
rm src/components/newspaper/RightColumn.module.css
```

---

## Summary of Changes

| Action | Count |
|--------|-------|
| Files deleted | 5 |
| Components updated | 5 |
| New Tailwind utilities | 1 (`animate-fade-in-up`) |
| Theme tokens defined | ~20 |

---

## Verification Checklist

- [ ] All components render without CSS Module errors
- [ ] No `:root` variable references remain in components
- [ ] Fade-in animation works on all sections
- [ ] Hover states function on placeholders
- [ ] Grid layout matches original (2-column with 1fr/0.6fr split)
- [ ] Border rules visible and correct
- [ ] Fonts (Inter, Space Grotesk) load correctly

---

## Notes

- The `repeating-linear-gradient` striped pattern is a custom visual. We'll replace with `bg-[repeating-linear-gradient(...)]` directly in the class strings since it's a one-off pattern.
- The serif font (`Georgia`) is used only for `.description` in NavStrip - we'll use `font-serif` with `font-family: var(--font-serif)` fallback.
- Tailwind v4 uses `@theme` for custom tokens instead of `tailwind.config.js` for most cases.

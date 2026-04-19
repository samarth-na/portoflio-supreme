# Frontend Design Specification
## WOW – Wij, Oxfam-Wereldwinkels Newsletter

---

## 1. Concept & Vision

A **modern vintage newspaper** — the crisp authority of contemporary print journalism meets the tactile warmth of heritage publication design. Clean white paper stock with bold ink typography, sharp geometric structure, and strategic color accents that echo classic broadsheet aesthetics. The design feels like a premium print piece translated faithfully to screen, not a recreation of dated digital newspaper templates.

**Tone:** Authoritative, refined, timeless editorial
**Audience:** Fair trade supporters, volunteers, environmentally-conscious consumers
**Differentiation:** The confidence of a well-printed newsletter — no gimmicks, just exceptional craft

---

## 2. Design Language

### Aesthetic Direction
**Reference:** The Guardian's print edition meets vintage Swiss typography. High contrast, confident whitespace, structured grid with intentional asymmetric moments. Clean but not sterile — personality comes from refined details, not decoration.

### Color Palette

```css
:root {
  /* Core */
  --paper: #ffffff;
  --ink: #0a0a0a;
  --accent: #c41e3a;

  /* Supporting */
  --ink-light: #3d3d3d;
  --ink-muted: #6b6b6b;
  --rule: #0a0a0a;
  --rule-light: #d0d0d0;

  /* Accent variations */
  --accent-hover: #a01830;
  --accent-subtle: rgba(196, 30, 58, 0.08);
}
```

**Rationale:**
- **Pure white paper (#ffffff)** — Maximum contrast, clean editorial feel, modern crispness
- **Deep black ink (#0a0a0a)** — Richer than pure black (#000000), better for extended reading
- **Burnt orange accent (#c73e1d)** — Bold contrast against white, classic newspaper masthead color
- **Refined grays** — Subtle hierarchy without warmth

### Typography

**Font Stack:**
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

:root {
  --font-primary: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-serif: 'Georgia', 'Times New Roman', Times, serif;
}
```

**Type Scale (unchanged from original):**
| Element | Size | Weight | Transform | Letter-spacing |
|---------|------|--------|-----------|----------------|
| Logo (WOW) | 72px | 900 | uppercase | -2px |
| Subtitle | 12px | 400 | uppercase | 4px |
| Nav items | 11-14px | 700 | uppercase | 0.5-1px |
| Headlines | 12-13px | 700 | uppercase | 2px |
| Body text | 12-14px | 400 | none | 0 |
| Quotes | 17px | 400 | none | 0 |
| Attribution | 11px | 400 | none | 0 |

**Fallbacks preserved:**
- Serif fallback for pull quotes and body text (Times New Roman)
- Sans-serif fallback for navigation and UI elements (Arial, Helvetica)

### Spatial System

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 4px | Tight spacing |
| `--space-sm` | 8px | Component internal |
| `--space-md` | 12px | Section padding |
| `--space-lg` | 14px | Column padding |
| `--space-xl` | 20px | Section separation |

### Motion Philosophy

**Principle:** Motion serves function, never decorates. Every animation has a clear purpose.

| Element | Animation | Duration | Easing | Trigger |
|---------|-----------|----------|--------|---------|
| Links | Color transition | 200ms | ease | hover |
| Placeholders | Scale + shadow | 300ms | ease-out | hover |
| Content blocks | Fade + slide up | 600ms | ease-out | scroll-into-view |

**Stagger pattern:**
- `.pullQuoteBlock`: 0ms delay
- `.articleBlock`: 100ms delay
- `.cijferBlock`: 200ms delay
- `.wftdArticle`: 100ms delay

### Visual Assets Strategy

**Placeholder styling:**
- Subtle diagonal line pattern (45°, 8px repeat)
- Soft border (1px solid var(--rule-light))
- Slight inner shadow for depth
- Hover: gentle scale (1.02) + drop shadow

**Decorative elements:**
- Hatched box: diagonal lines at 45°, 6px pattern, ink color
- Horizontal rules: 1px solid ink
- Section dividers: 4px gap with centered dot accent

---

## 3. Layout & Structure

### Grid System

```
┌─────────────────────────────────────────────────────────┐
│  POSTAL HEADER                                    [780px]│
├─────────────────────────────────────────────────────────┤
│  NAV STRIP (5 items)                                    │
├─────────────────────────────────────────────────────────┤
│ ┌─────────────────────┬───────────────────┐            │
│ │                     │ │                 │            │
│ │   LEFT COLUMN       │ │  RIGHT COLUMN   │            │
│ │   (1.6x wider)      │ │  (1x)           │            │
│ │                     │ │                 │            │
│ │   • Pull Quote      │ │  • Hatched Box  │            │
│ │   • Article         │ │  • WFTD Article │            │
│ │   • Cijfer Block    │ │                 │            │
│ │                     │ │                 │            │
│ └─────────────────────┴───────────────────┘            │
└─────────────────────────────────────────────────────────┘
```

### Column Proportions
- Left column: `1.6fr`
- Right column: `1fr`
- Gap: 0 (shared border)
- Total width: 780px (fixed for print fidelity)

### Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Desktop | >780px | Centered, full layout |
| Tablet | 600-780px | Slight padding increase |
| Mobile | <600px | Single column, full width |

---

## 4. Component Inventory

### PostalHeader
- **Structure:** 3-block flex row (postal info | logo | issue info)
- **States:** Static (no interactive states)
- **Visual details:**
  - Logo: 72px bold, centered
  - Subtitle: 12px spaced letters below logo
  - Postal info: 9px gray text, top-left
  - Issue info: 11px, top-right

### NavStrip
- **Structure:** 5 equal flex items, border-separated
- **States:**
  - Default: All items visible
  - Hover: Subtle background shift to var(--accent-subtle)
- **Visual details:**
  - Page number: 14px orange bold
  - Section title: 11px orange bold
  - Description: 11px serif gray

### MainGrid
- **Structure:** 2-column CSS grid
- **States:** Static
- **Visual details:**
  - Left column has right border (1px solid ink)
  - Top border (1px solid ink)

### LeftColumn
- **Sub-components:**
  1. PullQuoteBlock (border-bottom separated)
  2. ArticleBlock (with landscape image)
  3. CijferBlock (border-top separated)

- **States:**
  - Scroll: fade-in-up animation on viewport entry
  - Hover: Placeholder scale effect

### RightColumn
- **Sub-components:**
  1. HatchedBox (decorative)
  2. WFTDArticle (bullet grid layout)

- **States:**
  - Scroll: fade-in-up animation
  - Hover: Placeholder scale effect

### Placeholders (all types)
- **States:**
  - Default: Diagonal line pattern, soft border
  - Hover: Scale 1.02, shadow elevation
- **Types:**
  - Paintbrush: 60×80px portrait
  - Circle: 55×55px rounded
  - Landscape: Full width × 180px
  - Bicycle: 120×80px

---

## 5. Technical Approach

### Framework
- Next.js 14+ (App Router)
- React 18+
- CSS Modules (no external styling library)
- Google Fonts (Space Grotesk only)

### File Structure
```
src/
├── app/
│   ├── globals.css          # Design tokens, base styles, fonts
│   ├── layout.tsx           # Metadata, HTML structure
│   └── page.tsx             # Home page composition
└── components/
    └── newspaper/
        ├── PostalHeader.tsx/module.css
        ├── NavStrip.tsx/module.css
        ├── MainGrid.tsx/module.css
        ├── LeftColumn.tsx/module.css
        └── RightColumn.tsx/module.css
```

### Implementation Priority

1. **Phase 1: Foundation**
   - Update `globals.css` with new color tokens and font import
   - Update all component CSS files with font-family declarations

2. **Phase 2: Visual Refinement**
   - Enhance placeholder styling (patterns, borders)
   - Refine spacing and alignment
   - Update navigation hover states

3. **Phase 3: Motion**
   - Add scroll-triggered fade animations
   - Add placeholder hover effects
   - Link color transitions

4. **Phase 4: Polish**
   - Cross-browser testing
   - Accessibility verification
   - Final spacing/sizing audit

---

## 6. Design Decisions

### Why White Paper?
The original cream (#f2ede3) reads as aged or yellowed. Pure white (#ffffff) conveys:
- Modern editorial confidence
- Maximum contrast for readability
- Print-inspired authenticity without simulating age

### Why Space Grotesk?
- Clean, contemporary sans-serif without being generic
- Slightly condensed letterforms echo newspaper column narrowness
- Excellent screen rendering at small sizes
- Distinctive enough to feel designed, not default

### Why Burnt Orange (#c73e1d)?
- High contrast against white paper
- Classic newspaper masthead color ( seen in WSJ, NYT regional editions)
- Warm enough to feel approachable, not cold
- Works for both headers and links

### Why Minimal Animation?
- Newspaper aesthetic is confident, still
- Motion should feel like paper settling, not digital sparkle
- Performance: light weight, no JS dependencies
- Accessibility: respects prefers-reduced-motion

---

## 7. Appendix: CSS Variables Reference

```css
:root {
  /* Colors */
  --paper: #ffffff;
  --ink: #0a0a0a;
  --accent: #c73e1d;
  --ink-light: #3d3d3d;
  --ink-muted: #6b6b6b;
  --rule: #0a0a0a;
  --rule-light: #d0d0d0;
  --accent-hover: #a33319;
  --accent-subtle: rgba(199, 62, 29, 0.08);

  /* Typography */
  --font-primary: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-serif: 'Georgia', 'Times New Roman', Times, serif;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 12px;
  --space-lg: 14px;
  --space-xl: 20px;

  /* Layout */
  --page-width: 780px;
  --column-gap: 0px;
}
```

---

*Document version: 1.0*
*Last updated: April 2026*
*Author: Frontend Design Review*
# Brand Framework — Design

**Source:** Purpose Media brand framework, Design section (6 pages)

---

## Typography

**Typeface family:** Inter (primary), with system sans stack fallback

### Type Scale

| Class | Usage | Size | Weight | Line Height | Tracking |
|---|---|---|---|---|---|
| `pp-h-display` | Page heroes, section announcements | `clamp(56px, 10vw, 140px)` | 500 | 0.95 | -0.04em |
| `pp-h-section` | Sub-section openers | `clamp(38px, 5.5vw, 68px)` | 500 | 1.05 | -0.025em |
| `pp-h-sub` | Card titles, block headings | 22px | 500 | 1.25 | -0.01em |
| `pp-h-tag` | Block labels, mini-headings | 13px | 600 | 1.4 | 0.04em |
| `pp-lede` | Intro paragraphs | 22px | 400 | 1.5 | -0.005em |
| `pp-prose-body` | Body copy (baseline) | 16px | 400 | 1.7 | 0 |

### Rules

- **Alignment:** Left-aligned default; centered only for display heroes and single-statement callouts
- **Numerals:** Tabular alignment required for financial contexts

---

## Colour Palette

### Brand Blues

| Name | Hex | CSS Variable | Usage |
|---|---|---|---|
| Deep Blue | `#035875` | `--color-deep` | Dark sections, links, secondary text on light backgrounds |
| Bright Blue | `#0090d1` | `--color-accent` | Fills, rules, icons, large/UI text |

### Neutrals

| Name | Hex | CSS Variable | Usage |
|---|---|---|---|
| Ink | `#24201b` | `--color-ink` | Primary body text, headings on light; text on bright-blue fills |
| Cream | `#fbfcfd` | `--color-cream` | Body background, text on dark sections |
| Cream-warm | `#eef1f4` | `--color-cream-warm` | Secondary surfaces, cards, section breaks |
| Line | `#d5dce2` | `--color-line` | Hairlines, dividers, card borders, muted text on dark |

### Internal Use Only

| Name | Hex | CSS Variable | Usage |
|---|---|---|---|
| Berry | `#a8334d` | `--color-berry` | Internal tools, documentation, editorial accents |

---

## Accessibility and Contrast Rules

**Standard:** WCAG AA minimum 4.5:1 for standard text; 3:1 for large text (24px+) and interface elements

### Approved Pairings

| Foreground | Background | Ratio | Status |
|---|---|---|---|
| Ink | Cream | 15.8:1 | Pass AA |
| Deep | Cream | 7.7:1 | Pass AA |
| Cream | Deep | 7.7:1 | Pass AA |
| Line | Deep | 5.7:1 | Pass AA |
| Ink | Bright | 4.6:1 | Pass AA |
| Berry | Cream | 6.6:1 | Pass AA (internal) |
| Cream | Berry | 6.6:1 | Pass AA (internal) |

### Avoid

- Bright blue on cream (3.5:1 — large text only)
- Cream on bright blue (3.5:1 — large text only)
- Line on cream (1.4:1)
- Ink on berry (2.2:1)

---

## Layout and Composition

| Token | Value | Usage |
|---|---|---|
| `--container-readable` | 1180px | Editorial section spine; centers with auto margins |
| `--radius` | 20px | Default for all surfaces |
| `--radius-pill` | 9999px | Chip filters, tags |
| `--shadow-panel` | `-8px 12px 32px rgba(36, 32, 27, 0.07)` | Panel shadow |

### Principles

- Generous white space; never sparse
- Rhythm and scale guide readers (not boxes/borders)
- Hairlines for structural borders where needed
- Alternate cream, cream-warm, and deep-blue bands for visual breaks
- Density varies by purpose

---

## Imagery Guidelines

### Photography Direction

Natural, authentic, real people in real environments, natural light, no studio polish. "Debt diary" standard — moments credible to the viewer.

### When to Use Illustration

- Abstract flows
- Step-by-step guidance
- Data visualization
- Contexts where photography cannot authentically represent the brand

### What to Avoid

- 3D rendered characters/scenes
- Stock-library emotional cliches (heads in hands, upward arrows, paper/calculator setups)
- Decorative illustration softening financial content
- Corporate-stock or documentary-charity photography

---

## Iconography

- Single stroke weight throughout (consistency)
- Line-based outlines only (no fills — filled icons read as buttons)
- Wayfinding function exclusively (navigation, status, action cues — never decoration)

> "If a page needs an icon to make a point, the point is probably not landing."

# PayPlan Website Rebuild

New payplan.com website built on Next.js 15 + Sanity CMS + Tailwind CSS v4, replacing the current WordPress installation.

## Quick Start

```bash
npm install
npm run dev        # starts Next.js + Sanity Studio
npm run build      # full production build
```

## Repository Structure

```
payplan-website/
├── apps/
│   ├── web/                   # Next.js 15 (App Router)
│   └── studio/                # Sanity Studio (CMS admin)
├── packages/
│   └── design-tokens/         # @payplan/design-tokens (Tailwind preset + CSS vars + TS)
├── source-materials/          # Brand framework, wireframes, current site content
├── PLAN.md                    # Technical plan
└── KANBAN.md                  # Project kanban board
```

## Source Materials

All design inputs and current site content are documented in `source-materials/`:

- `source-materials/brand-framework/` — Purpose Media brand framework (strategy, voice, design, personas)
- `source-materials/wireframes/` — Website pre-production wireframes (9 page templates)
- `source-materials/current-site/` — Current payplan.com content inventory and structure

## Architecture Brief

See `jobs-payplan/architecture-v16/company-website-rebuild/brief.md` for the full requirements.

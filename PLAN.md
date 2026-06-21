# PayPlan Website Rebuild — Technical Plan

**Prepared by:** Tim Broome (Enterprise Architect)
**Date:** 21 June 2026
**Status:** Draft — for review before execution

---

## 1. Technology Stack

### 1.1 Framework: Next.js 15 (App Router)

Next.js is the clear choice given the constraints:

- **Coolify native support** — Coolify detects and deploys Next.js automatically via Nixpacks. No Dockerfile needed for initial hosting at `payplan.tjb.app`.
- **React + TypeScript + Tailwind** — matches the brief's required stack exactly.
- **SSG + ISR** — static generation for content pages (SEO performance), incremental static regeneration for CMS-driven updates without full rebuilds. Marketing team publishes in CMS → page regenerates within seconds.
- **Micro-frontend hosting** — Next.js supports dynamic imports, Module Federation (via `@module-federation/nextjs-mf`), and iframe embedding. Squad-owned micro-frontends (SAM 2.0, BudgetSmart) can be loaded at runtime.
- **Image optimisation** — `next/image` with automatic WebP/AVIF, lazy loading, and responsive srcsets. Critical for Core Web Vitals (SEO).

### 1.2 CMS: Sanity

**Recommendation: Sanity over HubSpot CMS, Contentful, and Storyblok.**

| Criterion | Sanity | HubSpot CMS | Contentful | Storyblok |
|---|---|---|---|---|
| No-code editing | Sanity Studio (customisable, visual) | HubSpot drag-and-drop | Contentful web app | Visual editor |
| Template library | Custom schemas = template library. Marketing creates pages from predefined content types | HubSpot templates (limited to HubSpot ecosystem) | Content models (less visual) | Visual components |
| AI-friendly | GROQ query language, structured JSON schemas, CLI tooling, full API | Proprietary HubL templating | GraphQL/REST, structured | REST API |
| Developer experience | TypeScript SDK, hot-reload Studio, schema-as-code | PHP-like HubL, limited | Good SDK, but content modelling is less flexible | Good but smaller ecosystem |
| Micro-frontend support | Headless — renders nothing, serves structured data. Frontend controls rendering completely | Tightly coupled — CMS controls rendering | Headless | Headless with visual editor |
| Styling extraction | N/A — styling is in the Next.js frontend, not the CMS | Tied to HubSpot theme CSS | N/A | N/A |
| Pricing | Free tier (3 users, 100k API CDN requests/mo). Pro from $15/user/mo | Free tools tier exists, CMS from $800/mo | Free tier (5 users). Team from $300/mo | Free tier (1 user). Business from €99/mo |
| Trial period | Generous free tier, no time limit | 14-day trial for paid features | Free tier permanent | Free tier permanent |

**Why Sanity wins:**

1. **Schema-as-code.** Content types are defined in TypeScript files — a `solutionPage` schema becomes a template the marketing team selects when creating a new page. New templates are created by developers writing a schema + a React component, not by customising the hosting app. This exactly matches the brief's requirement.

2. **AI updateability.** Sanity schemas are TypeScript. Creating or updating a template means writing/editing a `.ts` schema file and a `.tsx` component. GROQ queries are simple string expressions. This is far more AI-friendly than HubSpot's HubL or a visual drag-and-drop interface.

3. **Decoupled from rendering.** Sanity is purely a content API. The Next.js frontend controls all rendering, routing, and styling. This means micro-frontends from squads are embedded in Next.js components, not fighting with CMS rendering.

4. **Real-time preview.** Sanity Studio supports live preview — marketing team sees changes rendered in the actual site layout before publishing.

5. **HubSpot CRM integration is unaffected.** HubSpot CRM remains for sales/marketing automation. The website CMS being Sanity doesn't conflict — forms on the website can submit to HubSpot via their Forms API or tracking code.

**Why not HubSpot CMS:**
- HubSpot CMS uses HubL (a proprietary template language) — not TypeScript/React. The marketing team gains drag-and-drop, but developers lose the ability to use standard tooling.
- Micro-frontends would need to be embedded as HubSpot modules (custom HTML/JS), not as React components.
- Styling is tied to HubSpot's theme system, not extractable as a node module.
- CMS pricing starts at $800/mo vs Sanity's $15/user/mo.
- The consolidation benefit (CRM + CMS in one place) is real but doesn't outweigh the developer experience and architectural fit penalties.

### 1.3 Styling: Tailwind CSS v4 + Design Token Package

The brand framework specifies exact design tokens (colours, typography, spacing, radii). These will be extracted into a shared npm package:

```
@payplan/design-tokens
├── tailwind-preset.ts    # Tailwind theme extension with all brand tokens
├── tokens.css            # CSS custom properties (--color-deep, --color-accent, etc.)
└── index.ts              # TypeScript constants for programmatic use
```

This package is consumed by:
- The main website (`payplan-website`)
- Squad micro-frontends (SAM 2.0, BudgetSmart, etc.)
- The VitePress marketing guide

When Purpose Media updates the brand framework, the design tokens package is updated once and all consumers pick up the change.

### 1.4 Micro-Frontend Strategy: Module Federation

Squad-owned dynamic sections (SAM 2.0 entrypoint, BudgetSmart, self-serve assessment) are loaded as Module Federation remotes:

```
payplan-website (host)
├── loads @payplan/sam-entrypoint from SAM CDN URL
├── loads @payplan/budgetsmart from BudgetSmart CDN URL
└── loads @payplan/self-serve-assessment from Core CDN URL
```

Each remote is a standalone React app built and deployed independently by its owning squad. The host website loads them at runtime via `next/dynamic` + Module Federation. If a remote is unavailable, the host renders a graceful fallback (e.g. "Get help now" CTA linking to the phone number).

**Why Module Federation over iframes:**
- Shared styling via `@payplan/design-tokens` — micro-frontends look native
- No iframe sizing/scrolling issues
- Shared routing context (deep links work)
- Performance — no separate document loads

**Why not Web Components:**
- Additional abstraction layer with no clear benefit when everything is React
- Shadow DOM complicates shared styling

---

## 2. SEO Migration Strategy

The current site has high-performing SEO. This is the highest-risk aspect of the rebuild.

### 2.1 Pre-Migration Audit

Before any build work:

1. **Export current rankings** — use Google Search Console API to export all indexed URLs with impressions, clicks, and average position for the last 6 months
2. **Identify high-value pages** — pages with >100 monthly impressions are migration-critical
3. **Map current URLs to new URLs** — create a complete redirect map (current → new)
4. **Export structured data** — document all existing Schema.org markup (FAQ, Organisation, BreadcrumbList, etc.)
5. **Benchmark Core Web Vitals** — capture current LCP, FID, CLS scores as the baseline to beat

### 2.2 URL Strategy

The wireframes note "no URL changes have been agreed yet." The safest SEO approach is to **preserve existing URL paths wherever possible**:

| Current | New | Action |
|---|---|---|
| `/debt-solutions/debt-management-plans/` | `/debt-solutions/debt-management-plans/` | Preserve |
| `/debt-solutions/iva/` | `/debt-solutions/iva/` | Preserve |
| `/debt-info/breathing-space/` | `/debt-info/breathing-space/` | Preserve |
| `/about-us/` | `/about/` (wireframe) | 301 redirect |
| N/A | `/where-do-i-start` | New page |
| N/A | `/check-your-options` | New page |
| N/A | `/life-after-debt` | New page |
| N/A | `/your-plan` | New page (authenticated) |

Where the wireframes propose a new URL that differs from the current URL, implement a permanent 301 redirect from old to new in Next.js middleware.

### 2.3 Technical SEO Requirements

- **Server-side rendering** for all content pages (SSG/ISR, not client-side only)
- **Canonical URLs** on every page
- **XML sitemap** auto-generated from CMS content
- **robots.txt** with appropriate rules (noindex on paid-media landing pages per wireframe spec)
- **Structured data** (JSON-LD): Organisation, FAQPage, BreadcrumbList, Article
- **Open Graph and Twitter Card meta** on all pages
- **hreflang tags** if Scotland pages have distinct content
- **Performance budget**: LCP < 2.5s, CLS < 0.1, INP < 200ms

### 2.4 Migration Execution

1. Build new site at `payplan.tjb.app` — fully crawlable by internal team but not indexed (robots noindex)
2. QA all pages against the redirect map
3. When ready to go live, update DNS for `payplan.com` to point to the new site
4. Enable indexing
5. Submit updated sitemap to Google Search Console
6. Monitor Search Console daily for 4 weeks — watch for coverage drops, crawl errors, ranking changes

---

## 3. Architecture

### 3.1 Repository Structure

```
payplan-website/
├── source-materials/          # Brand framework, wireframes, current site (already committed)
├── apps/
│   ├── web/                   # Next.js 15 website
│   │   ├── app/               # App Router pages
│   │   ├── components/        # React components (mapped to wireframe sections)
│   │   ├── sanity/            # Sanity client, queries, type generation
│   │   └── next.config.ts
│   └── studio/                # Sanity Studio (CMS admin interface)
│       ├── schemas/           # Content type definitions (= template library)
│       └── sanity.config.ts
├── packages/
│   ├── design-tokens/         # @payplan/design-tokens (Tailwind preset + CSS vars)
│   └── ui/                    # Shared UI components (if needed beyond web app)
├── docs/                      # VitePress marketing guide
├── PLAN.md                    # This document
├── KANBAN.md                  # Mermaid kanban board
└── turbo.json                 # Turborepo config
```

**Monorepo with Turborepo.** The website, Sanity Studio, design tokens, and marketing guide are all in one repo with shared tooling. Turborepo handles build orchestration and caching.

### 3.2 Content Model (Sanity Schemas)

Each wireframe page template maps to a Sanity schema:

| Wireframe Template | Sanity Schema | Marketing Can Create? |
|---|---|---|
| Homepage | `homepage` (singleton) | Edit content, not structure |
| Where Do I Start? | `entryPage` | Edit content |
| Solution Page | `solutionPage` | Yes — create new solution pages from template |
| Self-Serve Assessment | `assessment` (singleton) | Edit questions and outcomes |
| Life After Debt | `wellbeingPage` (singleton) | Edit content |
| Your Plan / Client Area | N/A — dynamic, data-driven | No — code-managed |
| About PayPlan | `aboutPage` (singleton) | Edit content |
| Partner Landing Page | `partnerLanding` | Yes — create per-partner pages from template |
| Paid-Media Landing Page | `paidMediaLanding` | Yes — create per-campaign pages from template |

Additionally:
- `siteSettings` — global nav, footer, trust badges, phone numbers
- `testimonial` — reusable across pages
- `faqItem` — reusable FAQ entries
- `solution` — reference data (DMP, IVA, Bankruptcy, etc.) used by solution pages and comparison tables
- `blogPost` — news/articles (migrated from WordPress posts)

### 3.3 Component Architecture

Components map directly to wireframe sections:

```
components/
├── layout/
│   ├── Header.tsx             # Logo + nav + "Get help now" button
│   ├── Footer.tsx             # Three-column footer + MoneyHelper
│   └── TrustBar.tsx           # FCA / Trustpilot / years / people helped
├── hero/
│   ├── HeroHome.tsx           # Homepage hero with dual CTAs
│   ├── HeroPermission.tsx     # "Going through a difficult time?" (Where Do I Start)
│   ├── HeroSolution.tsx       # Solution page hero with breadcrumbs
│   └── HeroPartner.tsx        # Co-branded partner hero
├── content/
│   ├── ThreeStepProcess.tsx   # Numbered step cards
│   ├── SegmentationGrid.tsx   # "Where are you right now?" 4-route selector
│   ├── SolutionGrid.tsx       # All solutions grid (England/Wales + Scotland)
│   ├── ComparisonTable.tsx    # Solution comparison table
│   ├── AtAGlance.tsx          # "Solution at a glance" table
│   ├── EligibilityCheck.tsx   # "May suit you if" / "Things worth knowing"
│   ├── TestimonialBlock.tsx   # Customer quotes
│   ├── FaqAccordion.tsx       # Expandable Q&A
│   └── ChannelModal.tsx       # "How would you like to get help?" modal
├── forms/
│   ├── DebtSlider.tsx         # Debt amount slider (partner/paid-media pages)
│   ├── AssessmentStep.tsx     # Multi-step assessment (one question per screen)
│   └── ContactPreference.tsx  # Contact method selector
└── micro-frontends/
    ├── RemoteLoader.tsx       # Module Federation loader with fallback
    ├── SamEntrypoint.tsx      # Wrapper for SAM 2.0 micro-frontend
    └── BudgetSmartWidget.tsx  # Wrapper for BudgetSmart micro-frontend
```

### 3.4 Intercom Integration

The current site loads Intercom conditionally. The new site will:

1. Load Intercom via `next/script` with `strategy="lazyOnload"`
2. Pass referral ID to Intercom via visitor attributes (from dataLayer — per the workshop decision)
3. Expose `Intercom('show')` for "Get help now" / Live Chat buttons
4. WhatsApp link continues as a direct link (`https://bit.ly/...` or native WhatsApp URL)

The form removal / Sam integration work (from the CRO initiative) is a separate workstream. This website rebuild provides the hosting platform; the Intercom conversation flow is owned by Alex O'Leary and the Agentic Routing squad.

### 3.5 Referral ID System

The current referral ID tracking (session-based, per-page Vulcan introducer IDs) must survive the migration:

1. **Referral IDs stored in Sanity** — each partner landing page has an `introducerId` field in its schema
2. **Session tracking** — Next.js middleware reads the page's `introducerId` and sets it in a cookie (replacing PHP `$_SESSION`)
3. **dataLayer push** — page component pushes `{ referral_id, vulcan_ref_id }` to GTM dataLayer (same as current)
4. **Intercom handoff** — referral ID passed as Intercom visitor attribute

This preserves Roxy's MI reporting pipeline without any changes on the downstream side.

---

## 4. Build Phases

### Phase 1: Foundation (Week 1-2)

- [ ] Next.js 15 project setup with App Router, TypeScript, Tailwind
- [ ] Turborepo monorepo structure
- [ ] `@payplan/design-tokens` package (all brand framework tokens)
- [ ] Sanity project + Studio setup
- [ ] Core Sanity schemas: `siteSettings`, `solution`, `testimonial`, `faqItem`
- [ ] Layout components: Header, Footer, TrustBar
- [ ] Deploy to Coolify at `payplan.tjb.app`
- [ ] CI: build on push, deploy on main

### Phase 2: Page Templates (Week 3-5)

- [ ] Homepage template + Sanity schema
- [ ] Solution page template + schema (DMP as first instance)
- [ ] Where Do I Start template + schema
- [ ] About page template + schema
- [ ] Partner landing page template + schema
- [ ] Paid-media landing page template + schema
- [ ] Self-serve assessment template + schema
- [ ] Life After Debt template + schema
- [ ] All shared components (hero variants, content blocks, forms, FAQ accordion)

### Phase 3: Content Migration (Week 5-7)

- [ ] SEO audit: export rankings, benchmark Core Web Vitals
- [ ] URL redirect map (330 current URLs → new URLs)
- [ ] Migrate solution pages content to Sanity (DMP, IVA, Bankruptcy, DRO, Trust Deed, etc.)
- [ ] Migrate debt-info articles to Sanity
- [ ] Migrate about/contact pages
- [ ] Migrate blog posts
- [ ] Scotland-specific content
- [ ] Structured data (JSON-LD) on all pages
- [ ] XML sitemap generation
- [ ] robots.txt

### Phase 4: Integration (Week 7-8)

- [ ] Intercom integration (load, referral ID handoff, Live Chat trigger)
- [ ] GTM / GA integration (dataLayer, event tracking)
- [ ] Trustpilot widget integration
- [ ] Module Federation setup for micro-frontend loading
- [ ] Referral ID system (middleware, cookies, dataLayer push)
- [ ] Partner page referral ID assignment in Sanity

### Phase 5: Marketing Guide (Week 8-9)

- [ ] VitePress site in `docs/`
- [ ] Content update guide: creating pages, editing content, publishing
- [ ] Template library documentation (what each template is for, when to use it)
- [ ] Guide to the Sanity Studio interface
- [ ] How the website hosting works (for technical context, not for marketing to maintain)

### Phase 6: QA and Launch Prep (Week 9-10)

- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Mobile responsive testing
- [ ] Accessibility audit (WCAG AA)
- [ ] Performance audit (Core Web Vitals targets)
- [ ] SEO redirect map verification
- [ ] Staging review with marketing team
- [ ] DNS cutover plan
- [ ] Launch

---

## 5. Risks

| # | Risk | Mitigation |
|---|---|---|
| 1 | **SEO ranking loss** — any site migration risks ranking drops | Preserve URLs where possible. Complete redirect map. Monitor Search Console daily post-launch. Benchmark before/after. |
| 2 | **Referral ID tracking breaks** — MI reporting depends on correct introducer IDs | Replicate exact session/cookie/dataLayer behaviour. Test with Roxy before launch. |
| 3 | **Marketing team adoption** — Sanity Studio is new tooling | VitePress guide. Hands-on training session. Start with simple content edits before template creation. |
| 4 | **Micro-frontend availability** — squad apps may not be ready | Graceful fallback components. Micro-frontends are additive — site works without them. |
| 5 | **Content volume** — 330 pages to migrate | Prioritise by SEO value. Automate where possible (script to extract WordPress content via REST API). Low-traffic legacy pages can redirect to category pages. |
| 6 | **Purpose Media assets not yet delivered** — logo SVGs, photography brief, colour swatches all "coming soon" | Inter font is available from Google Fonts. Colour hex values are in the framework. Logo can be extracted from current site. Photography can use placeholders initially. |

---

## 6. Open Questions

1. **Your Plan / Client Area** — is this part of this build, or does it remain on the existing platform? The wireframes show it, but it requires authenticated access to Vulcan case data. This may be a separate micro-frontend from the Core squad.

2. **Blog/News** — the current site has a blog (`post-sitemap.xml`). Should this migrate into the new CMS, or is it being retired/moved elsewhere?

3. **Scotland-specific content** — the current site has child themes for Scotland. Should Scotland content be a separate section in the new site, or integrated with jurisdiction flags per page?

4. **Partner page creation workflow** — who creates new partner landing pages? If marketing, they'll need a simple Sanity workflow. If the partnerships team, they may need more guidance.

5. **Form submissions** — the wireframe shows forms on partner and paid-media landing pages (debt slider + contact preference). Where do these submit to? HubSpot Forms API? Direct to Intercom? The Vulcan pathway via the existing WordPress plugin?

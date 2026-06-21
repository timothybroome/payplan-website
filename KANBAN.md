# PayPlan Website Rebuild — Kanban

```mermaid
---
title: payplan-website
---
kanban
  Backlog
    Phase 3 Content["Phase 3: Content Migration"]
    Phase 4 Integration["Phase 4: Integration"]
    Phase 5 Guide["Phase 5: Marketing Guide"]
    Phase 6 Launch["Phase 6: QA and Launch"]
  Todo
  In Progress
    Phase 3 Content["Phase 3: Content Migration"]
  Review
  Done
    Source materials["Brand framework, wireframes, current site content extracted and documented"]
    Technical plan["PLAN.md: stack, CMS, architecture, phases, risks"]
    Monorepo setup["Turborepo monorepo structure"]
    Next.js scaffold["Next.js 15 App Router + TypeScript + Tailwind"]
    Design tokens package["@payplan/design-tokens: Tailwind preset + CSS vars + TS constants"]
    Sanity project setup["Sanity project + Studio initialisation"]
    Core schemas["Sanity schemas: siteSettings, solution, testimonial, faqItem"]
    Layout components["Header, Footer, TrustBar components"]
    Coolify deploy["Deploy to Coolify at payplan.tjb.app"]
    CI pipeline["Build on push, deploy main to Coolify"]
    Homepage["Homepage: hero + segmentation + three-step + solutions + testimonials"]
    Solution page["Solution page: breadcrumb + at-a-glance + eligibility + comparison + FAQ"]
    Where Do I Start["Where Do I Start: permission hero + reassurance + tools"]
    About page["About: trust badges + how-can-it-be-free explainer"]
    Partner landing["Partner landing: co-branded + form + FAQs (no nav)"]
    Paid-media landing["Paid-media landing: form-first + noindex (no nav)"]
    Self-serve assessment["Check Your Options: multi-step interactive assessment"]
    Life After Debt["Life After Debt: wellbeing tools + newsletter"]
    Your Plan placeholder["Your Plan: placeholder for Core squad micro-frontend"]
    Sanity Studio route["Sanity Studio embedded at /studio"]
    Content seed["Sanity seeded: 4 solutions, 3 testimonials, 3 FAQs, site settings"]
    CMS wiring["All pages fetch content from Sanity CMS"]
    Visual polish hp["Homepage visual polish: gradient hero, icons, mobile menu, card interactions"]
    Visual polish sol["Solution page visual polish: branded components, comparison table, FAQ accordion"]
```

## Task Details

### Phase 1: Foundation — COMPLETE

| Task | Status |
|---|---|
| Monorepo setup (Turborepo, apps/web, apps/studio, packages/design-tokens) | Done |
| Next.js 15 scaffold (App Router, TypeScript strict, Tailwind v4) | Done |
| Design tokens package (Tailwind preset + CSS vars + TS constants) | Done |
| Sanity project setup (project 0w7asqgt, Studio config) | Done |
| Core schemas (siteSettings, solution, testimonial, faqItem) | Done |
| Layout components (Header, Footer, TrustBar) | Done |
| Coolify deploy (payplan.tjb.app, Dockerfile, standalone output) | Done |
| CI pipeline (auto-deploy on push to main) | Done |

### Phase 2: Page Templates — COMPLETE

| Task | Status |
|---|---|
| Homepage (HeroHome, TrustBar, SegmentationGrid, ThreeStepProcess, TestimonialBlock, SolutionGrid) | Done |
| Solution page (HeroSolution, AtAGlance, EligibilityCheck, ComparisonTable, FaqAccordion) | Done |
| Where Do I Start (HeroPermission, reassurance scenarios, tools) | Done |
| About page (trust badges, "how can it be free", protections) | Done |
| Partner landing page (co-branded header, form, partner FAQs, no nav) | Done |
| Paid-media landing page (form-first, noindex, no nav) | Done |
| Self-serve assessment (Check Your Options, 4-step interactive) | Done |
| Life After Debt (wellbeing tools, confidence areas, newsletter) | Done |
| Your Plan placeholder (for Core squad micro-frontend) | Done |
| Sanity Studio embedded at /studio | Done |
| Sanity content seeded (4 solutions, 3 testimonials, 3 FAQs, site settings) | Done |
| All pages wired to Sanity CMS (GROQ queries, Portable Text rendering) | Done |

### Phase 2.5: Visual Polish — COMPLETE

| Task | Status |
|---|---|
| Homepage to production quality (typography, spacing, imagery, brand feel) | Done |
| DMP solution page to production quality | Done |
| All shared components polished (Header, Footer, TrustBar, cards, tables, accordion) | Done |

### Phase 3: Content Migration — IN PROGRESS

| Task | Status |
|---|---|
| URL redirect map (130+ rules, DMP/IVA/Bankruptcy/DRO sub-pages consolidated) | Done |
| Redirect middleware (next.config.ts redirects) | Done |
| Article schema + routes (/debt-info, /debt-info/[slug]) | Done |
| Blog post schema + routes (/news, /news/[slug]) | Done |
| GROQ queries (articles, blog posts, slugs) | Done |
| Structured data — Organization JSON-LD on all pages | Done |
| Structured data — BreadcrumbSchema + FaqSchema components | Done |
| Sitemap (auto-generated from Sanity content) | Done |
| robots.txt (blocks /studio, /your-plan, /api/) | Done |
| WordPress migration script (HTML → Portable Text, batched upsert) | Done |
| Debt info articles migrated (131 articles from WordPress) | Done |
| Solution pages migrated (10 additional solutions from WordPress) | Done |
| Blog posts migrated (717 posts from WordPress) | Done |
| SEO audit (export rankings, Core Web Vitals baseline) | Todo |
| About/contact pages (migrate company content) | Todo |

### Phase 4: Integration

| Task | Status |
|---|---|
| Intercom (load, referral ID handoff, Live Chat trigger) | Todo |
| GTM/GA (dataLayer, event tracking continuity) | Todo |
| Trustpilot widget integration | Todo |
| Module Federation (setup for squad micro-frontends) | Todo |
| Referral ID system (middleware, cookies, dataLayer push) | Todo |

### Phase 5: Marketing Guide

| Task | Status |
|---|---|
| VitePress setup (docs/ site with brand framework nav) | Todo |
| Content update guide (creating pages, editing, publishing) | Todo |
| Template documentation (what each template does) | Todo |
| Sanity Studio guide (UI walkthrough for marketing team) | Todo |

### Phase 6: QA and Launch

| Task | Status |
|---|---|
| Cross-browser testing | Todo |
| Mobile responsive (all breakpoints) | Todo |
| Accessibility audit (WCAG AA) | Todo |
| Performance audit (Core Web Vitals targets) | Todo |
| Redirect verification (all 330 URLs) | Todo |
| Staging review (marketing team sign-off) | Todo |
| DNS cutover | Todo |

# PayPlan Website Rebuild — Kanban

```mermaid
---
title: payplan-website
---
kanban
  Backlog
    Phase 6 Launch["Phase 6: QA and Launch"]
  Todo
    Phase 3 Remaining["Phase 3: SEO audit + about/contact migration"]
    Incomplete pages["Paid-media Sanity schema, Life After Debt tools, Check Your Options submission"]
    Integration credentials["GTM, Intercom, Trustpilot IDs needed to activate"]
  In Progress
  Review
  Done
    Source materials["Brand framework, wireframes, current site content extracted and documented"]
    Technical plan["PLAN.md: stack, CMS, architecture, phases, risks"]
    Monorepo setup["Turborepo monorepo structure"]
    Next.js scaffold["Next.js 15 App Router + TypeScript + Tailwind"]
    Design tokens package["@payplan/design-tokens: Tailwind preset + CSS vars + TS constants"]
    Sanity project setup["Sanity project + Studio initialisation"]
    Core schemas["Sanity schemas: siteSettings, solution, testimonial, faqItem, partnerPage"]
    Layout components["Header, Footer, TrustBar components"]
    Coolify deploy["Deploy to Coolify at payplan.tjb.app"]
    CI pipeline["Build on push, deploy main to Coolify"]
    Homepage["Homepage: hero + segmentation + three-step + solutions + testimonials + Trustpilot"]
    Solution page["Solution page: breadcrumb + at-a-glance + eligibility + comparison + FAQ"]
    Where Do I Start["Where Do I Start: permission hero + reassurance + live chat CTA"]
    About page["About: trust badges + how-can-it-be-free explainer"]
    Partner landing["Partner landing: Sanity-driven, NatWest live, co-branded + form + referral tracking"]
    Your Plan placeholder["Your Plan: MicroFrontend component, awaiting Core squad"]
    Sanity Studio route["Sanity Studio embedded at /studio"]
    Content seed["Sanity seeded: solutions, testimonials, FAQs, site settings, NatWest partner"]
    CMS wiring["All pages fetch content from Sanity CMS"]
    Visual polish hp["Homepage visual polish: gradient hero, icons, mobile menu, card interactions"]
    Visual polish sol["Solution page visual polish: branded components, comparison table, FAQ accordion"]
    Phase 4 infra["Phase 4: integration components built (GTM, Intercom, Trustpilot, referral, MFE)"]
    Phase 5 Guide["Phase 5: Marketing docs site (payplan-website-docs)"]
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

### Phase 2: Page Templates

| Task | Status |
|---|---|
| Homepage (HeroHome, TrustBar, SegmentationGrid, ThreeStepProcess, TestimonialBlock, SolutionGrid) | Done |
| Solution page (HeroSolution, AtAGlance, EligibilityCheck, ComparisonTable, FaqAccordion) | Done |
| Where Do I Start (HeroPermission, reassurance scenarios, live chat CTA) | Done |
| About page (trust badges, "how can it be free", protections) | Done |
| Partner landing page (Sanity schema, NatWest live, co-branded header, form, referral tracking) | Done |
| Paid-media landing page (hardcoded DRO example only — no Sanity schema, can't create new pages without code) | Incomplete |
| Self-serve assessment (Check Your Options — UI works, form submission goes nowhere) | Incomplete |
| Life After Debt (template exists, tool links are `#` placeholders, newsletter form is dummy) | Incomplete |
| Your Plan placeholder (MicroFrontend component wired, awaiting Core squad) | Done (blocked) |
| Sanity Studio embedded at /studio | Done |
| Sanity content seeded (4 solutions, 3 testimonials, 3 FAQs, site settings, NatWest partner) | Done |
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

| Task | Status | Notes |
|---|---|---|
| GTM/GA (GoogleTagManager component, dataLayer events, virtual page views) | Built — needs ID | Set `NEXT_PUBLIC_GTM_ID` to activate |
| Intercom (widget load, LiveChatButton, referral handoff to chat) | Built — needs ID | Set `NEXT_PUBLIC_INTERCOM_APP_ID` to activate |
| Trustpilot widget (TrustpilotWidget component on homepage) | Built — needs ID | Set `NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID` to activate |
| Module Federation (MicroFrontend component, Your Plan page wired) | Built — awaiting Core | Set `NEXT_PUBLIC_CORE_MFE_URL` when available |
| Referral ID system (middleware captures ref/utm_source, 30-day cookie, dataLayer push) | Done | Active now, no credentials needed |
| Partner page referral + Intercom handoff | Done | Works end-to-end when Intercom ID is set |
| .env.example (all integration env vars documented) | Done | |

### Phase 5: Marketing Guide — COMPLETE

| Task | Status |
|---|---|
| VitePress setup (standalone repo, GitHub Actions, PayPlan brand theme) | Done |
| Content update guide (Sanity Studio, block editor, articles, blog posts, solutions) | Done |
| Template documentation (all page templates with section breakdowns) | Done |
| Brand reference (colours, typography, voice, components) | Done |
| Git workflow guide (setup, making changes, environments) | Done |
| SEO strategy reference (redirects, sitemap, structured data, analytics) | Done |
| Integrations reference (GTM, Intercom, Trustpilot, referral tracking) | Done |

### Incomplete Pages — needs attention

| Page | What works | What doesn't |
|---|---|---|
| Paid-media landing (`/lp/[slug]`) | Single hardcoded DRO example renders | No Sanity schema — can't create new campaigns without code changes |
| Check Your Options (`/check-your-options`) | 4-step assessment UI, solution recommendations | Form submission does nothing — no backend, no Intercom trigger, no dataLayer event |
| Life After Debt (`/life-after-debt`) | Page template, confidence areas | Tool links go to `#`, newsletter signup is a non-functional form |

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

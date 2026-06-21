import type { Redirect } from 'next/dist/lib/load-custom-routes';

// Solution sub-pages consolidate into main solution pages.
// The new site uses a single rich page per solution instead of
// 15-30 sub-articles. All sub-page content is covered by the
// at-a-glance, eligibility, FAQ, and comparison sections.

const solutionConsolidations: Redirect[] = [
  // DMP sub-pages → /debt-solutions/debt-management-plans
  ...[
    'what-is-a-debt-management-plan',
    'is-a-dmp-right-for-me',
    'why-choose-payplan-for-your-dmp',
    'the-small-print-for-dmps',
    'can-a-dmp-protect-your-assets',
    'faqs',
    'dmp-faqs',
    'which-debts-can-be-included-in-a-dmp',
    'how-does-a-dmp-impact-your-credit-rating',
    'how-does-debt-management-work',
    'how-long-does-debt-management-plan-last',
    'is-a-debt-management-plan-legally-binding-2',
    'can-put-payday-loans-debt-management-plan',
    'dmp-case-study',
    'example-dmps',
    'not-included-debts',
    'budgeting-with-a-dmp',
    'can-i-cancel-my-dmp',
    'dmp-impact-on-your-life',
    'moving-an-existing-dmp-to-payplan',
    'managing-a-dmp',
    'the-dmp-process-explained',
    'long-dmp-stay-credit-file',
    'dmp-payment-worked',
    'dmp-company-closing-down',
    'example-plan',
    'how-your-dmp-payment-is-worked-out',
    'payplan-dmps-at-a-glance',
    'questions',
  ].map((slug) => ({
    source: `/debt-solutions/debt-management-plans/${slug}`,
    destination: '/debt-solutions/debt-management-plans',
    permanent: true,
  })),
  // Also handle the singular variant
  {
    source: '/debt-solutions/debt-management-plan/faqs',
    destination: '/debt-solutions/debt-management-plans',
    permanent: true,
  },

  // IVA sub-pages → /debt-solutions/iva
  ...[
    'what-is-an-iva',
    'how-an-iva-works',
    'do-i-qualify-for-an-iva',
    'the-iva-process',
    'how-long-does-an-iva-last',
    'pros-cons-iva',
    'myths-about-ivas',
    'iva-register',
    'iva-impact-on-your-life',
    'iva-or-dmp',
    'iva-or-bankruptcy',
    'iva-or-dro',
    'iva-costs-fees',
    'iva-completion-certificate-2',
    'glossary-iva-terms',
    'example-different-types-iva',
    'budgeting-for-your-iva',
    'checking-your-tax-code-in-an-iva',
    'case-studies',
    'what-happens-at-the-end-of-an-iva',
    'ivas-and-renting',
    'managing-an-iva',
    'examples-iva-affect-business',
    'ivas-and-ccjs',
    'paying-off-iva-early',
    'ivas-and-ppi',
    'ivas-and-divorce',
    'ivas-after-death',
    'redundancy-and-your-iva',
    'examples-iva-affect-home',
    'does-an-iva-affect-my-credit-rating',
    'examples-iva-help-family',
    'ivas-and-employment',
    'ivas-and-property',
    'joint-ivas',
    'ivas-and-your-possessions',
    'full-final-iva-settlement',
    'preparing-iva-annual-review',
    'failed-iva-what-happens-next',
    'ivas-moving-abroad',
    'assets-property-equity',
    'ivas-and-your-business',
    'example-iva-avoid-legal-action',
    'questions',
  ].map((slug) => ({
    source: `/debt-solutions/iva/${slug}`,
    destination: '/debt-solutions/iva',
    permanent: true,
  })),
  // IVA self-employed sub-section
  {
    source: '/debt-solutions/iva/self-employed-iva/:path*',
    destination: '/debt-solutions/iva',
    permanent: true,
  },

  // Bankruptcy sub-pages → /debt-solutions/bankruptcy
  ...[
    'bankruptcy-at-a-glance',
    'the-bankruptcy-process-explained',
    'bankruptcy-process-and-timeline-explained',
    'is-bankruptcy-right-for-me',
    'eligible-for-bankruptcy',
    'what-are-the-alternatives-to-bankruptcy',
    'bankruptcy-and-your-assets',
    'bankruptcy-impact-on-your-life',
    'how-does-bankruptcy-impact-your-credit-rating',
    'bankruptcy-faqs',
    'life-after-bankruptcy',
    'what-happens-when-you-declare',
    'who-will-know-about-your-bankruptcy',
    'fraud-explained',
    'the-small-print-for-bankruptcy',
    'cost-of-bankruptcy',
    'bankruptcy-restriction-order',
    'bankruptcy-cover-payday-loans',
    'bankruptcy-discharged',
    'can-file-bankruptcy-without-spouse',
    'can-you-file-bankruptcy-on-a-judgment',
    'how-many-years-after-bankruptcy-can-i-buy-a-house',
    'how-long-after-bankruptcy-can-i-lease-a-car',
  ].map((slug) => ({
    source: `/debt-solutions/bankruptcy/${slug}`,
    destination: '/debt-solutions/bankruptcy',
    permanent: true,
  })),

  // DRO sub-pages → /debt-solutions/debt-relief-order
  ...[
    'how-long-does-debt-relief-order-last',
    'how-long-does-dro-take-to-process',
    'happens-dro-ends',
  ].map((slug) => ({
    source: `/debt-solutions/debt-relief-order/${slug}`,
    destination: '/debt-solutions/debt-relief-order',
    permanent: true,
  })),
  // Handle the plural variant
  {
    source: '/debt-solutions/debt-relief-orders/how-does-a-debt-relief-order-affect-your-credit-rating',
    destination: '/debt-solutions/debt-relief-order',
    permanent: true,
  },
];

// Other solution types redirect to the solutions index until
// dedicated pages are built in Sanity
const otherSolutions: Redirect[] = [
  'administration-orders',
  'administration-orders/what-is-an-administration-order',
  'full-and-final-settlements',
  'full-and-final-settlements/how-to-write-debt-settlement-proposal-letter',
  'debt-consolidation-loans',
  'debt-consolidation-loans/how-does-debt-consolidation-work',
  'debt-write-off',
  'repayment-arrangement',
  'debt-settlement/how-does-debt-settlement-work',
  'debt-solution-comparison-table',
  'self-employed-debt-help',
].map((slug) => ({
  source: `/debt-solutions/${slug}`,
  destination: '/debt-solutions',
  permanent: true,
}));

// Scotland solution pages — redirect to /scotland/ routes when built,
// for now go to /debt-solutions
const scotlandRedirects: Redirect[] = [
  { source: '/debt-solutions/trust-deed', destination: '/debt-solutions', permanent: false },
  { source: '/debt-solutions/debt-arrangement-scheme', destination: '/debt-solutions', permanent: false },
  { source: '/debt-solutions/sequestration', destination: '/debt-solutions', permanent: false },
  { source: '/debt-solutions/minimal-asset-process', destination: '/debt-solutions', permanent: false },
  { source: '/scotland/:path*', destination: '/debt-solutions', permanent: false },
];

// Site restructure redirects
const structureRedirects: Redirect[] = [
  { source: '/about-us', destination: '/about', permanent: true },
  { source: '/about-us/:path*', destination: '/about', permanent: true },
  { source: '/contact-payplan', destination: '/about', permanent: true },
  { source: '/contact-payplan/:path*', destination: '/about', permanent: true },
  { source: '/debt-help', destination: '/where-do-i-start', permanent: true },
  { source: '/debt-help/:path*', destination: '/where-do-i-start', permanent: true },

  // Bankruptcy top-level duplicates
  { source: '/bankruptcy/:path*', destination: '/debt-solutions/bankruptcy', permanent: true },

  // Legacy paths
  { source: '/payplan-partners/:path*', destination: '/about', permanent: true },
  { source: '/latest-news/:path*', destination: '/debt-info', permanent: true },

  // Trailing slash normalization
  { source: '/debt-solutions/debt-management-plans/', destination: '/debt-solutions/debt-management-plans', permanent: true },
  { source: '/debt-solutions/iva/', destination: '/debt-solutions/iva', permanent: true },
  { source: '/debt-solutions/bankruptcy/', destination: '/debt-solutions/bankruptcy', permanent: true },
  { source: '/debt-solutions/debt-relief-order/', destination: '/debt-solutions/debt-relief-order', permanent: true },
];

// Debt info articles — preserve path structure, these will be served
// by a /debt-info/[slug] route once article content is in Sanity.
// No redirects needed for these — they keep their URLs.

export const redirects: Redirect[] = [
  ...solutionConsolidations,
  ...otherSolutions,
  ...scotlandRedirects,
  ...structureRedirects,
];

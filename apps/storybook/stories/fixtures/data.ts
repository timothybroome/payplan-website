export const testimonials = [
  {
    quote: 'I was losing sleep every night worrying about my debts. Within a week of calling PayPlan, I had a plan in place and my creditors stopped contacting me. I wish I had done it sooner.',
    name: 'Sarah',
    solutionName: 'Debt Management Plan',
    rating: 5,
  },
  {
    quote: 'The adviser was so kind and patient. No judgement at all. They explained everything clearly and I felt in control for the first time in years.',
    name: 'James',
    solutionName: 'IVA',
    rating: 5,
  },
  {
    quote: 'I was embarrassed to call but they made it so easy. One monthly payment I can actually afford. My stress levels have dropped massively.',
    name: 'Michelle',
    solutionName: 'Debt Management Plan',
    rating: 4,
  },
];

export const solutions = [
  {
    title: 'Debt Management Plan',
    shortName: 'DMP',
    slug: 'debt-management-plan',
    summary: 'One affordable monthly payment, distributed to your creditors by us. Informal and flexible.',
    region: 'england-wales',
  },
  {
    title: 'Individual Voluntary Arrangement',
    shortName: 'IVA',
    slug: 'individual-voluntary-arrangement',
    summary: 'A legally binding agreement to pay back what you can afford over 5–6 years. Remaining debt is written off.',
    region: 'england-wales',
  },
  {
    title: 'Debt Relief Order',
    shortName: 'DRO',
    slug: 'debt-relief-order',
    summary: 'For people with low income, few assets, and debts under £30,000. Debts written off after 12 months.',
    region: 'england-wales',
  },
  {
    title: 'Bankruptcy',
    shortName: 'Bankruptcy',
    slug: 'bankruptcy',
    summary: 'A formal process that writes off most debts. Usually discharged after 12 months.',
    region: 'england-wales',
  },
];

export const dmpAtAGlance = [
  { label: 'Type', value: 'Informal arrangement' },
  { label: 'Duration', value: 'Until debts repaid in full' },
  { label: 'Monthly payment', value: 'Based on what you can afford' },
  { label: 'Credit rating impact', value: 'Yes — during the plan' },
  { label: 'Creditor contact', value: 'Stops once plan is in place' },
  { label: 'Cost', value: 'Free through PayPlan' },
];

export const dmpEligibility = {
  maySuit: [
    'You have multiple unsecured debts you are struggling to repay',
    'You can afford to make some level of monthly payment',
    'You want a flexible arrangement that can be adjusted',
    'You want to repay what you owe in full, over a longer period',
  ],
  worthKnowing: [
    'A DMP is not legally binding — creditors can withdraw at any time',
    'Interest and charges may continue unless creditors agree to freeze them',
    'It will appear on your credit file and may affect future borrowing',
    'The plan lasts until your debts are repaid in full, which can take several years',
  ],
};

export const comparisonSolutions = [
  {
    name: 'DMP',
    legallyBinding: 'No',
    debtOutcome: 'Repay in full',
    monthlyPayments: 'Affordable amount',
    homeImpact: 'None',
    publicRegister: 'No',
  },
  {
    name: 'IVA',
    legallyBinding: 'Yes',
    debtOutcome: 'Partial write-off',
    monthlyPayments: 'Fixed for 5–6 years',
    homeImpact: 'Equity review in final year',
    publicRegister: 'Yes — Insolvency Register',
  },
  {
    name: 'DRO',
    legallyBinding: 'Yes',
    debtOutcome: 'Written off after 12 months',
    monthlyPayments: 'None',
    homeImpact: 'Must not own property',
    publicRegister: 'Yes — Insolvency Register',
  },
];

export const faqItems = [
  {
    question: 'Will my employer find out about my debt plan?',
    answer: 'In most cases, no. A DMP is informal and does not appear on any public register. An IVA is recorded on the Insolvency Register, but employers rarely check this unless your role involves financial regulation.',
  },
  {
    question: 'Can I still use my bank account?',
    answer: 'Yes. Your bank account is not affected by a debt management plan. You continue to use it as normal. In some cases with an IVA or bankruptcy, there may be restrictions, but your adviser will explain these clearly before you commit.',
  },
  {
    question: 'How is PayPlan free?',
    answer: 'PayPlan is funded by the creditors you owe money to. They pay us a small contribution from each payment we distribute. You never pay a fee — not for advice, not for setting up a plan, not ever.',
  },
];

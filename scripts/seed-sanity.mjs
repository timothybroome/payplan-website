import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';

const env = readFileSync('.env', 'utf8');
const token = env.match(/SANITY_API_TOKEN=(.*)/)[1].trim();

const client = createClient({
  projectId: '0w7asqgt',
  dataset: 'production',
  token,
  apiVersion: '2024-01-01',
  useCdn: false,
});

const documents = [
  {
    _id: 'siteSettings',
    _type: 'siteSettings',
    title: 'PayPlan',
    description:
      'Free, confidential debt advice from PayPlan. We help you find the right debt solution — DMP, IVA, DRO, bankruptcy and more.',
    phoneNumber: '0800 316 1833',
    trustpilotRating: '4.5/5',
    peopleHelped: '3m+',
    yearsOperating: '30+',
    footerLegalText:
      'PayPlan is a trading name of Totemic Limited. Authorised and regulated by the Financial Conduct Authority. FRN 681263.',
  },
  {
    _id: 'solution-dmp',
    _type: 'solution',
    title: 'Debt Management Plan',
    slug: { _type: 'slug', current: 'debt-management-plans' },
    shortName: 'DMP',
    summary:
      'Make one affordable monthly payment towards your unsecured debts. We negotiate with your creditors to reduce or freeze interest.',
    region: 'england-wales',
    atAGlance: [
      { _key: 'a1', label: 'Good if', value: 'You can afford reduced monthly payments' },
      { _key: 'a2', label: 'Cost', value: 'Free with PayPlan — no fees ever' },
      { _key: 'a3', label: 'How long', value: 'Typically 5–10 years' },
      { _key: 'a4', label: 'Worth knowing', value: 'Not legally binding' },
    ],
    eligibility: {
      maySuit: [
        'You have multiple unsecured debts',
        'You can afford reduced monthly payments',
        'You want to avoid formal insolvency',
        'You want to protect your home and assets',
      ],
      worthKnowing: [
        'Creditors may continue to add interest',
        'Your credit rating will be affected',
        'May take longer than original agreements',
        'Creditors are not legally obliged to accept',
      ],
    },
    seoTitle: 'Debt Management Plan (DMP) — Free with PayPlan',
    seoDescription:
      'A DMP lets you make one affordable monthly payment towards your debts. Free, no fees, regulated by the FCA.',
  },
  {
    _id: 'solution-iva',
    _type: 'solution',
    title: 'Individual Voluntary Arrangement',
    slug: { _type: 'slug', current: 'iva' },
    shortName: 'IVA',
    summary:
      'A legally binding agreement to pay back a proportion of your debts over five years. Remaining debt is written off.',
    region: 'england-wales',
    atAGlance: [
      { _key: 'a1', label: 'Good if', value: 'You owe £6,000+ with regular income' },
      { _key: 'a2', label: 'Cost', value: 'Fees taken from payments, not upfront' },
      { _key: 'a3', label: 'How long', value: 'Usually 5–6 years' },
      { _key: 'a4', label: 'Worth knowing', value: 'Legally binding — creditors must accept' },
    ],
    eligibility: {
      maySuit: [
        'You owe at least £6,000 to two or more creditors',
        'You have regular income',
        'You want a fixed end date',
        'You want remaining debt written off',
      ],
      worthKnowing: [
        'Credit rating affected for six years',
        'May need to release home equity',
        'Must declare windfalls during the IVA',
        'If IVA fails, bankruptcy may follow',
      ],
    },
    seoTitle: 'Individual Voluntary Arrangement (IVA) — PayPlan',
    seoDescription:
      'An IVA is a legally binding agreement to repay what you can afford. Remaining debt written off after completion.',
  },
  {
    _id: 'solution-dro',
    _type: 'solution',
    title: 'Debt Relief Order',
    slug: { _type: 'slug', current: 'debt-relief-order' },
    shortName: 'DRO',
    summary:
      'Write off debts under £30,000 if you have little spare income and don\'t own your home. Lasts 12 months.',
    region: 'england-wales',
    atAGlance: [
      { _key: 'a1', label: 'Good if', value: 'You owe under £30,000 with no spare income' },
      { _key: 'a2', label: 'Cost', value: '£90 application fee' },
      { _key: 'a3', label: 'How long', value: '12 months' },
      { _key: 'a4', label: 'Worth knowing', value: 'Debts written off after 12 months' },
    ],
    eligibility: {
      maySuit: [
        'You owe less than £30,000',
        'You have less than £75 spare income per month',
        'You don\'t own property',
        'You haven\'t had a DRO in six years',
      ],
      worthKnowing: [
        '£90 application fee',
        'Must apply through an approved intermediary',
        'Credit rating affected for six years',
        'Cannot be a company director',
      ],
    },
    seoTitle: 'Debt Relief Order (DRO) — PayPlan',
    seoDescription:
      'A DRO can write off debts under £30,000 in 12 months. Apply free through PayPlan.',
  },
  {
    _id: 'solution-bankruptcy',
    _type: 'solution',
    title: 'Bankruptcy',
    slug: { _type: 'slug', current: 'bankruptcy' },
    shortName: 'Bankruptcy',
    summary:
      'A formal process that writes off most debts but may involve selling assets. Usually discharged after 12 months.',
    region: 'england-wales',
    atAGlance: [
      { _key: 'a1', label: 'Good if', value: 'Large debts with no realistic way to repay' },
      { _key: 'a2', label: 'Cost', value: '£680 application fee' },
      { _key: 'a3', label: 'How long', value: 'Discharged after 12 months' },
      { _key: 'a4', label: 'Worth knowing', value: 'Assets including home may be sold' },
    ],
    eligibility: {
      maySuit: [
        'You have large debts you cannot repay',
        'Other solutions are not suitable',
        'You want a fresh start within 12 months',
        'You don\'t own significant assets',
      ],
      worthKnowing: [
        'Home and assets may be sold',
        'Credit rating affected for six years',
        'Some professions have restrictions',
        '£680 application fee',
      ],
    },
    seoTitle: 'Bankruptcy — Free Advice from PayPlan',
    seoDescription:
      'Bankruptcy writes off most debts within 12 months. Get free, impartial advice from PayPlan.',
  },
  {
    _id: 'testimonial-sarah',
    _type: 'testimonial',
    quote:
      'I was dreading making the call but they made everything so easy. Within weeks I had a plan and could sleep at night again.',
    name: 'Sarah',
    solution: { _type: 'reference', _ref: 'solution-dmp' },
    source: 'trustpilot',
    rating: 5,
  },
  {
    _id: 'testimonial-james',
    _type: 'testimonial',
    quote:
      "PayPlan helped me understand all my options without any pressure. I didn't even know a DRO existed before I spoke to them.",
    name: 'James',
    solution: { _type: 'reference', _ref: 'solution-dro' },
    source: 'trustpilot',
    rating: 5,
  },
  {
    _id: 'testimonial-michelle',
    _type: 'testimonial',
    quote:
      'After my IVA completed I felt like a weight had been lifted. The team were supportive through the whole five years.',
    name: 'Michelle',
    solution: { _type: 'reference', _ref: 'solution-iva' },
    source: 'trustpilot',
    rating: 5,
  },
  {
    _id: 'faq-what-is-dmp',
    _type: 'faqItem',
    question: 'What is a Debt Management Plan?',
    answer: [
      {
        _type: 'block',
        _key: 'b1',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's1',
            text: 'A DMP is an informal agreement between you and your creditors. You make one affordable monthly payment to PayPlan, and we distribute it to your creditors on your behalf.',
            marks: [],
          },
        ],
      },
    ],
    solutions: [{ _type: 'reference', _ref: 'solution-dmp', _key: 'r1' }],
  },
  {
    _id: 'faq-what-is-iva',
    _type: 'faqItem',
    question: 'What is an IVA?',
    answer: [
      {
        _type: 'block',
        _key: 'b1',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's1',
            text: 'An Individual Voluntary Arrangement is a formal, legally binding agreement between you and your creditors. You agree to pay back what you can afford over a set period, and the remaining debt is written off when you complete the arrangement.',
            marks: [],
          },
        ],
      },
    ],
    solutions: [{ _type: 'reference', _ref: 'solution-iva', _key: 'r1' }],
  },
  {
    _id: 'faq-is-it-free',
    _type: 'faqItem',
    question: 'Is PayPlan really free?',
    answer: [
      {
        _type: 'block',
        _key: 'b1',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's1',
            text: 'Yes. PayPlan is funded by the creditors who receive your payments, not by you. You will never pay a fee for our advice or for setting up a debt plan. 100% of your monthly payment goes towards your debt.',
            marks: [],
          },
        ],
      },
    ],
    solutions: [
      { _type: 'reference', _ref: 'solution-dmp', _key: 'r1' },
      { _type: 'reference', _ref: 'solution-iva', _key: 'r2' },
    ],
  },
];

async function seed() {
  const tx = client.transaction();
  for (const doc of documents) {
    tx.createOrReplace(doc);
  }
  const result = await tx.commit();
  console.log(`Seeded ${documents.length} documents. Transaction ID: ${result.transactionId}`);
}

seed().catch((err) => {
  console.error('Seed failed:', err.message);
  process.exit(1);
});

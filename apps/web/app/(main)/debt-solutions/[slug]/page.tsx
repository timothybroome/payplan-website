import { notFound } from 'next/navigation';
import { HeroSolution } from '@components/hero/HeroSolution';
import { TrustBar } from '@components/layout/TrustBar';
import { AtAGlance } from '@components/content/AtAGlance';
import { EligibilityCheck } from '@components/content/EligibilityCheck';
import { ThreeStepProcess } from '@components/content/ThreeStepProcess';
import { TestimonialBlock } from '@components/content/TestimonialBlock';
import { ComparisonTable } from '@components/content/ComparisonTable';
import { FaqAccordion } from '@components/content/FaqAccordion';

const solutions: Record<
  string,
  {
    title: string;
    shortName: string;
    description: string;
    atAGlance: { label: string; value: string }[];
    maySuit: string[];
    worthKnowing: string[];
    faqs: { question: string; answer: string }[];
  }
> = {
  'debt-management-plans': {
    title: 'Debt Management Plan',
    shortName: 'DMP',
    description:
      'Make one affordable monthly payment towards your unsecured debts. We negotiate with your creditors to reduce or freeze interest and charges.',
    atAGlance: [
      { label: 'Good if', value: 'You can afford reduced monthly payments' },
      { label: 'Cost', value: 'Free with PayPlan — no fees ever' },
      { label: 'How long', value: 'Typically 5–10 years depending on debt level' },
      { label: 'Worth knowing', value: 'Not legally binding — you or creditors can withdraw' },
    ],
    maySuit: [
      'You have multiple unsecured debts (credit cards, loans, overdrafts)',
      'You can afford to make a reduced monthly payment',
      'You want to avoid a formal insolvency solution',
      'You want to protect your home and assets',
    ],
    worthKnowing: [
      'Creditors may continue to add interest (though most freeze it)',
      'Your credit rating will be affected while the plan is active',
      'It may take longer to repay than original agreements',
      'Creditors are not legally obliged to accept reduced payments',
    ],
    faqs: [
      {
        question: 'What is a Debt Management Plan?',
        answer:
          'A DMP is an informal agreement between you and your creditors. You make one affordable monthly payment to PayPlan, and we distribute it to your creditors on your behalf.',
      },
      {
        question: 'Will a DMP affect my credit rating?',
        answer:
          "Yes. Your creditors will update your credit file to show you're in a debt management plan. This will make it harder to get credit while the plan is active, but your rating will improve once the plan is complete.",
      },
      {
        question: 'Can I include all my debts in a DMP?',
        answer:
          'DMPs cover unsecured debts like credit cards, personal loans, store cards and overdrafts. They cannot include mortgage arrears, council tax arrears, or child maintenance.',
      },
      {
        question: 'How long does a DMP last?',
        answer:
          'It depends on how much you owe and what you can afford to pay each month. Most DMPs last between 5 and 10 years, but you can pay more if your circumstances improve.',
      },
      {
        question: 'Can I cancel my DMP?',
        answer:
          "Yes. A DMP is not legally binding, so you can cancel at any time. However, you'll still owe the remaining debt and your creditors may resume collections.",
      },
      {
        question: 'Is a DMP free with PayPlan?',
        answer:
          "Yes. PayPlan never charges you for a DMP. We're funded by the creditors who receive your payments. 100% of your monthly payment goes towards your debt.",
      },
    ],
  },
  iva: {
    title: 'Individual Voluntary Arrangement',
    shortName: 'IVA',
    description:
      'A legally binding agreement to pay back a proportion of your debts over a fixed period, typically five years. Remaining debt is written off.',
    atAGlance: [
      { label: 'Good if', value: 'You owe £6,000+ and can make regular payments' },
      { label: 'Cost', value: 'Fees taken from payments, not upfront' },
      { label: 'How long', value: 'Usually 5–6 years' },
      { label: 'Worth knowing', value: 'Legally binding — creditors must accept terms' },
    ],
    maySuit: [
      'You owe at least £6,000 to two or more creditors',
      'You have a regular income and can make monthly payments',
      'You want a fixed end date for your debt',
      'You want remaining debt written off at completion',
    ],
    worthKnowing: [
      'Your credit rating will be affected for six years',
      'You may need to release equity from your home in the final year',
      'You must declare any windfalls (inheritance, bonuses) during the IVA',
      'If your IVA fails, bankruptcy may follow',
    ],
    faqs: [
      {
        question: 'What is an IVA?',
        answer:
          "An Individual Voluntary Arrangement is a formal, legally binding agreement between you and your creditors. You agree to pay back what you can afford over a set period, and the remaining debt is written off when you complete the arrangement.",
      },
      {
        question: 'How much debt do I need for an IVA?',
        answer:
          'Generally you need to owe at least £6,000 to two or more creditors to qualify for an IVA.',
      },
      {
        question: 'Will I lose my home?',
        answer:
          "You won't lose your home, but you may be asked to remortgage in the final year to release equity. If you can't remortgage, your IVA may be extended by 12 months instead.",
      },
      {
        question: 'What happens when my IVA finishes?',
        answer:
          "You'll receive a completion certificate and any remaining debt included in the IVA is legally written off. The IVA will stay on your credit file for six years from the start date.",
      },
      {
        question: 'Can I get an IVA if I\'m self-employed?',
        answer:
          "Yes. Self-employed IVAs work slightly differently — your income may fluctuate, so the arrangement takes that into account with regular reviews.",
      },
      {
        question: 'What debts can be included?',
        answer:
          'Most unsecured debts can be included: credit cards, personal loans, overdrafts, catalogue debts, HMRC debts. Secured debts like mortgages and car finance cannot be included.',
      },
    ],
  },
  'debt-relief-order': {
    title: 'Debt Relief Order',
    shortName: 'DRO',
    description:
      'A way to have your debts written off if you owe less than £30,000, have little spare income, and don\'t own your home.',
    atAGlance: [
      { label: 'Good if', value: 'You owe under £30,000 with no spare income' },
      { label: 'Cost', value: '£90 application fee' },
      { label: 'How long', value: '12 months' },
      { label: 'Worth knowing', value: 'Debts written off after 12 months' },
    ],
    maySuit: [
      'You owe less than £30,000',
      'You have less than £75 spare income per month',
      'You don\'t own property or significant assets',
      'You haven\'t had a DRO in the last six years',
    ],
    worthKnowing: [
      'There is a £90 fee to apply',
      'You must apply through an approved intermediary (like PayPlan)',
      'Your credit rating will be affected for six years',
      'You cannot be a company director during the DRO period',
    ],
    faqs: [
      {
        question: 'What is a Debt Relief Order?',
        answer:
          "A DRO is a formal insolvency solution for people who owe less than £30,000 and have little spare income or assets. Your debts are frozen for 12 months, and if your circumstances haven't improved, they're written off.",
      },
      {
        question: 'How do I apply for a DRO?',
        answer:
          'You must apply through an approved intermediary — PayPlan is one. We help you complete the application and submit it to the Insolvency Service.',
      },
      {
        question: 'What happens during the 12 months?',
        answer:
          "Your creditors can't chase you for payment or add interest. You don't make any payments towards the debts included in the DRO.",
      },
      {
        question: 'Will a DRO affect my credit rating?',
        answer:
          'Yes. A DRO stays on your credit file for six years and will make it difficult to get credit during that time.',
      },
    ],
  },
  bankruptcy: {
    title: 'Bankruptcy',
    shortName: 'Bankruptcy',
    description:
      'A formal process that writes off most of your debts, but may involve selling assets including your home. Usually discharged after 12 months.',
    atAGlance: [
      { label: 'Good if', value: 'You owe a large amount with no realistic way to repay' },
      { label: 'Cost', value: '£680 application fee' },
      { label: 'How long', value: 'Usually discharged after 12 months' },
      { label: 'Worth knowing', value: 'Assets (including home) may be sold' },
    ],
    maySuit: [
      'You have large debts you cannot realistically repay',
      'Other solutions like a DMP or IVA are not suitable',
      'You want a fresh start within 12 months',
      'You don\'t own significant assets',
    ],
    worthKnowing: [
      'Your home and other assets may be sold to pay creditors',
      'Your credit rating will be affected for six years',
      'Some professions restrict bankrupt individuals',
      'The application fee is £680',
    ],
    faqs: [
      {
        question: 'What happens when I go bankrupt?',
        answer:
          'An Official Receiver takes control of your financial affairs. They may sell your assets to pay creditors. After 12 months you\'re typically discharged and remaining debts are written off.',
      },
      {
        question: 'Will I lose my home?',
        answer:
          'Possibly. If you own your home, your share of the equity may be used to pay creditors. The Official Receiver has up to three years to deal with your property interest.',
      },
      {
        question: 'Can I still work?',
        answer:
          'Most people can continue working, but some professions (solicitors, accountants, financial advisers, company directors) have restrictions on bankrupt individuals.',
      },
      {
        question: 'How long does bankruptcy last?',
        answer:
          'You\'re usually discharged after 12 months. The bankruptcy will stay on your credit file for six years from the date of the order.',
      },
    ],
  },
};

const comparison = [
  { name: 'DMP', legallyBinding: 'No', debtOutcome: 'Repay in full', monthlyPayments: 'Reduced', homeImpact: 'None', publicRegister: 'No' },
  { name: 'IVA', legallyBinding: 'Yes', debtOutcome: 'Partial write-off', monthlyPayments: 'Fixed', homeImpact: 'Equity release possible', publicRegister: 'Yes' },
  { name: 'DRO', legallyBinding: 'Yes', debtOutcome: 'Full write-off', monthlyPayments: 'None', homeImpact: 'Must not own', publicRegister: 'Yes' },
  { name: 'Bankruptcy', legallyBinding: 'Yes', debtOutcome: 'Full write-off', monthlyPayments: 'Possible', homeImpact: 'May be sold', publicRegister: 'Yes' },
];

export function generateStaticParams() {
  return Object.keys(solutions).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutions[slug];
  if (!solution) return {};
  return {
    title: solution.title,
    description: solution.description,
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = solutions[slug];
  if (!solution) notFound();

  return (
    <>
      <HeroSolution
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Debt solutions', href: '/debt-solutions' },
        ]}
        title={solution.title}
        description={solution.description}
      />
      <TrustBar />
      <AtAGlance title={solution.shortName} items={solution.atAGlance} />
      <EligibilityCheck
        solutionName={solution.shortName}
        maySuit={solution.maySuit}
        worthKnowing={solution.worthKnowing}
      />
      <ThreeStepProcess />
      <TestimonialBlock />
      <ComparisonTable
        solutions={comparison}
        currentSolution={solution.shortName}
      />
      <FaqAccordion items={solution.faqs} />
    </>
  );
}

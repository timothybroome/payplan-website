export const revalidate = 10;

import { notFound } from 'next/navigation';
import { HeroSolution } from '@components/hero/HeroSolution';
import { TrustBar } from '@components/layout/TrustBar';
import { AtAGlance } from '@components/content/AtAGlance';
import { EligibilityCheck } from '@components/content/EligibilityCheck';
import { ThreeStepProcess } from '@components/content/ThreeStepProcess';
import { TestimonialBlock } from '@components/content/TestimonialBlock';
import { ComparisonTable } from '@components/content/ComparisonTable';
import { FaqAccordion } from '@components/content/FaqAccordion';
import { getSolution, getAllSolutionSlugs, getSiteSettings, getTestimonials } from '@/sanity/queries';

const comparison = [
  { name: 'DMP', legallyBinding: 'No', debtOutcome: 'Repay in full', monthlyPayments: 'Reduced', homeImpact: 'None', publicRegister: 'No' },
  { name: 'IVA', legallyBinding: 'Yes', debtOutcome: 'Partial write-off', monthlyPayments: 'Fixed', homeImpact: 'Equity release possible', publicRegister: 'Yes' },
  { name: 'DRO', legallyBinding: 'Yes', debtOutcome: 'Full write-off', monthlyPayments: 'None', homeImpact: 'Must not own', publicRegister: 'Yes' },
  { name: 'Bankruptcy', legallyBinding: 'Yes', debtOutcome: 'Full write-off', monthlyPayments: 'Possible', homeImpact: 'May be sold', publicRegister: 'Yes' },
];

export async function generateStaticParams() {
  const slugs = await getAllSolutionSlugs();
  return (slugs || []).map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = await getSolution(slug);
  if (!solution) return {};
  return {
    title: solution.seoTitle || solution.title,
    description: solution.seoDescription || solution.summary,
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [solution, settings, testimonials] = await Promise.all([
    getSolution(slug),
    getSiteSettings(),
    getTestimonials(),
  ]);

  if (!solution) notFound();

  return (
    <>
      <HeroSolution
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Debt solutions', href: '/debt-solutions' },
        ]}
        title={solution.title}
        description={solution.summary}
      />
      <TrustBar settings={settings} />
      {solution.atAGlance?.length > 0 && (
        <AtAGlance
          title={solution.shortName || solution.title}
          items={solution.atAGlance}
        />
      )}
      {solution.eligibility && (
        <EligibilityCheck
          solutionName={solution.shortName || solution.title}
          maySuit={solution.eligibility.maySuit || []}
          worthKnowing={solution.eligibility.worthKnowing || []}
        />
      )}
      <ThreeStepProcess />
      <TestimonialBlock testimonials={testimonials} />
      <ComparisonTable
        solutions={comparison}
        currentSolution={solution.shortName || solution.title}
      />
      {solution.faqs?.length > 0 && (
        <FaqAccordion items={solution.faqs} />
      )}
    </>
  );
}

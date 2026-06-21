import type { Metadata } from 'next';
import { TrustBar } from '@components/layout/TrustBar';
import { SolutionGrid } from '@components/content/SolutionGrid';
import { ThreeStepProcess } from '@components/content/ThreeStepProcess';

export const metadata: Metadata = {
  title: 'Ways to Clear Your Debt',
  description:
    'Compare free debt solutions — DMP, IVA, DRO, bankruptcy, Trust Deed and more. Find the right option for your situation.',
};

export default function DebtSolutionsPage() {
  return (
    <>
      <section className="bg-pp-deep text-pp-cream py-20 md:py-28">
        <div className="mx-auto max-w-[var(--container-readable)] px-6">
          <h1 className="pp-h-display max-w-4xl">
            Ways to clear your&nbsp;debt
          </h1>
          <p className="pp-lede mt-8 max-w-2xl text-pp-cream/90">
            There are several ways to deal with debt. The right one depends on
            how much you owe, what you can afford, and where you live. We&apos;ll
            help you find it.
          </p>
        </div>
      </section>
      <TrustBar />
      <SolutionGrid />
      <ThreeStepProcess />
    </>
  );
}

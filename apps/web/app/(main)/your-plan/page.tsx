import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Your Plan',
  description: 'View and manage your debt plan with PayPlan.',
};

export default function YourPlanPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[var(--container-readable)] px-6 text-center">
        <h1 className="pp-h-section text-pp-deep">Your plan</h1>
        <p className="pp-lede mt-6 text-pp-ink/70 max-w-xl mx-auto">
          This area will show your plan progress, payments and documents once
          the client dashboard is available.
        </p>
        <p className="mt-4 text-sm text-pp-ink/50">
          This page will load the client area micro-frontend from the Core
          squad when ready.
        </p>
        <Link
          href="/where-do-i-start"
          className="mt-10 inline-block rounded-pp bg-pp-accent px-8 py-4 font-medium text-pp-cream hover:opacity-90 transition-opacity"
        >
          Get help now
        </Link>
      </div>
    </section>
  );
}

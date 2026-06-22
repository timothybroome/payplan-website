import type { Metadata } from 'next';
import Link from 'next/link';
import { MicroFrontend } from '@components/integrations';

export const metadata: Metadata = {
  title: 'Your Plan',
  description: 'View and manage your debt plan with PayPlan.',
};

const CORE_MFE_URL = process.env.NEXT_PUBLIC_CORE_MFE_URL;

function YourPlanFallback() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[var(--container-readable)] px-6 text-center">
        <h1 className="pp-h-section text-pp-deep">Your plan</h1>
        <p className="pp-lede mt-6 text-pp-ink/70 max-w-xl mx-auto">
          This area will show your plan progress, payments and documents once
          the client dashboard is available.
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

export default function YourPlanPage() {
  return (
    <MicroFrontend
      name="your-plan"
      remoteUrl={CORE_MFE_URL}
      fallback={<YourPlanFallback />}
    />
  );
}

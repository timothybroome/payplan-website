export const revalidate = 10;

import type { Metadata } from 'next';
import Link from 'next/link';
import { TrustBar } from '@components/layout/TrustBar';
import { TestimonialBlock } from '@components/content/TestimonialBlock';
import { getSiteSettings, getTestimonials } from '@/sanity/queries';

export const metadata: Metadata = {
  title: 'About PayPlan',
  description:
    'Free debt advice, on your side since 1992. FCA regulated, Trustpilot rated, always free.',
};

const freeExplainer = [
  {
    title: 'Creditors fund the service',
    description:
      'The banks and lenders you owe money to pay for your debt plan. They prefer to get something back rather than nothing.',
  },
  {
    title: 'No customer fees, ever',
    description:
      'You will never be charged for our advice or for setting up a plan. 100% of your payments go towards your debt.',
  },
  {
    title: 'Advice is always unbiased',
    description:
      "We recommend the solution that's right for you, even if that means suggesting you don't need one.",
  },
];

const protections = [
  { title: 'Regulated advice', description: 'Authorised and regulated by the Financial Conduct Authority.' },
  { title: 'Free and impartial', description: "We don't earn more by recommending one solution over another." },
  { title: 'Real, trained people', description: 'Our advisers are qualified debt counsellors, not salespeople.' },
];

export default async function AboutPage() {
  const [settings, testimonials] = await Promise.all([
    getSiteSettings(),
    getTestimonials(),
  ]);

  return (
    <>
      <section className="bg-pp-deep text-pp-cream py-20 md:py-28">
        <div className="mx-auto max-w-[var(--container-readable)] px-6">
          <h1 className="pp-h-display max-w-4xl">
            Free debt advice, on your side since&nbsp;1992
          </h1>
        </div>
      </section>

      <TrustBar settings={settings} />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[var(--container-readable)] px-6">
          <h2 className="pp-h-section text-pp-deep">How can it be free?</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {freeExplainer.map((item, i) => (
              <div key={i}>
                <span className="pp-h-display text-pp-accent/20">{i + 1}</span>
                <h3 className="pp-h-sub mt-2 text-pp-deep">{item.title}</h3>
                <p className="mt-3 text-sm text-pp-ink/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pp-cream-warm py-16 md:py-24">
        <div className="mx-auto max-w-[var(--container-readable)] px-6">
          <h2 className="pp-h-section text-pp-deep">
            What you&apos;re protected by
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {protections.map((p) => (
              <div key={p.title} className="rounded-pp bg-pp-cream p-6 shadow-panel">
                <h3 className="pp-h-sub text-pp-deep">{p.title}</h3>
                <p className="mt-3 text-sm text-pp-ink/70">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialBlock testimonials={testimonials} />

      <section className="bg-pp-deep py-16 md:py-20">
        <div className="mx-auto max-w-[var(--container-readable)] px-6 text-center">
          <h2 className="pp-h-section text-pp-cream">Ready to take the first step?</h2>
          <Link
            href="/where-do-i-start"
            className="mt-8 inline-block rounded-pp bg-pp-accent px-8 py-4 font-medium text-pp-cream hover:opacity-90 transition-opacity"
          >
            Get help now
          </Link>
        </div>
      </section>
    </>
  );
}

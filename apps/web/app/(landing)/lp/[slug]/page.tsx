import type { Metadata } from 'next';
import { TrustBar } from '@components/layout/TrustBar';
import { TestimonialBlock } from '@components/content/TestimonialBlock';
import { getTestimonials } from '@/sanity/queries';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const steps = [
  { title: 'Choose how to get help', description: 'Online, phone, or WhatsApp — whatever suits you.' },
  { title: 'Look at your options', description: 'A trained adviser works out what fits your situation.' },
  { title: 'Move forward', description: 'Pick the right solution and we handle the rest.' },
];

export function generateStaticParams() {
  return [{ slug: 'dro-debt-help' }];
}

export default async function PaidMediaLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const testimonials = await getTestimonials();
  return (
    <>
      <section className="bg-pp-deep text-pp-cream py-16 md:py-24">
        <div className="mx-auto max-w-[var(--container-readable)] px-6">
          <h1 className="pp-h-display max-w-3xl">
            Take control of debts you can&apos;t&nbsp;pay
          </h1>
          <p className="pp-lede mt-6 max-w-2xl text-pp-cream/90">
            A Debt Relief Order could write off your debts in 12 months if you
            owe less than £30,000 and have little spare income. Free advice from
            a regulated provider.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="pp-h-sub text-pp-deep text-center">
            Find out if this could work for you
          </h2>
          <form className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-pp-ink mb-2">
                How much do you owe in total?
              </label>
              <input
                type="range"
                min="0"
                max="100000"
                step="1000"
                defaultValue="10000"
                className="w-full accent-pp-accent"
              />
              <div className="flex justify-between text-xs text-pp-ink/50 mt-1">
                <span>£0</span>
                <span>£100,000+</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-pp-ink mb-2">
                How would you like to get help?
              </label>
              <div className="space-y-2">
                {['Chat online now', 'Call me back', 'WhatsApp'].map(
                  (option) => (
                    <label
                      key={option}
                      className="flex items-center gap-3 rounded-pp border border-pp-line p-4 cursor-pointer hover:border-pp-accent transition-colors"
                    >
                      <input
                        type="radio"
                        name="contact"
                        value={option}
                        className="accent-pp-accent"
                      />
                      <span className="text-sm text-pp-ink">{option}</span>
                    </label>
                  ),
                )}
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-pp bg-pp-accent px-8 py-4 font-medium text-pp-cream hover:opacity-90 transition-opacity"
            >
              Get free advice
            </button>
          </form>
        </div>
      </section>

      <TrustBar />

      <section className="bg-pp-cream-warm py-16 md:py-24">
        <div className="mx-auto max-w-[var(--container-readable)] px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={i}>
                <span className="pp-h-display text-pp-accent/20">
                  {i + 1}
                </span>
                <h3 className="pp-h-sub mt-2 text-pp-deep">{step.title}</h3>
                <p className="mt-3 text-sm text-pp-ink/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialBlock testimonials={testimonials} />

      <section className="bg-pp-deep py-12">
        <div className="mx-auto max-w-[var(--container-readable)] px-6 text-center">
          <p className="text-pp-cream/80 text-sm">
            Prefer to talk?{' '}
            <a
              href="tel:08003161833"
              className="text-pp-cream font-medium hover:underline"
            >
              0800 316 1833
            </a>{' '}
            — free, confidential, no obligation
          </p>
          <p className="mt-4 text-xs text-pp-cream/30">
            Recommended by MoneyHelper
          </p>
        </div>
      </section>
    </>
  );
}

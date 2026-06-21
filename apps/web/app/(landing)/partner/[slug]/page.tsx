import Link from 'next/link';
import { TrustBar } from '@components/layout/TrustBar';
import { TestimonialBlock } from '@components/content/TestimonialBlock';
import { FaqAccordion } from '@components/content/FaqAccordion';
import { getTestimonials } from '@/sanity/queries';

const partnerFaqs = [
  {
    question: 'Will my bank see what I tell you?',
    answer:
      'No. Everything you share with us is completely confidential. We only contact your creditors once you have a plan in place, and only to arrange reduced payments.',
  },
  {
    question: 'Do I have to stop using my account?',
    answer:
      "Not necessarily. It depends on the solution you choose. We'll explain exactly what's involved before you commit to anything.",
  },
  {
    question: 'Is this really free?',
    answer:
      'Yes. PayPlan is funded by creditors, not customers. You will never pay a fee for our advice or for setting up a debt plan.',
  },
  {
    question: "What if a plan isn't right for me?",
    answer:
      "That's fine. We'll still give you advice on other options available to you. There's no obligation to take up any solution.",
  },
];

const steps = [
  { title: 'Get in touch', description: 'Share a few details so we can understand your situation.' },
  { title: 'We look at your options', description: 'A trained adviser works out what solutions fit your circumstances.' },
  { title: 'Move forward', description: "Choose the option that feels right. We handle everything from there." },
];

export function generateStaticParams() {
  return [{ slug: 'example-partner' }];
}

export default async function PartnerLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const testimonials = await getTestimonials();
  const partnerName = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return (
    <>
      <section className="bg-pp-deep text-pp-cream py-16 md:py-24">
        <div className="mx-auto max-w-[var(--container-readable)] px-6">
          <p className="pp-h-tag text-pp-line mb-4">
            In partnership with {partnerName}
          </p>
          <h1 className="pp-h-display max-w-3xl">
            Free, confidential debt help
          </h1>
          <p className="pp-lede mt-6 max-w-2xl text-pp-cream/90">
            {partnerName} has chosen PayPlan to offer you free, expert debt
            advice. No fees, no judgement, completely confidential.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="pp-h-sub text-pp-deep text-center">
            See how we can help
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
                defaultValue="15000"
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

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[var(--container-readable)] px-6">
          <h2 className="pp-h-section text-pp-deep">How can it be free?</h2>
          <p className="pp-lede mt-4 max-w-2xl text-pp-ink/70">
            Creditors fund the service because they&apos;d rather you paid
            something than nothing. You never pay a penny to us.
          </p>
        </div>
      </section>

      <section className="bg-pp-cream-warm py-16 md:py-24">
        <div className="mx-auto max-w-[var(--container-readable)] px-6">
          <h2 className="pp-h-section text-pp-deep">
            What happens after you get in touch
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
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

      <FaqAccordion items={partnerFaqs} />
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
        </div>
      </section>
    </>
  );
}

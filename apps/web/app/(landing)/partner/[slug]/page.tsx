import { notFound } from 'next/navigation';
import Image from 'next/image';
import { TrustBar } from '@components/layout/TrustBar';
import { TestimonialBlock } from '@components/content/TestimonialBlock';
import { FaqAccordion } from '@components/content/FaqAccordion';
import { TrustpilotWidget } from '@components/integrations';
import { getPartnerPage, getAllPartnerSlugs, getTestimonials, getSiteSettings } from '@/sanity/queries';
import { PartnerForm } from './PartnerForm';

export async function generateStaticParams() {
  const slugs = await getAllPartnerSlugs();
  return (slugs || []).map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const partner = await getPartnerPage(slug);
  if (!partner) return {};
  return {
    title: partner.seoTitle || `Free debt advice — ${partner.partnerName} & PayPlan`,
    description: partner.seoDescription || partner.intro,
  };
}

const steps = [
  { title: 'Get in touch', description: 'Share a few details so we can understand your situation.' },
  { title: 'We look at your options', description: 'A trained adviser works out what solutions fit your circumstances.' },
  { title: 'Move forward', description: "Choose the option that feels right. We handle everything from there." },
];

export default async function PartnerLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [partner, testimonials, settings] = await Promise.all([
    getPartnerPage(slug),
    getTestimonials(),
    getSiteSettings(),
  ]);

  if (!partner) notFound();

  const accentStyle = partner.brandColour
    ? { '--partner-accent': partner.brandColour } as React.CSSProperties
    : {};

  return (
    <>
      {/* Co-branded header */}
      <div className="border-b border-pp-line bg-pp-cream">
        <div className="mx-auto flex max-w-[var(--container-readable)] items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <span className="text-pp-deep font-semibold text-xl tracking-tight">PayPlan</span>
            <span className="text-pp-line text-lg font-light">×</span>
            {partner.logoUrl ? (
              <Image
                src={partner.logoUrl}
                alt={partner.partnerName}
                width={120}
                height={32}
                className="h-8 w-auto"
                unoptimized
              />
            ) : (
              <span className="text-lg font-semibold" style={{ color: partner.brandColour || 'var(--color-pp-deep)' }}>
                {partner.partnerName}
              </span>
            )}
          </div>
          <a
            href="tel:08003161833"
            className="text-sm text-pp-deep hover:underline"
          >
            0800 316 1833
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-pp-deep text-pp-cream py-16 md:py-24" style={accentStyle}>
        <div className="mx-auto max-w-[var(--container-readable)] px-6">
          <p className="pp-h-tag text-pp-line mb-4">
            In partnership with {partner.partnerName}
          </p>
          <h1 className="pp-h-display max-w-3xl">
            {partner.headline || 'Free, confidential debt help'}
          </h1>
          <p className="pp-lede mt-6 max-w-2xl text-pp-cream/90">
            {partner.intro ||
              `${partner.partnerName} has chosen PayPlan to offer you free, expert debt advice. No fees, no judgement, completely confidential.`}
          </p>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="pp-h-sub text-pp-deep text-center">
            See how we can help
          </h2>
          <PartnerForm partnerSlug={slug} />
        </div>
      </section>

      <TrustBar settings={settings} />

      {/* How can it be free */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[var(--container-readable)] px-6">
          <h2 className="pp-h-section text-pp-deep">How can it be free?</h2>
          <p className="pp-lede mt-4 max-w-2xl text-pp-ink/70">
            Creditors fund the service because they&apos;d rather you paid
            something than nothing. You never pay a penny to us.
          </p>
        </div>
      </section>

      {/* Steps */}
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

      {/* FAQs */}
      {partner.faqs?.length > 0 && (
        <FaqAccordion items={partner.faqs} />
      )}

      {/* Trustpilot */}
      <section className="bg-pp-cream-warm py-12">
        <div className="mx-auto max-w-[var(--container-readable)] px-6">
          <TrustpilotWidget theme="light" />
        </div>
      </section>

      <TestimonialBlock testimonials={testimonials} />

      {/* Bottom CTA */}
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

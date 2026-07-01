export const revalidate = 60;

import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroPermission } from '@components/hero/HeroPermission';
import { TrustBar } from '@components/layout/TrustBar';
import { SolutionGrid } from '@components/content/SolutionGrid';
import { getSiteSettings, getSolutions } from '@/sanity/queries';

export const metadata: Metadata = {
  title: 'Where Do I Start?',
  description:
    'Not sure where to begin with your debt? Start here — privately, at your own pace, with no judgement.',
};

const scenarios = [
  {
    title: "I've missed a payment",
    description:
      "Missing one payment doesn't mean things are out of control. It does mean it's worth looking at your options now, before it gets harder.",
  },
  {
    title: "I'm only paying the minimum",
    description:
      "If you're only covering minimums, your debt could take decades to clear. A plan could reduce what you pay and give you a finish line.",
  },
  {
    title: "I'm keeping it to myself",
    description:
      "Carrying it alone makes it feel bigger. Speaking to someone confidentially — even once — can show you what's possible.",
  },
];

const tools = [
  { title: 'Benefits check', description: 'See what you might be entitled to claim.', href: '#' },
  { title: 'Budget builder', description: 'Work out what you can realistically afford.', href: '#' },
  { title: 'Bill savings', description: 'Find ways to reduce your regular outgoings.', href: '#' },
];

export default async function WhereDoIStartPage() {
  const [settings, solutions] = await Promise.all([
    getSiteSettings(),
    getSolutions(),
  ]);

  return (
    <>
      <HeroPermission />
      <TrustBar settings={settings} />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[var(--container-readable)] px-6">
          <h2 className="pp-h-section text-pp-deep">
            Not sure it&apos;s bad enough to&nbsp;ask?
          </h2>
          <p className="pp-lede mt-4 max-w-2xl text-pp-ink/70">
            You don&apos;t need to be at breaking point. If any of these sound
            familiar, it&apos;s worth having a conversation.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {scenarios.map((s) => (
              <div key={s.title} className="rounded-pp bg-pp-cream-warm p-6">
                <h3 className="pp-h-sub text-pp-deep">{s.title}</h3>
                <p className="mt-3 text-sm text-pp-ink/70">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pp-cream-warm py-16 md:py-24">
        <div className="mx-auto max-w-[var(--container-readable)] px-6">
          <h2 className="pp-h-section text-pp-deep">
            Small things that help right&nbsp;now
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {tools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="group rounded-pp border border-pp-line bg-pp-cream p-6 hover:border-pp-accent transition-colors"
              >
                <h3 className="pp-h-sub text-pp-deep group-hover:text-pp-accent transition-colors">
                  {tool.title}
                </h3>
                <p className="mt-2 text-sm text-pp-ink/70">{tool.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SolutionGrid solutions={solutions} />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Life After Debt',
  description:
    "You've come a long way. Explore tools and resources to build your better financial future.",
};

const confidenceAreas = [
  {
    title: 'Building a savings habit',
    description: 'Start small and build momentum — even £10 a month makes a difference over time.',
  },
  {
    title: 'Understanding your pension',
    description: "It's never too late to check what you've got and whether you're on track.",
  },
  {
    title: 'Planning for the unexpected',
    description: 'A small buffer can stop a surprise bill from becoming a crisis.',
  },
];

const tools = [
  { title: 'Benefits check', description: 'See what you might be entitled to.', href: '#' },
  { title: 'Bill savings', description: 'Find ways to reduce your outgoings.', href: '#' },
  { title: 'Credit score understanding', description: 'Learn how to rebuild your credit.', href: '#' },
];

export default function LifeAfterDebtPage() {
  return (
    <>
      <section className="bg-pp-deep text-pp-cream py-20 md:py-28">
        <div className="mx-auto max-w-[var(--container-readable)] px-6">
          <h1 className="pp-h-display max-w-4xl">
            You&apos;ve come a long way
          </h1>
          <p className="pp-lede mt-8 max-w-2xl text-pp-cream/90">
            Let&apos;s build your better future. Explore tools and ideas to help
            you stay on solid ground.
          </p>
          <Link
            href="#tools"
            className="mt-10 inline-block rounded-pp bg-pp-accent px-8 py-4 font-medium text-pp-cream hover:opacity-90 transition-opacity"
          >
            Explore wellbeing tools
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[var(--container-readable)] px-6">
          <h2 className="pp-h-section text-pp-deep">
            Where would you like to feel more&nbsp;confident?
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {confidenceAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-pp border border-pp-line bg-pp-cream-warm p-6"
              >
                <h3 className="pp-h-sub text-pp-deep">{area.title}</h3>
                <p className="mt-3 text-sm text-pp-ink/70">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="bg-pp-cream-warm py-16 md:py-24">
        <div className="mx-auto max-w-[var(--container-readable)] px-6">
          <h2 className="pp-h-section text-pp-deep">
            Tools to keep you on solid&nbsp;ground
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

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[var(--container-readable)] px-6 text-center">
          <h2 className="pp-h-section text-pp-deep">Stay in touch</h2>
          <p className="pp-lede mt-4 text-pp-ink/70 max-w-xl mx-auto">
            Sign up for occasional tips on managing money and building financial
            confidence. No spam, unsubscribe any time.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-pp border border-pp-line px-4 py-3 text-sm focus:outline-none focus:border-pp-accent"
            />
            <button
              type="submit"
              className="rounded-pp bg-pp-accent px-6 py-3 text-sm font-medium text-pp-cream hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';

const segments = [
  {
    label: 'I need help now',
    description: 'Struggling to keep up with payments or being chased by creditors.',
    href: '/where-do-i-start',
  },
  {
    label: "I'm just worried",
    description: "Not in crisis yet, but things feel like they're heading that way.",
    href: '/where-do-i-start',
  },
  {
    label: "I'm looking at options",
    description: 'Researching what solutions are available and what might suit you.',
    href: '/debt-solutions',
  },
  {
    label: "I'm debt-free already",
    description: "You've cleared your debt and want to stay on track.",
    href: '/life-after-debt',
  },
];

export function SegmentationGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[var(--container-readable)] px-6">
        <h2 className="pp-h-section text-pp-deep">Where are you right&nbsp;now?</h2>
        <p className="pp-lede mt-4 max-w-2xl text-pp-ink/60">
          There&apos;s no wrong answer. Wherever you are, we can help.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {segments.map((seg) => (
            <Link
              key={seg.label}
              href={seg.href}
              className="group flex items-start justify-between gap-4 rounded-pp border border-pp-line bg-pp-cream p-7 shadow-sm hover:border-pp-accent hover:shadow-panel transition-all"
            >
              <div>
                <h3 className="pp-h-sub text-pp-deep group-hover:text-pp-accent transition-colors">
                  {seg.label}
                </h3>
                <p className="mt-2 text-sm text-pp-ink/60 leading-relaxed">{seg.description}</p>
              </div>
              <span className="mt-1 shrink-0 text-pp-line group-hover:text-pp-accent group-hover:translate-x-1 transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

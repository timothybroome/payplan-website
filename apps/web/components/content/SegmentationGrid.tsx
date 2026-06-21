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
    description: 'You\'ve cleared your debt and want to stay on track.',
    href: '/life-after-debt',
  },
];

export function SegmentationGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[var(--container-readable)] px-6">
        <h2 className="pp-h-section text-pp-deep">Where are you right now?</h2>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {segments.map((seg) => (
            <Link
              key={seg.label}
              href={seg.href}
              className="group rounded-pp border border-pp-line bg-pp-cream-warm p-6 hover:border-pp-accent transition-colors"
            >
              <h3 className="pp-h-sub text-pp-deep group-hover:text-pp-accent transition-colors">
                {seg.label}
              </h3>
              <p className="mt-2 text-sm text-pp-ink/70">{seg.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

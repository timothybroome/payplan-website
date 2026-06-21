import Link from 'next/link';

interface Solution {
  title: string;
  shortName?: string;
  slug: string;
  region?: string;
}

const scotlandSolutions = [
  { title: 'Trust Deed', shortName: 'Trust Deed', slug: 'trust-deed', region: 'scotland' },
  { title: 'Debt Arrangement Scheme', shortName: 'DAS', slug: 'debt-arrangement-scheme', region: 'scotland' },
  { title: 'Minimal Asset Process', shortName: 'MAP', slug: 'minimal-asset-process', region: 'scotland' },
  { title: 'Sequestration', shortName: 'Sequestration', slug: 'sequestration', region: 'scotland' },
];

export function SolutionGrid({ solutions = [] }: { solutions?: Solution[] }) {
  const ewSolutions = solutions.filter((s) => s.region !== 'scotland');
  const allScotland = [
    ...solutions.filter((s) => s.region === 'scotland'),
    ...scotlandSolutions.filter(
      (s) => !solutions.some((sol) => sol.slug === s.slug),
    ),
  ];

  const groups = [
    { label: 'England, Wales & Northern Ireland', items: ewSolutions, pathPrefix: '/debt-solutions/' },
    { label: 'Scotland', items: allScotland, pathPrefix: '/scotland/' },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[var(--container-readable)] px-6">
        <h2 className="pp-h-section text-pp-deep">Ways to clear your debt</h2>
        {groups.map(({ label, items, pathPrefix }) => (
          <div key={label} className="mt-10">
            <h3 className="pp-h-tag text-pp-ink/50">{label}</h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((sol) => (
                <Link
                  key={sol.slug}
                  href={`${pathPrefix}${sol.slug}`}
                  className="group rounded-pp border border-pp-line p-6 hover:border-pp-accent hover:shadow-panel transition-all"
                >
                  <span className="pp-h-tag text-pp-accent">
                    {sol.shortName || sol.title}
                  </span>
                  <h4 className="pp-h-sub mt-2 text-pp-deep group-hover:text-pp-accent transition-colors">
                    {sol.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

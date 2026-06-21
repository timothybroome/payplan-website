import Link from 'next/link';

const solutions = {
  'England, Wales & Northern Ireland': [
    { name: 'Debt Management Plan', shortName: 'DMP', href: '/debt-solutions/debt-management-plans' },
    { name: 'Individual Voluntary Arrangement', shortName: 'IVA', href: '/debt-solutions/iva' },
    { name: 'Debt Relief Order', shortName: 'DRO', href: '/debt-solutions/debt-relief-order' },
    { name: 'Bankruptcy', shortName: 'Bankruptcy', href: '/debt-solutions/bankruptcy' },
  ],
  Scotland: [
    { name: 'Trust Deed', shortName: 'Trust Deed', href: '/scotland/trust-deed' },
    { name: 'Debt Arrangement Scheme', shortName: 'DAS', href: '/scotland/debt-arrangement-scheme' },
    { name: 'Minimal Asset Process', shortName: 'MAP', href: '/scotland/minimal-asset-process' },
    { name: 'Sequestration', shortName: 'Sequestration', href: '/scotland/sequestration' },
  ],
};

export function SolutionGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[var(--container-readable)] px-6">
        <h2 className="pp-h-section text-pp-deep">Ways to clear your debt</h2>
        {Object.entries(solutions).map(([region, items]) => (
          <div key={region} className="mt-10">
            <h3 className="pp-h-tag text-pp-ink/50">{region}</h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((sol) => (
                <Link
                  key={sol.href}
                  href={sol.href}
                  className="group rounded-pp border border-pp-line p-6 hover:border-pp-accent hover:shadow-panel transition-all"
                >
                  <span className="pp-h-tag text-pp-accent">{sol.shortName}</span>
                  <h4 className="pp-h-sub mt-2 text-pp-deep group-hover:text-pp-accent transition-colors">
                    {sol.name}
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

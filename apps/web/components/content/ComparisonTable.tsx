interface Solution {
  name: string;
  legallyBinding: string;
  debtOutcome: string;
  monthlyPayments: string;
  homeImpact: string;
  publicRegister: string;
}

interface ComparisonTableProps {
  solutions: Solution[];
  currentSolution: string;
}

const columns = [
  { key: 'legallyBinding' as const, label: 'Legally binding' },
  { key: 'debtOutcome' as const, label: 'Debt outcome' },
  { key: 'monthlyPayments' as const, label: 'Monthly payments' },
  { key: 'homeImpact' as const, label: 'Home impact' },
  { key: 'publicRegister' as const, label: 'Public register' },
];

export function ComparisonTable({ solutions, currentSolution }: ComparisonTableProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[var(--container-readable)] px-6">
        <h2 className="pp-h-section text-pp-deep">
          How does it compare?
        </h2>
        <p className="pp-lede mt-4 max-w-2xl text-pp-ink/60">
          Every solution has trade-offs. Here&apos;s how they stack up.
        </p>
        <div className="mt-12 overflow-x-auto rounded-pp border border-pp-line shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-pp-line bg-pp-cream-warm">
                <th className="text-left py-4 pl-7 pr-4 font-medium text-pp-ink/50 w-40" />
                {solutions.map((sol) => (
                  <th
                    key={sol.name}
                    className={`text-left py-4 px-4 font-medium ${
                      sol.name === currentSolution
                        ? 'text-pp-accent'
                        : 'text-pp-deep'
                    }`}
                  >
                    {sol.name}
                    {sol.name === currentSolution && (
                      <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-pp-accent" />
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {columns.map((col, i) => (
                <tr key={col.key} className={i < columns.length - 1 ? 'border-b border-pp-line/40' : ''}>
                  <td className="py-4 pl-7 pr-4 font-medium text-pp-ink/70">
                    {col.label}
                  </td>
                  {solutions.map((sol) => (
                    <td
                      key={sol.name}
                      className={`py-4 px-4 text-pp-ink/60 ${
                        sol.name === currentSolution ? 'bg-pp-accent/5 font-medium text-pp-deep' : ''
                      }`}
                    >
                      {sol[col.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

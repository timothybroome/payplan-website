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
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[var(--container-readable)] px-6">
        <h2 className="pp-h-section text-pp-deep">
          Is this right for you?
        </h2>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-pp-line">
                <th className="text-left py-3 pr-4 font-medium text-pp-ink" />
                {solutions.map((sol) => (
                  <th
                    key={sol.name}
                    className={`text-left py-3 px-4 font-medium ${
                      sol.name === currentSolution
                        ? 'text-pp-accent'
                        : 'text-pp-ink'
                    }`}
                  >
                    {sol.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {columns.map((col) => (
                <tr key={col.key} className="border-b border-pp-line/50">
                  <td className="py-3 pr-4 font-medium text-pp-ink">
                    {col.label}
                  </td>
                  {solutions.map((sol) => (
                    <td
                      key={sol.name}
                      className={`py-3 px-4 text-pp-ink/70 ${
                        sol.name === currentSolution ? 'bg-pp-cream-warm' : ''
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

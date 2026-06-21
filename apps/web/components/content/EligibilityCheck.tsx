interface EligibilityCheckProps {
  solutionName: string;
  maySuit: string[];
  worthKnowing: string[];
}

export function EligibilityCheck({ solutionName, maySuit, worthKnowing }: EligibilityCheckProps) {
  return (
    <section className="bg-pp-cream-warm py-16 md:py-24">
      <div className="mx-auto max-w-[var(--container-readable)] px-6">
        <h2 className="pp-h-section text-pp-deep">
          Is a {solutionName} available to you?
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-pp bg-pp-cream p-6 shadow-panel">
            <h3 className="pp-h-sub text-pp-deep">
              A {solutionName} may suit you if…
            </h3>
            <ul className="mt-4 space-y-3">
              {maySuit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-pp-ink/70">
                  <span className="text-pp-accent mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-pp bg-pp-cream p-6 shadow-panel">
            <h3 className="pp-h-sub text-pp-deep">Things worth knowing</h3>
            <ul className="mt-4 space-y-3">
              {worthKnowing.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-pp-ink/70">
                  <span className="text-pp-ink/30 mt-0.5 shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

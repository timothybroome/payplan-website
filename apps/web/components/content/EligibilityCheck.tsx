interface EligibilityCheckProps {
  solutionName: string;
  maySuit: string[];
  worthKnowing: string[];
}

export function EligibilityCheck({ solutionName, maySuit, worthKnowing }: EligibilityCheckProps) {
  return (
    <section className="bg-pp-cream-warm py-20 md:py-28">
      <div className="mx-auto max-w-[var(--container-readable)] px-6">
        <h2 className="pp-h-section text-pp-deep">
          Is a {solutionName} available to&nbsp;you?
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-pp bg-pp-cream p-8 shadow-panel">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pp-accent/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pp-accent">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="pp-h-sub text-pp-deep">
                A {solutionName} may suit you if…
              </h3>
            </div>
            <ul className="space-y-4">
              {maySuit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-pp-ink/70 leading-relaxed">
                  <span className="mt-0.5 shrink-0 text-pp-accent font-medium">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-pp bg-pp-cream p-8 shadow-panel">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pp-deep/5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pp-deep">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <h3 className="pp-h-sub text-pp-deep">Things worth knowing</h3>
            </div>
            <ul className="space-y-4">
              {worthKnowing.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-pp-ink/70 leading-relaxed">
                  <span className="mt-0.5 shrink-0 text-pp-ink/30">—</span>
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

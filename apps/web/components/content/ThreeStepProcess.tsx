const steps = [
  {
    number: '1',
    title: 'Tell us about your situation',
    description:
      'Answer a few simple questions about your income, outgoings and debts. Online, by phone, or on WhatsApp.',
  },
  {
    number: '2',
    title: 'Find what you can afford',
    description:
      'We work out a realistic budget and show you the options that fit your circumstances.',
  },
  {
    number: '3',
    title: 'Know your next step',
    description:
      'Choose the solution that feels right. We handle everything with your creditors.',
  },
];

export function ThreeStepProcess() {
  return (
    <section className="bg-pp-cream-warm py-16 md:py-24">
      <div className="mx-auto max-w-[var(--container-readable)] px-6">
        <h2 className="pp-h-section text-pp-deep">How it works</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="pp-h-display text-pp-accent/20">{step.number}</span>
              <h3 className="pp-h-sub mt-2 text-pp-deep">{step.title}</h3>
              <p className="mt-3 text-sm text-pp-ink/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

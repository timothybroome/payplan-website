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
    <section className="bg-pp-cream-warm py-20 md:py-28">
      <div className="mx-auto max-w-[var(--container-readable)] px-6">
        <h2 className="pp-h-section text-pp-deep">How it works</h2>
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pp-accent/10 text-pp-accent font-semibold text-xl">
                {step.number}
              </div>
              <h3 className="pp-h-sub mt-5 text-pp-deep">{step.title}</h3>
              <p className="mt-3 text-sm text-pp-ink/60 leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(100%-8px)] w-[calc(100%-48px)]">
                  <div className="h-px bg-pp-line" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

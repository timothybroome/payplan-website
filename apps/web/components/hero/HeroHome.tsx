import Link from 'next/link';

export function HeroHome() {
  return (
    <section className="bg-pp-deep text-pp-cream py-20 md:py-28">
      <div className="mx-auto max-w-[var(--container-readable)] px-6">
        <h1 className="pp-h-display max-w-4xl">
          Take control of your debt, without&nbsp;judgement
        </h1>
        <p className="pp-lede mt-8 max-w-2xl text-pp-cream/90">
          PayPlan provides free debt advice and solutions — always confidential,
          always impartial. We&apos;re funded by creditors so you never pay a
          penny.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/where-do-i-start"
            className="rounded-pp bg-pp-accent px-8 py-4 font-medium text-pp-cream hover:opacity-90 transition-opacity"
          >
            Get help now
          </Link>
          <Link
            href="/check-your-options"
            className="rounded-pp border border-pp-cream/40 px-8 py-4 font-medium text-pp-cream hover:bg-pp-cream/10 transition-colors"
          >
            Check your options
          </Link>
        </div>
        <p className="mt-8 text-sm text-pp-cream/60">
          <a href="tel:08003161833" className="hover:text-pp-cream transition-colors">
            0800 316 1833
          </a>{' '}
          — free to call, Mon–Fri 8am–8pm, Sat 9am–3pm
        </p>
      </div>
    </section>
  );
}

import Link from 'next/link';

export function HeroHome() {
  return (
    <section className="relative bg-pp-deep text-pp-cream overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pp-deep via-pp-deep to-[#024a64]" />
      <div className="relative mx-auto max-w-[var(--container-readable)] px-6 py-24 md:py-36 lg:py-44">
        <p className="pp-h-tag text-pp-accent tracking-widest">Free, regulated debt advice</p>
        <h1 className="pp-h-display mt-4 max-w-4xl">
          Take control of your debt, without&nbsp;judgement
        </h1>
        <p className="pp-lede mt-8 max-w-2xl text-pp-cream/85">
          You don&apos;t have to have it all figured out to get in touch. Just
          tell us what&apos;s going on — we&apos;ll take it from&nbsp;there.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/where-do-i-start"
            className="rounded-pp bg-pp-accent px-8 py-4 text-base font-medium text-pp-cream shadow-lg shadow-pp-accent/20 hover:bg-[#007ab8] transition-colors"
          >
            Get help now
          </Link>
          <Link
            href="/check-your-options"
            className="rounded-pp border border-pp-cream/30 px-8 py-4 text-base font-medium text-pp-cream hover:bg-pp-cream/10 transition-colors"
          >
            Check your options
          </Link>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-pp-cream/60">
          <a href="tel:08003161833" className="hover:text-pp-cream transition-colors font-medium">
            0800 316 1833
          </a>
          <span className="hidden sm:inline">Free to call, Mon–Fri 8am–8pm, Sat 9am–3pm</span>
          <span className="hidden md:inline border-l border-pp-cream/20 pl-8">
            In partnership with MoneyHelper
          </span>
        </div>
      </div>
    </section>
  );
}

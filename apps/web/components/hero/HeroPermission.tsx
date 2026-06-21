import Link from 'next/link';

export function HeroPermission() {
  return (
    <section className="bg-pp-deep text-pp-cream py-20 md:py-28">
      <div className="mx-auto max-w-[var(--container-readable)] px-6">
        <h1 className="pp-h-display max-w-3xl">
          Going through a difficult time with&nbsp;money?
        </h1>
        <p className="pp-lede mt-8 max-w-2xl text-pp-cream/90">
          You don&apos;t need to have all the answers. Start with one small step
          — privately, at your own pace, with no judgement.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/check-your-options"
            className="rounded-pp bg-pp-accent px-8 py-4 font-medium text-pp-cream hover:opacity-90 transition-opacity"
          >
            See where you stand, privately
          </Link>
          <a
            href="tel:08003161833"
            className="rounded-pp border border-pp-cream/40 px-8 py-4 font-medium text-pp-cream hover:bg-pp-cream/10 transition-colors"
          >
            Talk to someone
          </a>
        </div>
      </div>
    </section>
  );
}

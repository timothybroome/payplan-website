export default function HomePage() {
  return (
    <section className="mx-auto max-w-[var(--container-readable)] px-6 py-24">
      <h1 className="pp-h-display text-pp-deep">
        Free debt advice
        <br />
        you can trust
      </h1>
      <p className="pp-lede mt-8 max-w-2xl text-pp-ink">
        We&apos;ve helped over 3 million people find the right way to deal with
        their debt. Our advice is free, confidential and tailored to you.
      </p>
      <div className="mt-10 flex gap-4">
        <a
          href="/where-do-i-start"
          className="rounded-pp bg-pp-accent px-8 py-4 text-pp-cream font-medium hover:opacity-90 transition-opacity"
        >
          Where do I start?
        </a>
        <a
          href="/debt-solutions"
          className="rounded-pp border border-pp-deep px-8 py-4 text-pp-deep font-medium hover:bg-pp-cream-warm transition-colors"
        >
          Explore solutions
        </a>
      </div>
    </section>
  );
}

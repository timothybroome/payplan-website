import Link from 'next/link';

interface HeroSolutionProps {
  breadcrumbs: { label: string; href: string }[];
  title: string;
  description: string;
}

export function HeroSolution({ breadcrumbs, title, description }: HeroSolutionProps) {
  return (
    <section className="relative bg-pp-deep text-pp-cream overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pp-deep via-pp-deep to-[#024a64]" />
      <div className="relative mx-auto max-w-[var(--container-readable)] px-6 py-16 md:py-24 lg:py-28">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-pp-cream/40 mb-8">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.href} className="flex items-center gap-2">
              {i > 0 && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              )}
              <Link href={crumb.href} className="hover:text-pp-cream/70 transition-colors">
                {crumb.label}
              </Link>
            </span>
          ))}
        </nav>
        <h1 className="pp-h-display max-w-3xl">{title}</h1>
        <p className="pp-lede mt-6 max-w-2xl text-pp-cream/85">
          {description}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/where-do-i-start"
            className="rounded-pp bg-pp-accent px-8 py-4 text-base font-medium text-pp-cream shadow-lg shadow-pp-accent/20 hover:bg-[#007ab8] transition-colors"
          >
            Start online
          </Link>
          <a
            href="tel:08003161833"
            className="rounded-pp border border-pp-cream/30 px-8 py-4 text-base font-medium text-pp-cream hover:bg-pp-cream/10 transition-colors"
          >
            Talk it through
          </a>
        </div>
      </div>
    </section>
  );
}

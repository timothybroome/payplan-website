import Link from 'next/link';

interface HeroSolutionProps {
  breadcrumbs: { label: string; href: string }[];
  title: string;
  description: string;
}

export function HeroSolution({ breadcrumbs, title, description }: HeroSolutionProps) {
  return (
    <section className="bg-pp-deep text-pp-cream py-16 md:py-24">
      <div className="mx-auto max-w-[var(--container-readable)] px-6">
        <nav className="flex items-center gap-2 text-sm text-pp-cream/50 mb-8">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.href} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              <Link href={crumb.href} className="hover:text-pp-cream transition-colors">
                {crumb.label}
              </Link>
            </span>
          ))}
        </nav>
        <h1 className="pp-h-display max-w-3xl">{title}</h1>
        <p className="pp-lede mt-6 max-w-2xl text-pp-cream/90">
          {description}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/where-do-i-start"
            className="rounded-pp bg-pp-accent px-8 py-4 font-medium text-pp-cream hover:opacity-90 transition-opacity"
          >
            Start online
          </Link>
          <a
            href="tel:08003161833"
            className="rounded-pp border border-pp-cream/40 px-8 py-4 font-medium text-pp-cream hover:bg-pp-cream/10 transition-colors"
          >
            Talk it through
          </a>
        </div>
      </div>
    </section>
  );
}

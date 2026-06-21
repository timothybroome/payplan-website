interface Testimonial {
  quote: string;
  name?: string;
  solutionName?: string;
  rating?: number;
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.5"
          className={i < count ? 'text-pp-accent' : 'text-pp-line'}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialBlock({ testimonials }: { testimonials: Testimonial[] }) {
  if (!testimonials?.length) return null;

  return (
    <section className="bg-pp-cream-warm py-20 md:py-28">
      <div className="mx-auto max-w-[var(--container-readable)] px-6">
        <h2 className="pp-h-section text-pp-deep">Real stories</h2>
        <p className="pp-lede mt-4 max-w-2xl text-pp-ink/60">
          From people who&apos;ve been where you are now.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="flex flex-col rounded-pp bg-pp-cream p-8 shadow-panel"
            >
              {t.rating && <Stars count={t.rating} />}
              <p className="mt-5 flex-1 text-sm text-pp-ink/70 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pp-deep text-pp-cream text-xs font-medium">
                  {(t.name || 'A').charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-pp-deep">
                    {t.name || 'Anonymous'}
                  </p>
                  {t.solutionName && (
                    <p className="text-xs text-pp-ink/50">{t.solutionName} customer</p>
                  )}
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

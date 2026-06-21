interface Testimonial {
  quote: string;
  name?: string;
  solutionName?: string;
  rating?: number;
}

function Stars({ count }: { count: number }) {
  return (
    <span className="text-pp-accent" aria-label={`${count} out of 5 stars`}>
      {'★'.repeat(count)}
      {'☆'.repeat(5 - count)}
    </span>
  );
}

export function TestimonialBlock({ testimonials }: { testimonials: Testimonial[] }) {
  if (!testimonials?.length) return null;

  return (
    <section className="bg-pp-cream-warm py-16 md:py-24">
      <div className="mx-auto max-w-[var(--container-readable)] px-6">
        <h2 className="pp-h-section text-pp-deep">Real stories</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-pp bg-pp-cream p-6 shadow-panel"
            >
              {t.rating && <Stars count={t.rating} />}
              <p className="mt-4 text-sm text-pp-ink/80 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm font-medium text-pp-deep">
                {t.name || 'Anonymous'}
                {t.solutionName && ` — ${t.solutionName}`}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

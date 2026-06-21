const testimonials = [
  {
    quote:
      'I was dreading making the call but they made everything so easy. Within weeks I had a plan and could sleep at night again.',
    name: 'Sarah',
    solution: 'DMP',
    rating: 5,
  },
  {
    quote:
      "PayPlan helped me understand all my options without any pressure. I didn't even know a DRO existed before I spoke to them.",
    name: 'James',
    solution: 'DRO',
    rating: 5,
  },
  {
    quote:
      'After my IVA completed I felt like a weight had been lifted. The team were supportive through the whole five years.',
    name: 'Michelle',
    solution: 'IVA',
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <span className="text-pp-accent" aria-label={`${count} out of 5 stars`}>
      {'★'.repeat(count)}
      {'☆'.repeat(5 - count)}
    </span>
  );
}

export function TestimonialBlock() {
  return (
    <section className="bg-pp-cream-warm py-16 md:py-24">
      <div className="mx-auto max-w-[var(--container-readable)] px-6">
        <h2 className="pp-h-section text-pp-deep">Real stories</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-pp bg-pp-cream p-6 shadow-panel"
            >
              <Stars count={t.rating} />
              <p className="mt-4 text-sm text-pp-ink/80 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm font-medium text-pp-deep">
                {t.name} — {t.solution}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

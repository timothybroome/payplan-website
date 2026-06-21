interface AtAGlanceProps {
  title: string;
  items: { label: string; value: string }[];
}

export function AtAGlance({ title, items }: AtAGlanceProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[var(--container-readable)] px-6">
        <h2 className="pp-h-section text-pp-deep">{title} at a glance</h2>
        <div className="mt-8 rounded-pp border border-pp-line overflow-hidden">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-6 py-4 ${
                i % 2 === 0 ? 'bg-pp-cream-warm' : 'bg-pp-cream'
              }`}
            >
              <span className="text-sm font-medium text-pp-ink">{item.label}</span>
              <span className="text-sm text-pp-ink/70">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

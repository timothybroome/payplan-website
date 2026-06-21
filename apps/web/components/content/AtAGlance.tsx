interface AtAGlanceProps {
  title: string;
  items: { label: string; value: string }[];
}

export function AtAGlance({ title, items }: AtAGlanceProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[var(--container-readable)] px-6">
        <h2 className="pp-h-section text-pp-deep">{title} at a glance</h2>
        <div className="mt-10 rounded-pp border border-pp-line overflow-hidden shadow-sm">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between px-7 py-5 ${
                i % 2 === 0 ? 'bg-pp-cream-warm' : 'bg-pp-cream'
              } ${i > 0 ? 'border-t border-pp-line/50' : ''}`}
            >
              <span className="text-sm font-medium text-pp-deep">{item.label}</span>
              <span className="text-sm text-pp-ink/60">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

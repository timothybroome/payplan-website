interface TrustBarProps {
  settings?: {
    trustpilotRating?: string;
    peopleHelped?: string;
    yearsOperating?: string;
  };
}

export function TrustBar({ settings }: TrustBarProps = {}) {
  const trustItems = [
    { label: 'FCA regulated', value: null },
    { label: 'Always free', value: null },
    { label: 'People helped', value: settings?.peopleHelped ?? '3m+' },
    { label: 'Trustpilot', value: settings?.trustpilotRating ?? '4.5/5' },
    { label: 'Years helping', value: settings?.yearsOperating ?? '30+' },
  ];

  return (
    <section className="bg-pp-cream-warm border-y border-pp-line">
      <div className="mx-auto max-w-[var(--container-readable)] px-6 py-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {trustItems.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2 text-sm text-pp-deep"
            >
              {item.value && (
                <span className="font-semibold">{item.value}</span>
              )}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

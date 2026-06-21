interface TrustBarProps {
  settings?: {
    trustpilotRating?: string;
    peopleHelped?: string;
    yearsOperating?: string;
  };
}

const icons = {
  shield: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  heart: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  users: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  star: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  clock: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
};

export function TrustBar({ settings }: TrustBarProps = {}) {
  const trustItems = [
    { icon: icons.shield, label: 'FCA regulated', value: null },
    { icon: icons.heart, label: 'Always free', value: null },
    { icon: icons.users, label: 'People helped', value: settings?.peopleHelped ?? '3m+' },
    { icon: icons.star, label: 'Trustpilot', value: settings?.trustpilotRating ?? '4.5/5' },
    { icon: icons.clock, label: 'Years helping', value: settings?.yearsOperating ?? '30+' },
  ];

  return (
    <section className="bg-pp-cream-warm border-y border-pp-line">
      <div className="mx-auto max-w-[var(--container-readable)] px-6 py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {trustItems.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2.5 text-sm text-pp-deep"
            >
              <span className="text-pp-accent shrink-0">{item.icon}</span>
              {item.value && (
                <span className="font-semibold tabular-nums">{item.value}</span>
              )}
              <span className="text-pp-ink/70">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

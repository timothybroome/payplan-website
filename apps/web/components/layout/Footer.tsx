import Link from 'next/link';

const columns = [
  {
    title: 'Get help',
    links: [
      { label: 'Where do I start?', href: '/where-do-i-start' },
      { label: 'Ways to clear your debt', href: '/debt-solutions' },
      { label: 'Check your options', href: '/check-your-options' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Life after debt', href: '/life-after-debt' },
      { label: 'Guides and advice', href: '/debt-info' },
      { label: 'Your plan', href: '/your-plan' },
    ],
  },
  {
    title: 'PayPlan',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-pp-deep text-pp-cream">
      <div className="mx-auto max-w-[var(--container-readable)] px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="pp-h-tag text-pp-line mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-pp-cream/80 hover:text-pp-cream transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-pp-cream/20 pt-8">
          <p className="text-sm text-pp-cream/60">
            <a
              href="tel:08003161833"
              className="text-pp-cream hover:underline"
            >
              0800 316 1833
            </a>{' '}
            — Free, confidential debt advice
          </p>
          <p className="text-xs text-pp-cream/40">
            PayPlan is a trading name of Totemic Limited. Authorised and
            regulated by the Financial Conduct Authority.
          </p>
        </div>
      </div>
    </footer>
  );
}

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
      { label: 'Latest news', href: '/news' },
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
      <div className="mx-auto max-w-[var(--container-readable)] px-6 pt-16 pb-12">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              PayPlan
            </Link>
            <p className="mt-4 text-sm text-pp-cream/60 leading-relaxed">
              Free, confidential debt advice. Funded by creditors, not&nbsp;you.
            </p>
            <a
              href="tel:08003161833"
              className="mt-4 inline-block text-lg font-semibold text-pp-cream hover:text-pp-accent transition-colors"
            >
              0800 316 1833
            </a>
            <p className="mt-1 text-xs text-pp-cream/40">
              Mon–Fri 8am–8pm, Sat 9am–3pm
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="pp-h-tag text-pp-cream/40 mb-5">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-pp-cream/70 hover:text-pp-cream transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-pp-cream/10 pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-lg">
              <p className="text-xs text-pp-cream/40 leading-relaxed">
                PayPlan is a trading name of Totemic Limited. Registered in
                England & Wales, Company No. 04664444. Registered Office: Kempton
                House, Dysart Road, Grantham, Lincolnshire, NG31 7LE. Authorised
                and regulated by the Financial Conduct Authority. FRN 681263.
              </p>
            </div>
            <div className="shrink-0 rounded-lg border border-pp-cream/10 px-4 py-3">
              <p className="text-xs text-pp-cream/50">In partnership with</p>
              <p className="mt-1 text-sm font-medium text-pp-cream/70">MoneyHelper</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

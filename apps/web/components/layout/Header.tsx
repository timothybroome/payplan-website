import Link from 'next/link';

const navItems = [
  { label: 'Where do I start?', href: '/where-do-i-start' },
  { label: 'Ways to clear your debt', href: '/debt-solutions' },
  { label: 'Life after debt', href: '/life-after-debt' },
  { label: 'About', href: '/about' },
  { label: 'Your plan', href: '/your-plan' },
];

export function Header() {
  return (
    <header className="border-b border-pp-line bg-pp-cream">
      <div className="mx-auto flex max-w-[var(--container-readable)] items-center justify-between px-6 py-4">
        <Link href="/" className="text-pp-deep font-semibold text-xl">
          PayPlan
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-pp-ink hover:text-pp-deep transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/where-do-i-start"
            className="rounded-pp bg-pp-accent px-6 py-2.5 text-sm font-medium text-pp-cream hover:opacity-90 transition-opacity"
          >
            Get help now
          </Link>
        </nav>
      </div>
    </header>
  );
}

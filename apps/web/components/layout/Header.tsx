'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Where do I start?', href: '/where-do-i-start' },
  { label: 'Ways to clear your debt', href: '/debt-solutions' },
  { label: 'Life after debt', href: '/life-after-debt' },
  { label: 'About', href: '/about' },
  { label: 'Your plan', href: '/your-plan' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-pp-line bg-pp-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[var(--container-readable)] items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-pp-deep font-semibold text-xl tracking-tight">
          PayPlan
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                  active
                    ? 'text-pp-deep font-medium bg-pp-cream-warm'
                    : 'text-pp-ink/70 hover:text-pp-deep hover:bg-pp-cream-warm'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/where-do-i-start"
            className="ml-3 rounded-pp bg-pp-accent px-6 py-2.5 text-sm font-medium text-pp-cream hover:bg-pp-accent/90 transition-colors"
          >
            Get help now
          </Link>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/where-do-i-start"
            className="rounded-pp bg-pp-accent px-5 py-2 text-sm font-medium text-pp-cream hover:bg-pp-accent/90 transition-colors"
          >
            Get help
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-pp-deep hover:bg-pp-cream-warm transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {mobileOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-pp-line bg-pp-cream px-6 py-4 lg:hidden">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-sm transition-colors ${
                      active
                        ? 'text-pp-deep font-medium bg-pp-cream-warm'
                        : 'text-pp-ink/70 hover:text-pp-deep hover:bg-pp-cream-warm'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 border-t border-pp-line pt-4">
            <a
              href="tel:08003161833"
              className="block text-center text-sm text-pp-deep font-medium"
            >
              0800 316 1833
            </a>
            <p className="mt-1 text-center text-xs text-pp-ink/50">
              Free to call, Mon–Fri 8am–8pm
            </p>
          </div>
        </nav>
      )}
    </header>
  );
}

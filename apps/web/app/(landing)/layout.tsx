export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-pp-line bg-pp-cream">
        <div className="mx-auto flex max-w-[var(--container-readable)] items-center justify-between px-6 py-4">
          <span className="text-pp-deep font-semibold text-xl">PayPlan</span>
          <a
            href="tel:08003161833"
            className="text-sm text-pp-deep hover:underline"
          >
            0800 316 1833
          </a>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-pp-deep text-pp-cream py-8">
        <div className="mx-auto max-w-[var(--container-readable)] px-6 text-center text-xs text-pp-cream/40">
          PayPlan is a trading name of Totemic Limited. Authorised and
          regulated by the Financial Conduct Authority.
        </div>
      </footer>
    </>
  );
}

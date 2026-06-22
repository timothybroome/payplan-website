export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
      <footer className="bg-pp-deep text-pp-cream py-8">
        <div className="mx-auto max-w-[var(--container-readable)] px-6 text-center text-xs text-pp-cream/40">
          PayPlan is a trading name of Totemic Limited. Authorised and
          regulated by the Financial Conduct Authority. FRN 681263.
        </div>
      </footer>
    </>
  );
}

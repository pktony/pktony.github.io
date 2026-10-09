export function Section({
  id,
  title,
  sub,
  children,
}: {
  id: string;
  title: string;
  sub?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mt-20">
      <h2 id={`${id}-title`} className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
        {sub && <span className="ml-2 text-sm font-medium text-[var(--muted)]">{sub}</span>}
      </h2>
      <div className="mt-4 h-px bg-[var(--line)]" />
      <div className="mt-8">{children}</div>
    </section>
  );
}

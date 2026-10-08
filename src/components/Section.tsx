export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-bold">{title}</h2>
      <hr className="my-4 border-[var(--line)]" />
      {children}
    </section>
  );
}

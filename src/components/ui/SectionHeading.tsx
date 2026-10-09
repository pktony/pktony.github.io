type SectionHeadingProps = { id: string; title: string };

export function SectionHeading({ id, title }: SectionHeadingProps) {
  return (
    <>
      <h2 id={id} className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <div className="mt-5 h-px bg-[var(--line)]" />
    </>
  );
}

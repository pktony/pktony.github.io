type ProjectHeaderProps = { name: string; period: string; role: string; compact: boolean };

export function ProjectHeader({ name, period, role, compact }: ProjectHeaderProps) {
  return (
    <>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h4 className={`${compact ? "text-lg" : "text-2xl"} font-bold leading-snug`}>{name}</h4>
        <p className="font-mono text-sm tabular-nums text-[var(--muted)]">{period}</p>
      </div>
      <p className="mt-2 text-sm text-[var(--muted)]">{role}</p>
    </>
  );
}

import type { Credential } from "@/types/resume";

type CredentialColumnProps = { heading: string; items: Credential[] };

export function CredentialColumn({ heading, items }: CredentialColumnProps) {
  return (
    <div>
      <h3 className="text-lg font-bold">{heading}</h3>
      <ul className="mt-3 space-y-3">
        {items.map((item) => (
          <li key={item.title}>
            <p className="font-medium">{item.title}</p>
            <p className="font-mono text-sm tabular-nums text-[var(--muted)]">{item.period}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

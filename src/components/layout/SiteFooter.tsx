type SiteFooterProps = { name: string; email: string; year: number };

export function SiteFooter({ name, email, year }: SiteFooterProps) {
  return (
    <footer className="mt-24 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)]">
      <p>
        © {year} {name}
      </p>
      <a href={`mailto:${email}`} className="inline-flex min-h-6 items-center underline underline-offset-4 hover:text-[var(--fg)]">
        {email}
      </a>
    </footer>
  );
}

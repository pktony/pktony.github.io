import { displayUrl } from "@/lib/displayUrl";

type SiteFooterProps = { name: string; email: string; siteUrl: string; year: number };

const linkClass =
  "inline-flex min-h-6 items-center underline underline-offset-4 hover:text-ink";

export function SiteFooter({ name, email, siteUrl, year }: SiteFooterProps) {
  return (
    <footer className="mt-24 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-line pt-6 text-meta text-muted">
      <p>
        © {year} {name}
      </p>
      <p className="flex flex-wrap items-center gap-x-5 gap-y-1">
        <a href={siteUrl} className={linkClass}>
          {displayUrl(siteUrl)}
        </a>
        <a href={`mailto:${email}`} className={linkClass}>
          {email}
        </a>
      </p>
    </footer>
  );
}

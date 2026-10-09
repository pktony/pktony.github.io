import { ExternalLink } from "@/components/ui/ExternalLink";
import type { ProjectLink } from "@/types/resume";

export function ProjectLinks({ links }: { links: ProjectLink[] }) {
  if (links.length === 0) return null;
  return (
    <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-sm">
      {links.map((l) => (
        <li key={l.url}>
          <ExternalLink href={l.url}>{l.label}</ExternalLink>
        </li>
      ))}
    </ul>
  );
}

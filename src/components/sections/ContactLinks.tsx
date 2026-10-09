import type { ContactLink } from "@/types/resume";

// 주소가 글자로 그대로 보이는 연락처 줄. 인쇄·PDF에서도 어디서 온 문서인지 알 수 있다
export function ContactLinks({ links }: { links: ContactLink[] }) {
  return (
    <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 font-mono text-sm" aria-label="연락처와 링크">
      {links.map((l) => (
        <li key={l.url}>
          <a
            href={l.url}
            className="inline-flex min-h-6 items-center text-[var(--accent)] underline-offset-4 hover:underline"
            {...(l.url.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            {l.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

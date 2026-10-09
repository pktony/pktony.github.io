import { resume as r } from "@/resume.config";
import { Section } from "@/components/Section";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Icon } from "@/components/Icon";
import { Rich } from "@/components/Rich";

// 저장된 값이 없으면 다크 테마가 기본
const themeInit = `try{var t=localStorage.getItem("theme");if(t!=="light")document.documentElement.classList.add("dark")}catch(e){document.documentElement.classList.add("dark")}`;

const ext = { target: "_blank", rel: "noreferrer" } as const;
const iconBtn =
  "grid h-11 w-11 place-items-center rounded-full text-[var(--muted)] hover:bg-[var(--card)] hover:text-[var(--fg)]";

const nav = [
  { href: "#introduce", label: "Introduce" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#more", label: "More" },
];

export default function Home() {
  const featured = r.projects.filter((p) => p.featured);
  const extras = r.projects.filter((p) => !p.featured);

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[var(--fg)] focus:px-3 focus:py-2 focus:text-[var(--bg)]"
      >
        본문으로 건너뛰기
      </a>

      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5">
          <a href="#top" className="text-lg font-extrabold tracking-tight">
            {r.handle}
          </a>
          <nav aria-label="섹션 이동" className="hidden gap-1 sm:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-full px-3 py-2 text-sm text-[var(--muted)] hover:bg-[var(--card)] hover:text-[var(--fg)]"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center">
            {r.socials.map((s) => (
              <a key={s.url} href={s.url} aria-label={s.label} title={s.label} className={iconBtn} {...ext}>
                <Icon name={s.icon} />
              </a>
            ))}
            <a href={`mailto:${r.email}`} aria-label="이메일 보내기" title={r.email} className={iconBtn}>
              <Icon name="mail" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main" className="mx-auto max-w-4xl px-5 pb-24" tabIndex={-1}>
        <div id="top" />

        <Section id="introduce" title="Introduce.">
          <p className="mb-2 text-xl font-bold">
            {r.name} <span className="font-medium text-[var(--muted)]">· {r.title}</span>
          </p>
          <div className="mt-4 max-w-[68ch] space-y-5 text-[17px]">
            {r.intro.map((p, i) => (
              <p key={i}>
                <Rich text={p} />
              </p>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience.">
          <ol className="space-y-14">
            {r.experience.map((e) => (
              <li key={e.company} className="grid gap-4 md:grid-cols-[11rem_1fr] md:gap-8">
                <p className="text-sm font-semibold tabular-nums text-[var(--muted)] md:pt-1.5">{e.period}</p>
                <div>
                  <h3 className="text-2xl font-bold">{e.company}</h3>
                  <p className="mt-1 text-[var(--muted)]">{e.role}</p>
                  <ul className="mt-3 flex flex-wrap gap-2" aria-label="담당 영역">
                    {e.badges.map((b) => (
                      <li key={b} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs font-medium">
                        {b}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 list-disc space-y-2.5 pl-5 marker:text-[var(--muted)]">
                    {e.bullets.map((b) => (
                      <li key={b}>
                        <Rich text={b} />
                      </li>
                    ))}
                  </ul>
                  {e.metrics.length > 0 && (
                    <dl className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
                      {e.metrics.map((m) => (
                        <div key={m.label} className="gcard rounded-2xl p-5">
                          <dd className="text-xl font-extrabold leading-tight tabular-nums sm:text-2xl">{m.value}</dd>
                          <dt className="mt-2 text-sm text-[var(--muted)]">{m.label}</dt>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" title="Projects.">
          <ul className="space-y-10">
            {featured.map((p) => (
              <ProjectCard key={p.name} p={p} />
            ))}
          </ul>
          {extras.length > 0 && (
            <>
              <h3 className="mb-6 mt-16 text-xl font-bold">
                More Cases<span className="ml-2 text-sm font-medium text-[var(--muted)]">추가 기술 사례</span>
              </h3>
              <ul className="grid gap-6 md:grid-cols-2">
                {extras.map((p) => (
                  <ProjectCard key={p.name} p={p} compact />
                ))}
              </ul>
            </>
          )}
        </Section>

        <Section id="skills" title="Skills.">
          <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-[10rem_1fr]">
            {r.skills.map((s) => (
              <div key={s.label} className="contents">
                <dt className="font-bold">{s.label}</dt>
                <dd>
                  <ul className="flex flex-wrap gap-2">
                    {s.items.map((i) => (
                      <li key={i} className="rounded-full bg-[var(--chip)] px-3 py-1 text-sm font-medium text-[var(--chip-fg)]">
                        {i}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="more" title="Education & More.">
          <div className="grid gap-10 md:grid-cols-3">
            <MiniList heading="Education" items={r.education.map((e) => ({ title: `${e.school} ${e.major}`, period: e.period }))} />
            <MiniList heading="Awards" items={r.awards} />
            <MiniList heading="Certificates" items={r.certificates} />
          </div>
          {r.writing.length > 0 && (
            <ul className="mt-10 list-disc pl-5">
              {r.writing.map((w) => (
                <li key={w.url}>
                  <a href={w.url} className="underline underline-offset-4" {...ext}>
                    {w.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </Section>

        <footer className="mt-24 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)]">
          <p>
            © {new Date().getFullYear()} {r.name}
          </p>
          <a href={`mailto:${r.email}`} className="underline underline-offset-4 hover:text-[var(--fg)]">
            {r.email}
          </a>
        </footer>
      </main>
    </>
  );
}

function ProjectCard({ p, compact = false }: { p: (typeof r.projects)[number]; compact?: boolean }) {
  return (
    <li className={`gcard rounded-2xl ${compact ? "p-5" : "p-6 sm:p-8"}`}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h4 className={`${compact ? "text-lg" : "text-2xl"} font-bold leading-snug`}>{p.name}</h4>
        <p className="text-sm font-semibold tabular-nums text-[var(--muted)]">{p.period}</p>
      </div>
      <p className="mt-2 text-sm text-[var(--muted)]">{p.role}</p>
      <p className={`mt-4 ${compact ? "text-[15px]" : "text-[17px]"} font-medium`}>{p.summary}</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] marker:text-[var(--muted)]">
        {p.bullets.map((b) => (
          <li key={b}>
            <Rich text={b} />
          </li>
        ))}
      </ul>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="사용 기술">
        {p.tech.map((t) => (
          <li key={t} className="rounded-full bg-[var(--chip)] px-2.5 py-0.5 text-xs font-medium text-[var(--chip-fg)]">
            {t}
          </li>
        ))}
      </ul>
      {p.links.length > 0 && (
        <p className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-sm font-semibold">
          {p.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              className="inline-flex min-h-6 items-center gap-1 text-[var(--accent)] underline-offset-4 hover:underline"
              {...ext}
            >
              {l.label}
              <Icon name="external" />
              <span className="sr-only">(새 탭)</span>
            </a>
          ))}
        </p>
      )}
    </li>
  );
}

function MiniList({ heading, items }: { heading: string; items: { title: string; period: string }[] }) {
  return (
    <div>
      <h3 className="text-lg font-bold">{heading}</h3>
      <ul className="mt-3 space-y-3">
        {items.map((i) => (
          <li key={i.title}>
            <p className="font-medium">{i.title}</p>
            <p className="text-sm tabular-nums text-[var(--muted)]">{i.period}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

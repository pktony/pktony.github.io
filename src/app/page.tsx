import { resume as r } from "@/resume.config";
import { Section } from "@/components/Section";
import { ThemeToggle } from "@/components/ThemeToggle";

const themeInit = `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

const ext = { target: "_blank", rel: "noreferrer" } as const;

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      <header className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold">{r.name}</h1>
          <p className="mt-2 text-[var(--muted)]">{r.title}</p>
          <div className="mt-3 flex gap-3 text-sm">
            {r.socials.map((s) => (
              <a key={s.url} href={s.url} className="underline" {...ext}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <ThemeToggle />
      </header>

      <Section title="Introduction">
        {r.intro.map((p, i) => (
          <p key={i} className="mb-3 leading-7">
            {p}
          </p>
        ))}
      </Section>

      {r.education.length > 0 && (
        <Section title="Education">
          {r.education.map((e) => (
            <p key={e.school}>
              {e.school} · {e.major} <span className="text-[var(--muted)]">{e.period}</span>
            </p>
          ))}
        </Section>
      )}

      {r.experience.length > 0 && (
        <Section title="Experience">
          {r.experience.map((e) => (
            <div key={e.company} className="mb-6">
              <p className="font-semibold">
                {e.company} · {e.role}
              </p>
              <p className="text-sm text-[var(--muted)]">{e.period}</p>
              <ul className="mt-2 list-disc pl-5">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>
      )}

      {r.projects.length > 0 && (
        <Section title="Project">
          {r.projects.map((p) => (
            <div key={p.name} className="mb-5">
              <p className="font-semibold">
                {p.link ? (
                  <a href={p.link} className="underline" {...ext}>
                    {p.name}
                  </a>
                ) : (
                  p.name
                )}
              </p>
              <p>{p.summary}</p>
              <p className="text-sm text-[var(--muted)]">{p.tech.join(" · ")}</p>
            </div>
          ))}
        </Section>
      )}

      {r.skills.length > 0 && (
        <Section title="Skill">
          {r.skills.map((s) => (
            <p key={s.label} className="mb-1">
              <b>{s.label}</b> {s.items.join(", ")}
            </p>
          ))}
        </Section>
      )}

      {r.writing.length > 0 && (
        <Section title="Writing">
          <ul className="list-disc pl-5">
            {r.writing.map((w) => (
              <li key={w.url}>
                <a href={w.url} className="underline" {...ext}>
                  {w.title}
                </a>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <footer className="mt-16 text-sm text-[var(--muted)]">
        © {new Date().getFullYear()} {r.name}
      </footer>
    </main>
  );
}

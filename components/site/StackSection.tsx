"use client";

import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const stacks = [
  ["Python", "Django", "DRF", "FastAPI", "Node.js"],
  ["PostgreSQL", "MySQL", "Redis", "REST", "RBAC"],
  ["React", "Next.js", "TypeScript", "Tailwind"],
  ["Docker", "Linux", "Nginx", "Git", "CI/CD"],
];

export function StackSection() {
  const { t } = useLanguage();

  return (
    <section id="stack" className="scroll-mt-20 border-t border-border py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="section-tag">{t.stack.label}</p>
          <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">{t.stack.title}</h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {t.stack.groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <div className="panel p-5">
                <h3 className="font-display font-semibold">{group.title}</h3>
                <p className="mt-1 text-xs text-muted-dim">{group.note}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {stacks[i].map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

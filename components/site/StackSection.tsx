"use client";

import { Reveal } from "@/components/Reveal";

const groups = [
  {
    title: "Backend Engineering",
    items: ["Python", "Django", "Django REST Framework", "FastAPI", "Node.js"],
    note: "Domain logic, auth, integrations, long-lived services",
  },
  {
    title: "APIs & Data",
    items: ["REST", "PostgreSQL", "MySQL", "Redis", "Schema design"],
    note: "Ledgers, reporting models, migrations, integrity",
  },
  {
    title: "Frontend & Products",
    items: ["React", "Next.js", "TypeScript", "Responsive UI"],
    note: "Dashboards, multi-role flows, performance-aware UI",
  },
  {
    title: "Delivery",
    items: ["Docker", "Linux VPS", "Nginx", "Git", "CI-friendly releases"],
    note: "From local development to production environments",
  },
];

export function StackSection() {
  return (
    <section id="stack" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-[90rem] px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <Reveal>
          <p className="section-index">02 — Technical stack</p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Tools I use to build complete systems.
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.04}>
              <div className="grid gap-4 py-8 sm:grid-cols-12 sm:items-start sm:gap-8">
                <p className="font-mono text-[11px] text-muted-dim sm:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="sm:col-span-3">
                  <h3 className="font-display text-lg font-semibold">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-dim">{group.note}</p>
                </div>
                <ul className="flex flex-wrap gap-2 sm:col-span-8">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-muted"
                    >
                      {item}
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

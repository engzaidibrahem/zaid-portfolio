"use client";

import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

const stats = [
  { value: String(6), label: "Documented product case studies" },
  { value: "Full stack", label: "Backend through deployment" },
  { value: "Indonesia", label: "Based · remote worldwide" },
];

export function AboutSection() {
  const { person, company } = siteConfig;

  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <p className="section-label">About</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
              Practical engineering for products people rely on every day.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-[17px]">
              <p>
                I&apos;m {person.name}, a {person.role.toLowerCase()} and founder
                of {company.name}—a software development company in Indonesia
                focused on complete digital products for businesses.
              </p>
              <p>
                {company.description} My work spans SaaS platforms, logistics
                backends, education systems, restaurant operations, and
                client-facing delivery—always with attention to architecture,
                clarity, and maintainability.
              </p>
              <p>
                I approach projects by connecting business requirements,
                technical design, and user experience—so teams get systems they
                can operate and extend—not fragile one-off builds.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {stats.map((stat) => (
              <Reveal key={stat.label} delay={0.05}>
                <div className="card-surface px-6 py-5">
                  <p className="font-display text-2xl font-bold sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

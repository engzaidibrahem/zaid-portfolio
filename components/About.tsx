"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {t.about.eyebrow}
              </p>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
                {t.about.titleLine1}
                <br />
                {t.about.titleLine2Before}
                <span className="text-accent">{t.about.titleAccent}</span>
                {t.about.titleLine2After}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-[17px]">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </div>
            </div>
          </Reveal>

          <Stagger className="flex flex-col gap-4" delay={0.1}>
            {t.about.stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="rounded-2xl border border-border bg-card px-6 py-5 transition-colors hover:border-accent/25">
                  <p className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="section-tag">{t.about.label}</p>
          <h2 className="mt-3 max-w-xl font-display text-2xl font-bold sm:text-3xl">
            {t.about.title}
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="panel mt-8 max-w-3xl space-y-4 p-6 text-sm leading-relaxed text-muted sm:text-base">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
            <p className="font-mono text-xs text-accent">{t.about.footnote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

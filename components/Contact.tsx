"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GithubIcon } from "@/components/icons";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { siteConfig } from "@/lib/site";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-border py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[min(90%,520px)] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {t.contact.eyebrow}
            </p>
            <h2 className="mt-4 whitespace-pre-line font-display text-4xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t.contact.titleBefore}
              <span className="text-accent">{t.contact.titleAccent}</span>
              {t.contact.titleAfter}
            </h2>
            <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">
              {t.contact.supporting}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`mailto:${siteConfig.email}`}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail size={16} aria-hidden />
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/35 hover:bg-white/[0.03]"
              >
                <GithubIcon size={16} />
                {t.contact.github}
                <ArrowUpRight size={15} aria-hidden />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

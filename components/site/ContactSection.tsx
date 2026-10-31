"use client";

import { Mail, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GithubIcon } from "@/components/icons";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { siteConfig } from "@/lib/site";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="section-tag">{t.contact.label}</p>
          <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">{t.contact.title}</h2>
          <p className="mt-3 max-w-lg text-muted">{t.contact.subtitle}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${siteConfig.email}`}
              className="focus-ring panel inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold hover:border-accent/40"
            >
              <Mail size={16} aria-hidden />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring panel inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold hover:border-accent/40"
            >
              <MessageCircle size={16} aria-hidden />
              {siteConfig.whatsappDisplay}
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring panel inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-muted hover:border-accent/40 hover:text-foreground"
            >
              <GithubIcon size={16} />
              {t.contact.github}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

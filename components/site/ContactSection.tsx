"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GithubIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-[90rem] px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <Reveal>
          <p className="section-index">04 — Contact</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
            Discuss a backend, platform, or product build.
          </h2>
          <p className="mt-5 max-w-lg text-muted">
            Open to remote collaborations, contract engineering, and long-term
            product work with teams that value maintainable systems.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <a
              href={`mailto:${siteConfig.email}`}
              className="link-underline focus-ring inline-flex items-center gap-2 text-base"
            >
              <Mail size={16} aria-hidden />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline focus-ring inline-flex items-center gap-2 text-base text-muted"
            >
              <GithubIcon size={16} />
              GitHub
              <ArrowUpRight size={14} aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

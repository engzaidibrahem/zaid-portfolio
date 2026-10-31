"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GithubIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-border py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="section-label">Contact</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.1] sm:text-5xl">
            Ready to discuss a product, platform, or internal system?
          </h2>
          <p className="mt-5 max-w-xl text-muted sm:text-lg">
            Open to remote collaborations, contract work, and long-term
            engineering partnerships with teams building ambitious products.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${siteConfig.email}`}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-[#041018]"
            >
              <Mail size={16} aria-hidden />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold hover:border-border-strong"
            >
              <GithubIcon size={16} />
              GitHub
              <ArrowUpRight size={15} aria-hidden />
            </a>
          </div>

          <p className="mt-8 text-sm text-muted-dim">
            {siteConfig.company.name} · {siteConfig.company.tagline}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

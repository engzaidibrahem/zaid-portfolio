"use client";

import { Server, LayoutDashboard, Layers, Rocket } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { capabilityIds } from "@/lib/projects";

const icons = {
  backend: Server,
  saas: LayoutDashboard,
  fullstack: Layers,
  infra: Rocket,
} as const;

export function Capabilities() {
  const { t } = useLanguage();

  return (
    <section
      id="capabilities"
      className="relative scroll-mt-24 border-y border-border bg-background-secondary/60 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 max-w-2xl sm:mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {t.capabilities.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.capabilities.title}
            </h2>
          </div>
        </Reveal>

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {capabilityIds.map((id) => {
            const Icon = icons[id];
            const item = t.capabilities.items[id];
            return (
              <StaggerItem key={id}>
                <article className="group h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/25 sm:p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-accent transition-colors group-hover:border-accent/35">
                    <Icon size={20} aria-hidden />
                  </div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                  <p className="mt-5 border-t border-border pt-4 font-mono text-[11px] leading-relaxed text-foreground/70">
                    {item.stack}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

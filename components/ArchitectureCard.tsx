"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function ArchitectureCard() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const stages = t.architecture.stages;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(198,255,62,0.08),transparent_55%)]" />
      <div className="relative mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            {t.architecture.label}
          </p>
          <p className="mt-1 font-display text-lg font-semibold text-foreground">
            {t.architecture.title}
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          {t.architecture.live}
        </span>
      </div>

      <ul className="relative space-y-0">
        {stages.map((stage, index) => (
          <li key={`${stage}-${index}`} className="relative flex flex-col items-stretch">
            <motion.div
              className="group relative flex items-center gap-4 rounded-xl border border-border bg-background/50 px-4 py-3.5 transition-colors hover:border-accent/30"
              initial={reduceMotion ? false : { opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.35 + index * 0.12,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-card font-mono text-xs text-muted transition-colors group-hover:border-accent/40 group-hover:text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-sm font-semibold tracking-wide text-foreground sm:text-base">
                  {stage}
                </p>
              </div>
              {!reduceMotion && (
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                  animate={{ opacity: [0.35, 1, 0.35], scale: [1, 1.25, 1] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    delay: index * 0.35,
                    ease: "easeInOut",
                  }}
                />
              )}
            </motion.div>

            {index < stages.length - 1 && (
              <div className="relative mx-auto flex h-5 w-px items-center justify-center">
                <span className="absolute inset-0 bg-border" />
                {!reduceMotion && (
                  <motion.span
                    className="absolute left-1/2 top-0 h-2 w-px -translate-x-1/2 bg-accent"
                    animate={{ y: [0, 12, 0], opacity: [0.2, 1, 0.2] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      delay: index * 0.25,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

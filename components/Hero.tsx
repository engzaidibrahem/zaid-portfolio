"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { ArchitectureCard } from "@/components/ArchitectureCard";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const { t, locale } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="noise-overlay" />
      <div className="pointer-events-none absolute -top-32 end-0 h-[420px] w-[420px] rounded-full bg-accent/[0.04] blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <motion.div
            key={`badge-${locale}`}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[11px] tracking-wide text-muted sm:text-xs">
              {t.hero.availability}
            </span>
          </motion.div>

          <motion.p
            key={`name-${locale}`}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-muted"
          >
            {siteConfig.name}
          </motion.p>

          <motion.p
            key={`title-${locale}`}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-2 text-sm font-medium text-foreground/70 sm:text-base"
          >
            {t.hero.title}
          </motion.p>

          <motion.h1
            key={`h1-${locale}`}
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.14,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-4 max-w-xl font-display text-[2.35rem] font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-[3.35rem]"
          >
            {t.hero.headlineBefore}
            <span className="text-accent">{t.hero.headlineAccent}</span>
            {t.hero.headlineAfter}
          </motion.h1>

          <motion.p
            key={`support-${locale}`}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
          >
            {t.hero.supporting}
          </motion.p>

          <motion.div
            key={`cta-${locale}`}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#work"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {t.hero.ctaWork}
              <ArrowDownRight size={16} aria-hidden />
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/40 hover:bg-white/[0.03]"
            >
              {t.hero.ctaBuild}
              <ArrowUpRight size={16} aria-hidden />
            </a>
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 font-mono text-xs text-muted/80"
          >
            {t.hero.stackLine}
          </motion.p>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="lg:justify-self-end lg:w-full"
        >
          <ArchitectureCard />
        </motion.div>
      </div>
    </section>
  );
}

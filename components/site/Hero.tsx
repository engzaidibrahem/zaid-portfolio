"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SystemDiagram } from "@/components/site/SystemDiagram";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { hero, company, person, availability } = siteConfig;

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 mesh-bg" />
      <div className="pointer-events-none absolute inset-0 grid-fine opacity-80" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
        <div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent-glow)]" />
            <span className="text-xs text-muted">{availability}</span>
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.55 }}
            className="text-sm font-medium text-accent"
          >
            {company.name} · {person.role}
          </motion.p>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 max-w-2xl font-display text-[2.1rem] font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.55 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {hero.supporting}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.55 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/#work"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-[#041018] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {hero.primaryCta}
              <ArrowDown size={16} aria-hidden />
            </Link>
            <Link
              href="/#contact"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-border-strong hover:bg-surface"
            >
              {hero.secondaryCta}
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-8 font-mono text-[11px] text-muted-dim"
          >
            Backend · APIs · SaaS · React · Next.js · PostgreSQL · Docker
          </motion.p>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.65 }}
        >
          <SystemDiagram />
        </motion.div>
      </div>

      <div className="relative mx-auto mt-14 flex max-w-6xl justify-center px-5 sm:px-8">
        <a
          href="#work"
          className="focus-ring flex flex-col items-center gap-2 text-xs text-muted transition-colors hover:text-accent"
        >
          <span>Scroll to selected work</span>
          <ArrowDown size={16} className="animate-bounce" aria-hidden />
        </a>
      </div>
    </section>
  );
}

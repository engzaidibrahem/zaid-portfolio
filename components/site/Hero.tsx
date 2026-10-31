"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { HeroBlueprint } from "@/components/site/HeroBlueprint";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { person, hero, availability, stackLine } = siteConfig;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] border-b border-border pt-14 sm:min-h-[88vh]"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-20 select-none overflow-hidden px-4 sm:top-16"
        aria-hidden
      >
        <p className="font-display text-[clamp(3.5rem,18vw,13rem)] font-extrabold leading-[0.85] tracking-tighter text-foreground/[0.04]">
          ZAID
        </p>
        <p className="-mt-[0.12em] text-right font-display text-[clamp(3.5rem,18vw,13rem)] font-extrabold leading-[0.85] tracking-tighter text-foreground/[0.04]">
          IBRAHEM
        </p>
      </div>

      <div className="relative mx-auto grid max-w-[90rem] lg:grid-cols-12 lg:gap-0 lg:px-10">
        <div className="col-span-12 border-border px-4 py-16 sm:px-6 lg:col-span-7 lg:border-r lg:py-24 lg:pe-12">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent"
          >
            {availability}
          </motion.p>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-[clamp(2.75rem,8vw,5.5rem)] font-bold leading-[0.95] tracking-tight"
          >
            {person.name}
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="mt-4 max-w-md font-mono text-sm uppercase tracking-[0.12em] text-muted"
          >
            {person.role} — {person.tagline}
          </motion.p>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.6 }}
            className="mt-8 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
          >
            {hero.statement}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3"
          >
            <Link href="/#work" className="link-underline focus-ring text-sm">
              {hero.primaryCta}
            </Link>
            <Link href="/#contact" className="link-underline focus-ring text-sm text-muted">
              {hero.secondaryCta}
            </Link>
          </motion.div>

          <p className="mt-12 font-mono text-[10px] leading-relaxed tracking-wide text-muted-dim sm:text-[11px]">
            {stackLine}
          </p>
        </div>

        <div className="col-span-12 flex flex-col justify-end border-t border-border px-4 py-10 sm:px-6 lg:col-span-5 lg:border-t-0 lg:py-24 lg:ps-12">
          <HeroBlueprint />
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-dim">
            Selected work spans SaaS, logistics APIs, education systems, and
            restaurant operations—documented as engineering case studies, not
            demo templates.
          </p>
          <a
            href="#work"
            className="link-underline focus-ring mt-6 w-fit font-mono text-[11px] uppercase tracking-[0.18em]"
          >
            Scroll — 06 projects
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RotatingGlobe } from "@/components/site/RotatingGlobe";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const globeScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.15]);
  const globeY = useTransform(scrollYProgress, [0, 0.85], ["0%", "-12%"]);
  const globeOpacity = useTransform(scrollYProgress, [0, 0.85], [0.92, 0.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 32]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.7], [0.72, 0.95]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="hero-shell relative min-h-[100svh] overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20"
    >
      <motion.div
        style={reduce ? undefined : { opacity: overlayOpacity }}
        className="hero-readability pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
      />

      <motion.div
        style={
          reduce
            ? undefined
            : { scale: globeScale, y: globeY, opacity: globeOpacity }
        }
        className="hero-globe-layer pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
      >
        <RotatingGlobe size="hero-bg" />
      </motion.div>

      <div className="relative z-[2] mx-auto flex max-w-6xl flex-col items-center px-4 sm:px-6">
        <motion.div
          style={reduce ? undefined : { y: contentY }}
          className="flex w-full max-w-3xl flex-col items-center text-center"
        >
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-tag mx-auto block w-fit text-center"
          >
            {t.hero.availability}
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl"
          >
            <span className="hero-title-gradient">{siteConfig.name}</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-accent sm:text-sm"
          >
            {t.hero.role}
          </motion.p>

          <p className="globe-caption mt-5 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-accent-2/95 sm:text-[11px]">
            {t.hero.globeCaption}
          </p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="mx-auto mt-6 max-w-xl text-lg font-medium leading-snug text-foreground sm:text-xl"
          >
            {t.hero.headline}
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted sm:text-base"
          >
            {t.hero.subline}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.24 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <Link
              href="/#work"
              className="focus-ring rounded-lg bg-gradient-to-r from-accent to-accent-2 px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03]"
            >
              {t.hero.ctaWork}
            </Link>
            <Link
              href="/#contact"
              className="focus-ring rounded-lg border border-border/80 bg-bg-panel/50 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur-md hover:border-accent/45"
            >
              {t.hero.ctaContact}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.6 }}
          className="panel panel-glow relative mt-10 w-full max-w-md p-5 backdrop-blur-md sm:p-6 lg:mt-12 lg:max-w-lg"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dim">
            {t.hero.metricsLabel}
          </p>
          <ul className="mt-4 space-y-3">
            {t.hero.metrics.map((m) => (
              <li
                key={m.label}
                className="flex items-baseline justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0"
              >
                <span className="text-xs text-muted">{m.label}</span>
                <span className="font-display text-lg font-bold text-accent-2">{m.value}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 font-mono text-[10px] leading-relaxed text-muted-dim">
            Python · Django · FastAPI · PostgreSQL · React · Next.js · Docker
          </div>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        className="hero-scroll-hint absolute bottom-6 start-1/2 z-[2] -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dim"
        animate={reduce ? undefined : { y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        scroll
      </motion.div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RotatingGlobe } from "@/components/site/RotatingGlobe";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { useMobileLayout } from "@/lib/use-mobile";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const mobile = useMobileLayout();
  const sectionRef = useRef<HTMLElement>(null);
  const motionScroll = !reduce && !mobile;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const globeScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.08]);
  const globeY = useTransform(scrollYProgress, [0, 0.85], [0, -48]);
  const globeOpacity = useTransform(scrollYProgress, [0, 0.85], [0.88, 0.12]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="hero-shell relative min-h-[100svh] overflow-x-clip overflow-y-visible pt-20 pb-16 sm:pt-24 sm:pb-20"
    >
      <div
        className={`hero-readability pointer-events-none absolute inset-0 z-[1] ${mobile ? "hero-readability-mobile" : ""}`}
        aria-hidden
      />

      <div
        className={`hero-globe-layer pointer-events-none absolute inset-0 z-0 flex items-center justify-center ${mobile ? "hero-globe-layer-mobile" : ""}`}
      >
        {motionScroll ? (
          <motion.div
            style={{ scale: globeScale, y: globeY, opacity: globeOpacity }}
            className="flex items-center justify-center"
          >
            <RotatingGlobe size="hero-bg" lite={false} />
          </motion.div>
        ) : (
          <RotatingGlobe size={mobile ? "hero-mobile" : "hero-bg"} lite={mobile} />
        )}
      </div>

      <div className="relative z-[2] mx-auto flex max-w-6xl flex-col items-center px-4 sm:px-6">
        <div className={`hero-copy-panel flex w-full max-w-3xl flex-col items-center text-center ${mobile ? "hero-copy-panel-mobile" : ""}`}>
          <motion.p
            initial={reduce || mobile ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-tag mx-auto block w-fit text-center"
          >
            {t.hero.availability}
          </motion.p>

          <motion.h1
            initial={reduce || mobile ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="mt-4 font-display text-3xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="hero-title-gradient hero-title-solid-mobile">{siteConfig.name}</span>
          </motion.h1>

          <motion.p
            initial={reduce || mobile ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-accent sm:text-sm"
          >
            {t.hero.role}
          </motion.p>

          <p className="globe-caption mt-4 max-w-xs text-center font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-accent-2/95 sm:mt-5 sm:max-w-none sm:text-[11px] sm:tracking-[0.22em]">
            {t.hero.globeCaption}
          </p>

          <motion.p
            initial={reduce || mobile ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="mx-auto mt-5 max-w-xl text-base font-medium leading-snug text-foreground sm:mt-6 sm:text-xl"
          >
            {t.hero.headline}
          </motion.p>

          <motion.p
            initial={reduce || mobile ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted sm:mt-4 sm:text-base"
          >
            {t.hero.subline}
          </motion.p>

          <motion.div
            initial={reduce || mobile ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.24 }}
            className="mt-6 flex w-full flex-wrap justify-center gap-3 sm:mt-8"
          >
            <Link
              href="/#work"
              className="focus-ring rounded-lg bg-gradient-to-r from-accent to-accent-2 px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20"
            >
              {t.hero.ctaWork}
            </Link>
            <Link
              href="/#contact"
              className="focus-ring rounded-lg border border-border/80 bg-bg-panel/80 px-5 py-2.5 text-sm font-semibold text-foreground sm:backdrop-blur-md"
            >
              {t.hero.ctaContact}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={reduce || mobile ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: mobile ? 0 : 0.32, duration: 0.5 }}
          className="panel panel-glow relative mt-8 w-full max-w-md p-5 sm:mt-10 sm:p-6 lg:mt-12 lg:max-w-lg"
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
          <div className="mt-5 break-words font-mono text-[10px] leading-relaxed text-muted-dim">
            Python · Django · FastAPI · PostgreSQL · React · Next.js · Docker
          </div>
        </motion.div>
      </div>

      {!mobile && (
        <motion.div
          aria-hidden
          className="hero-scroll-hint absolute bottom-6 start-1/2 z-[2] -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dim"
          animate={reduce ? undefined : { y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          scroll
        </motion.div>
      )}
    </section>
  );
}

"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type ScrollSectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Accent wash: cool | warm | mint */
  tone?: "cool" | "warm" | "mint";
};

export function ScrollSection({
  id,
  children,
  className = "",
  tone = "cool",
}: ScrollSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const washY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const washOpacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0, 0.55, 0.55, 0]);

  return (
    <section ref={ref} id={id} className={`scroll-section relative ${className}`}>
      {!reduce && (
        <motion.div
          style={{ y: washY, opacity: washOpacity }}
          className={`section-wash section-wash-${tone}`}
          aria-hidden
        />
      )}
      <div className="relative z-[1]">{children}</div>
    </section>
  );
}

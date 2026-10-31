"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useMobileLayout } from "@/lib/use-mobile";

type ScrollSectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
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
  const mobile = useMobileLayout();
  const motionWash = !reduce && !mobile;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const washY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const washOpacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0, 0.45, 0.45, 0]);

  return (
    <section ref={ref} id={id} className={`scroll-section relative overflow-x-clip ${className}`}>
      {motionWash && (
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

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { globeMarkers, markerPosition } from "@/lib/globe-markers";

type RotatingGlobeProps = {
  className?: string;
  size?: "hero-bg" | "hero-mobile" | "hero" | "sm";
  /** Fewer animations for touch / low power devices */
  lite?: boolean;
};

function GlobePins({ animate, show }: { animate: boolean; show: boolean }) {
  if (!show) return null;

  return (
    <div className={`globe-pins ${animate ? "globe-pins-scroll" : "globe-pins-static"}`}>
      {globeMarkers.flatMap((m) => {
        const { left, top } = markerPosition(m.lat, m.lon);
        const offsets = animate ? [0, 50] : [0];
        return offsets.map((offset) => (
          <span
            key={`${m.id}-${offset}`}
            className={`globe-pin ${m.primary ? "globe-pin-primary" : ""}`}
            style={{ left: `calc(${left} + ${offset}%)`, top }}
          />
        ));
      })}
    </div>
  );
}

export function RotatingGlobe({
  className = "",
  size = "hero",
  lite = false,
}: RotatingGlobeProps) {
  const reduce = useReducedMotion();
  const animate = !reduce && !lite;
  const dim =
    size === "hero-bg"
      ? "globe-hero-bg-size"
      : size === "hero-mobile"
        ? "globe-hero-mobile-size"
        : size === "hero"
          ? "globe-hero-size"
          : "globe-sm-size";

  return (
    <div className={`globe-stage ${dim} ${lite ? "globe-lite" : ""} ${className}`} aria-hidden>
      {!lite && <div className="globe-halo globe-halo-day" />}
      {!lite && <div className="globe-orbit-ring" />}
      <motion.div
        className="globe-tilt"
        animate={animate && !lite ? { rotateZ: [0, 1.5, 0, -1.5, 0] } : undefined}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="globe-sphere globe-sphere-day">
          <div className={`globe-map globe-map-day ${animate ? "" : "globe-map-static"}`} />
          <GlobePins animate={animate} show={!lite} />
          <div className="globe-shade globe-shade-day" />
          {!lite && <div className="globe-specular globe-specular-day" />}
        </div>
      </motion.div>
      {!lite && <div className="globe-floor-glow" />}
    </div>
  );
}

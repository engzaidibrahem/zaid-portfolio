"use client";

import { motion, useReducedMotion } from "framer-motion";
import { globeMarkers, markerPosition } from "@/lib/globe-markers";

type RotatingGlobeProps = {
  className?: string;
  size?: "hero-bg" | "hero" | "sm";
};

function GlobePins({ animate }: { animate: boolean }) {
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

export function RotatingGlobe({ className = "", size = "hero" }: RotatingGlobeProps) {
  const reduce = useReducedMotion();
  const animate = !reduce;
  const dim =
    size === "hero-bg"
      ? "globe-hero-bg-size"
      : size === "hero"
        ? "globe-hero-size"
        : "globe-sm-size";

  return (
    <div className={`globe-stage ${dim} ${className}`} aria-hidden>
      <div className="globe-halo globe-halo-day" />
      <div className="globe-orbit-ring" />
      <motion.div
        className="globe-tilt"
        animate={animate ? { rotateZ: [0, 1.5, 0, -1.5, 0] } : undefined}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="globe-sphere globe-sphere-day">
          <div className={`globe-map globe-map-day ${animate ? "" : "globe-map-static"}`} />
          <GlobePins animate={animate} />
          <div className="globe-shade globe-shade-day" />
          <div className="globe-specular globe-specular-day" />
        </div>
      </motion.div>
      <div className="globe-floor-glow" />
    </div>
  );
}

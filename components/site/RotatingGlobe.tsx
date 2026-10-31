"use client";

import { motion, useReducedMotion } from "framer-motion";
import { globeMarkers, markerPosition } from "@/lib/globe-markers";

type RotatingGlobeProps = {
  className?: string;
  size?: "hero-bg" | "hero" | "sm";
  /** Skip halo, orbit, pins, and wobble — map still rotates */
  lite?: boolean;
};

function GlobePins({ spinning, show }: { spinning: boolean; show: boolean }) {
  if (!show) return null;

  return (
    <div className={`globe-pins ${spinning ? "globe-pins-scroll" : "globe-pins-static"}`}>
      {globeMarkers.flatMap((m) => {
        const { left, top } = markerPosition(m.lat, m.lon);
        const offsets = spinning ? [0, 50] : [0];
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
  const spinning = !reduce;
  const heavyFx = !reduce && !lite;
  const dim =
    size === "hero-bg" ? "globe-hero-bg-size" : size === "hero" ? "globe-hero-size" : "globe-sm-size";

  return (
    <div className={`globe-stage ${dim} ${lite ? "globe-lite" : ""} ${className}`} aria-hidden>
      {heavyFx && <div className="globe-halo globe-halo-day" />}
      {heavyFx && <div className="globe-orbit-ring" />}
      <motion.div
        className="globe-tilt"
        animate={heavyFx ? { rotateZ: [0, 1.5, 0, -1.5, 0] } : undefined}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="globe-sphere globe-sphere-day">
          <div className={`globe-map globe-map-day ${spinning ? "" : "globe-map-static"}`} />
          <GlobePins spinning={spinning} show={heavyFx} />
          <div className="globe-shade globe-shade-day" />
          {heavyFx && <div className="globe-specular globe-specular-day" />}
        </div>
      </motion.div>
      {heavyFx && <div className="globe-floor-glow" />}
    </div>
  );
}

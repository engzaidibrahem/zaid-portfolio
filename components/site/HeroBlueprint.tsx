"use client";

import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { id: "a", x: 8, label: "Client" },
  { id: "b", x: 32, label: "API" },
  { id: "c", x: 56, label: "Data" },
  { id: "d", x: 80, label: "Deploy" },
];

export function HeroBlueprint() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mt-12 border border-border bg-graphite p-4 sm:p-6">
      <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dim">
        <span>System map</span>
        <span className="text-accent">v1</span>
      </div>
      <svg
        viewBox="0 0 100 24"
        className="h-auto w-full text-border"
        aria-hidden
      >
        <line x1="4" y1="12" x2="96" y2="12" stroke="currentColor" strokeWidth="0.35" />
        {nodes.map((node, i) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy="12"
              r="2.2"
              className="fill-accent"
              opacity={0.9}
            />
            {!reduceMotion && (
              <motion.circle
                cx={node.x}
                cy="12"
                r="4"
                className="stroke-accent"
                fill="none"
                strokeWidth="0.2"
                initial={{ opacity: 0.2, scale: 1 }}
                animate={{ opacity: [0.15, 0.45, 0.15], scale: [1, 1.35, 1] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: i * 0.35,
                }}
              />
            )}
          </g>
        ))}
      </svg>
      <div className="mt-3 grid grid-cols-4 gap-2 font-mono text-[9px] uppercase tracking-wider text-muted sm:text-[10px]">
        {nodes.map((node) => (
          <span key={node.id} className="text-center">
            {node.label}
          </span>
        ))}
      </div>
    </div>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { id: "clients", label: "Clients & Teams", sub: "Web · Mobile · Admin" },
  { id: "api", label: "API Layer", sub: "Auth · Workflows · Integrations" },
  { id: "data", label: "Data & Ledger", sub: "PostgreSQL · Business rules" },
  { id: "ship", label: "Production", sub: "Docker · VPS · CI/CD" },
];

export function SystemDiagram() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="card-surface relative overflow-hidden p-6 sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.12),transparent_55%)]" />
      <p className="section-label">System view</p>
      <p className="mt-2 font-display text-lg font-semibold text-foreground">
        How products are structured
      </p>

      <div className="relative mt-6 space-y-3">
        {nodes.map((node, i) => (
          <motion.div
            key={node.id}
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
            className="relative flex items-center gap-4 rounded-xl border border-border bg-background-elevated/80 px-4 py-3.5"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border-strong bg-accent-soft font-mono text-xs text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">{node.label}</p>
              <p className="text-xs text-muted">{node.sub}</p>
            </div>
            {!reduceMotion && (
              <motion.span
                className="ms-auto h-1.5 w-1.5 rounded-full bg-accent"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

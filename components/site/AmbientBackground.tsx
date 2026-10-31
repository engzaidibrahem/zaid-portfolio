"use client";

import { Starfield } from "@/components/site/Starfield";
import { useMobileLayout } from "@/lib/use-mobile";

export function AmbientBackground() {
  const mobile = useMobileLayout();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 atlas-bg" />
      {!mobile && (
        <>
          <Starfield count={48} animate />
          <div className="absolute inset-0 grid-motion opacity-30" />
          <div className="aurora-band aurora-band-a" />
          <div className="aurora-band aurora-band-b" />
          <div className="scan-line absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-accent-2/12 to-transparent" />
          <div className="absolute -start-32 top-1/4 h-64 w-64 rounded-full bg-accent-2/12 blur-3xl" />
          <div className="absolute -end-24 bottom-1/4 h-72 w-72 rounded-full bg-accent/12 blur-3xl" />
          <div className="absolute start-1/2 top-[18%] h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/8 blur-[100px]" />
        </>
      )}
      {mobile && (
        <>
          <Starfield count={14} animate={false} />
          <div className="absolute inset-0 grid-motion opacity-[0.15]" />
        </>
      )}
    </div>
  );
}

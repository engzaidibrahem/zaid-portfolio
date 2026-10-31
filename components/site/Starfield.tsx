"use client";

type StarfieldProps = {
  count?: number;
  animate?: boolean;
};

export function Starfield({ count = 48, animate = true }: StarfieldProps) {
  const stars = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(i * 17 + 7) % 100}%`,
    top: `${(i * 23 + 11) % 100}%`,
    size: i % 5 === 0 ? 2 : 1,
    opacity: 0.25 + (i % 7) * 0.08,
    delay: (i % 10) * 0.4,
  }));

  return (
    <div className="starfield pointer-events-none absolute inset-0" aria-hidden>
      {stars.map((s) => (
        <span
          key={s.id}
          className={animate ? "starfield-dot" : "starfield-dot-static"}
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

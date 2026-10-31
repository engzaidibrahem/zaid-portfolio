"use client";

const STARS = Array.from({ length: 48 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 7) % 100}%`,
  top: `${(i * 23 + 11) % 100}%`,
  size: i % 5 === 0 ? 2 : 1,
  opacity: 0.25 + (i % 7) * 0.08,
  delay: (i % 10) * 0.4,
}));

export function Starfield() {
  return (
    <div className="starfield pointer-events-none absolute inset-0" aria-hidden>
      {STARS.map((s) => (
        <span
          key={s.id}
          className="starfield-dot"
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

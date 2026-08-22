"use client";

export function Preview() {
  return (
    <div className="stark-backdrop-crystal flex w-full flex-col items-center justify-center gap-3 rounded-xl px-10 py-14 text-center">
      <span className="text-[11px] tracking-[0.32em] uppercase opacity-70">Introducing</span>
      <span
        className="leading-none"
        style={{
          fontFamily: "'Bitter', serif",
          fontWeight: 500,
          fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
          letterSpacing: "-0.01em",
        }}
      >
        Nudes
      </span>
      <span className="text-xs tracking-[0.18em] uppercase opacity-70">Slab Serif</span>
    </div>
  );
}

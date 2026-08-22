"use client";

export function Preview() {
  return (
    <div className="stark-backdrop-blush flex w-full flex-col items-center justify-center gap-3 rounded-xl px-10 py-14 text-center">
      <span className="text-[11px] tracking-[0.32em] uppercase opacity-70">New</span>
      <span
        className="leading-none"
        style={{
          fontFamily: "'Caveat', cursive",
          fontWeight: 700,
          fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
          letterSpacing: "0em",
        }}
      >
        Retail Therapy
      </span>
      <span className="text-xs tracking-[0.18em] uppercase opacity-70">Handwritten</span>
    </div>
  );
}

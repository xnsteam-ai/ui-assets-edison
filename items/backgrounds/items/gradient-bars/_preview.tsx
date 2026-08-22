"use client";

import type { CSSProperties } from "react";

// The published stylesheet itself, so the preview and the installed artifact are the same bytes.
import "./gradient-bars.css";

const defaults = {
  preset: "",
  barWidth: 28,
  barGap: 12,
  fadeStart: 45,
  stagger: 0.4,
  staggerPeriod: 7,
  skew: 0,
  align: "",
  surfaceColor: "#08080b",
  barFrom: "#6366f1",
  barTo: "#0ea5e9",
  barOpacity: 0.85,
  barAngle: 180,
  barSoftness: 0,
  glowColor: "#6366f1",
  glowOpacity: 0,
  glowBlur: 40,
  pulseDuration: 6,
  pulse: false,
};

export function Preview(props: Partial<typeof defaults>) {
  const v = { ...defaults, ...props };

  return (
    <div
      className="stark-bg-gradient-bars h-full min-h-[420px] w-full"
      data-preset={v.preset || undefined}
      data-align={v.align || undefined}
      style={
        {
          "--bar-width": `${v.barWidth}px`,
          "--bar-gap": `${v.barGap}px`,
          "--fade-start": `${v.fadeStart}%`,
          "--stagger": v.stagger,
          "--stagger-period": v.staggerPeriod,
          "--skew": `${v.skew}deg`,
          "--surface-color": v.surfaceColor,
          "--bar-from": v.barFrom,
          "--bar-to": v.barTo,
          "--bar-opacity": v.barOpacity,
          "--bar-angle": `${v.barAngle}deg`,
          "--bar-softness": `${v.barSoftness}px`,
          "--glow-color": v.glowColor,
          "--glow-opacity": v.glowOpacity,
          "--glow-blur": `${v.glowBlur}px`,
          "--pulse-duration": `${v.pulseDuration}s`,
          "--pulse-play": v.pulse ? "running" : "paused",
        } as CSSProperties
      }
    />
  );
}

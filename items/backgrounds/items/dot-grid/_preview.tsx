"use client";

import type { CSSProperties } from "react";

// The published stylesheet itself, so the preview and the installed artifact are the same bytes.
import "./dot-grid.css";

const defaults = {
  preset: "",
  shape: "",
  dotSize: 2,
  dotGap: 24,
  dotAngle: 0,
  surfaceColor: "#09090b",
  dotColor: "#3f3f46",
  dotOpacity: 1,
  blur: 0,
  fadeStart: 30,
  fadeEnd: 78,
  echoColor: "#6366f1",
  echoOpacity: 0,
  echoScale: 3,
  echoOffset: 50,
  drift: false,
  driftDuration: 24,
  driftDistance: 24,
};

export function Preview(props: Partial<typeof defaults>) {
  const v = { ...defaults, ...props };

  return (
    <div
      className="stark-bg-dot-grid h-full min-h-[420px] w-full"
      data-preset={v.preset || undefined}
      data-shape={v.shape || undefined}
      style={
        {
          "--dot-size": `${v.dotSize}px`,
          "--dot-gap": `${v.dotGap}px`,
          "--dot-angle": `${v.dotAngle}deg`,
          "--surface-color": v.surfaceColor,
          "--dot-color": v.dotColor,
          "--dot-opacity": v.dotOpacity,
          "--blur": `${v.blur}px`,
          "--fade-start": `${v.fadeStart}%`,
          "--fade-end": `${v.fadeEnd}%`,
          "--echo-color": v.echoColor,
          "--echo-opacity": v.echoOpacity,
          "--echo-scale": v.echoScale,
          "--echo-offset": `${v.echoOffset}%`,
          "--drift-duration": `${v.driftDuration}s`,
          "--drift-distance": `${v.driftDistance}px`,
          "--drift-play": v.drift ? "running" : "paused",
        } as CSSProperties
      }
    />
  );
}

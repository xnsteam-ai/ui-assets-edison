"use client";

import type { CSSProperties } from "react";

// The published stylesheet itself, so the preview and the installed artifact are the same bytes.
import "./conic-spectrum.css";

const defaults = {
  preset: "",
  originX: 50,
  originY: 50,
  startAngle: 0,
  arc: 360,
  surfaceColor: "#08080c",
  stop1: "#6366f1",
  stop2: "#ec4899",
  stop3: "#f59e0b",
  stop4: "#06b6d4",
  sweepOpacity: 0.9,
  saturation: 1,
  coreSize: 0,
  falloff: 72,
  iridescence: 0,
  iridescentOffset: 40,
  blur: 0,
  spinDuration: 30,
  spin: false,
};

export function Preview(props: Partial<typeof defaults>) {
  const v = { ...defaults, ...props };

  return (
    <div
      className="stark-bg-conic-spectrum h-full min-h-[420px] w-full"
      data-preset={v.preset || undefined}
      style={
        {
          "--origin-x": `${v.originX}%`,
          "--origin-y": `${v.originY}%`,
          "--start-angle": `${v.startAngle}deg`,
          "--arc": `${v.arc}deg`,
          "--surface-color": v.surfaceColor,
          "--stop-1": v.stop1,
          "--stop-2": v.stop2,
          "--stop-3": v.stop3,
          "--stop-4": v.stop4,
          "--sweep-opacity": v.sweepOpacity,
          "--saturation": v.saturation,
          "--core-size": `${v.coreSize}%`,
          "--falloff": `${v.falloff}%`,
          "--iridescence": v.iridescence,
          "--iridescent-offset": `${v.iridescentOffset}deg`,
          "--blur": `${v.blur}px`,
          "--spin-duration": `${v.spinDuration}s`,
          "--spin-play": v.spin ? "running" : "paused",
        } as CSSProperties
      }
    />
  );
}

"use client";

import type { CSSProperties } from "react";

// The published stylesheet itself, so the preview and the installed artifact are the same bytes.
import "./paper-grain.css";

const defaults = {
  preset: "",
  grainScale: 0.82,
  fibreAngle: 0,
  speckleGap: 3,
  tintAngle: 145,
  surfaceColor: "#f5f3ee",
  grainColor: "#1c1917",
  tintColor: "#d6c9b0",
  grainOpacity: 0.16,
  speckleOpacity: 0.05,
  tintOpacity: 0.35,
  contrast: 1,
  blur: 0,
  vignetteOpacity: 0.18,
  vignetteStart: 55,
};

export function Preview(props: Partial<typeof defaults>) {
  const v = { ...defaults, ...props };

  return (
    <div
      className="stark-bg-paper-grain h-full min-h-[420px] w-full"
      data-preset={v.preset || undefined}
      style={
        {
          "--grain-scale": v.grainScale,
          "--fibre-angle": `${v.fibreAngle}deg`,
          "--speckle-gap": `${v.speckleGap}px`,
          "--tint-angle": `${v.tintAngle}deg`,
          "--surface-color": v.surfaceColor,
          "--grain-color": v.grainColor,
          "--tint-color": v.tintColor,
          "--grain-opacity": v.grainOpacity,
          "--speckle-opacity": v.speckleOpacity,
          "--tint-opacity": v.tintOpacity,
          "--contrast": v.contrast,
          "--blur": `${v.blur}px`,
          "--vignette-opacity": v.vignetteOpacity,
          "--vignette-start": `${v.vignetteStart}%`,
        } as CSSProperties
      }
    />
  );
}

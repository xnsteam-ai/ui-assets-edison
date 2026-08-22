"use client";

import type { CSSProperties } from "react";

// The published stylesheet itself, so the preview and the installed artifact are the same bytes.
import "./liquid-warp.css";

const defaults = {
  preset: "",
  bandCount: 5,
  bandAngle: 115,
  warpScale: 1.35,
  surfaceColor: "#06060a",
  tint1: "#a78bfa",
  tint2: "#22d3ee",
  tint3: "#f472b6",
  sheenColor: "#ffffff",
  layerOpacity: 0.7,
  sheenOpacity: 0.14,
  saturation: 1.15,
  blur: 34,
  contrast: 1.25,
  metallic: 0,
  grainOpacity: 0.05,
  flowDuration: 22,
  flow: false,
};

export function Preview(props: Partial<typeof defaults>) {
  const v = { ...defaults, ...props };

  return (
    <div
      className="stark-bg-liquid-warp h-full min-h-[420px] w-full"
      data-preset={v.preset || undefined}
      style={
        {
          "--band-count": v.bandCount,
          "--band-angle": `${v.bandAngle}deg`,
          "--warp-scale": v.warpScale,
          "--surface-color": v.surfaceColor,
          "--tint-1": v.tint1,
          "--tint-2": v.tint2,
          "--tint-3": v.tint3,
          "--sheen-color": v.sheenColor,
          "--layer-opacity": v.layerOpacity,
          "--sheen-opacity": v.sheenOpacity,
          "--saturation": v.saturation,
          "--blur": `${v.blur}px`,
          "--contrast": v.contrast,
          "--metallic": v.metallic,
          "--grain-opacity": v.grainOpacity,
          "--flow-duration": `${v.flowDuration}s`,
          "--flow-play": v.flow ? "running" : "paused",
        } as CSSProperties
      }
    />
  );
}

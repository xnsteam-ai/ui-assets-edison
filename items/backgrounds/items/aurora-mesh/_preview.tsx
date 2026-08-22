"use client";

import type { CSSProperties } from "react";

// The published stylesheet itself, so the preview and the installed artifact are the same bytes.
import "./aurora-mesh.css";

const defaults = {
  preset: "",
  meshScale: 130,
  bloomSpread: 55,
  surfaceColor: "#07070b",
  bloom1: "#6366f1",
  bloom2: "#ec4899",
  bloom3: "#06b6d4",
  bloom4: "#f59e0b",
  bloomOpacity: 0.55,
  bloom4Opacity: 0.3,
  saturation: 1,
  blur: 60,
  grainOpacity: 0.06,
  edges: "",
  driftDuration: 28,
  drift: false,
};

export function Preview(props: Partial<typeof defaults>) {
  const v = { ...defaults, ...props };

  return (
    <div
      className="stark-bg-aurora-mesh h-full min-h-[420px] w-full"
      data-preset={v.preset || undefined}
      data-edges={v.edges || undefined}
      style={
        {
          "--mesh-scale": `${v.meshScale}%`,
          "--bloom-spread": `${v.bloomSpread}%`,
          "--surface-color": v.surfaceColor,
          "--bloom-1": v.bloom1,
          "--bloom-2": v.bloom2,
          "--bloom-3": v.bloom3,
          "--bloom-4": v.bloom4,
          "--bloom-opacity": v.bloomOpacity,
          "--bloom-4-opacity": v.bloom4Opacity,
          "--saturation": v.saturation,
          "--blur": `${v.blur}px`,
          "--grain-opacity": v.grainOpacity,
          "--drift-duration": `${v.driftDuration}s`,
          "--drift-play": v.drift ? "running" : "paused",
        } as CSSProperties
      }
    />
  );
}

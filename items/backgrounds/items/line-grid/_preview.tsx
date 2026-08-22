"use client";

import type { CSSProperties } from "react";

// The published stylesheet itself, so the preview and the installed artifact are the same bytes.
import "./line-grid.css";

const defaults = {
  preset: "",
  cellWidth: 48,
  cellHeight: 48,
  lineWidth: 1,
  majorEvery: 4,
  majorWidth: 1,
  skew: 0,
  surfaceColor: "#09090b",
  lineColor: "#27272a",
  majorColor: "#3f3f46",
  lineOpacity: 1,
  majorOpacity: 1,
  blur: 0,
  fadeStart: 40,
  fadeEnd: 90,
  hoverColor: "#6366f1",
  hoverOpacity: 0,
};

export function Preview(props: Partial<typeof defaults>) {
  const v = { ...defaults, ...props };

  return (
    <div
      className="stark-bg-line-grid h-full min-h-[420px] w-full"
      data-preset={v.preset || undefined}
      style={
        {
          "--cell-width": `${v.cellWidth}px`,
          "--cell-height": `${v.cellHeight}px`,
          "--line-width": `${v.lineWidth}px`,
          "--major-every": v.majorEvery,
          "--major-width": `${v.majorWidth}px`,
          "--skew": `${v.skew}deg`,
          "--surface-color": v.surfaceColor,
          "--line-color": v.lineColor,
          "--major-color": v.majorColor,
          "--line-opacity": v.lineOpacity,
          "--major-opacity": v.majorOpacity,
          "--blur": `${v.blur}px`,
          "--fade-start": `${v.fadeStart}%`,
          "--fade-end": `${v.fadeEnd}%`,
          "--hover-color": v.hoverColor,
          "--hover-opacity": v.hoverOpacity,
        } as CSSProperties
      }
    />
  );
}

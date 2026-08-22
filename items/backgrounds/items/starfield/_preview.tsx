"use client";

import type { CSSProperties } from "react";

// The published stylesheet itself, so the preview and the installed artifact are the same bytes.
import "./starfield.css";

const defaults = {
  preset: "",
  starGap: 190,
  midGap: 140,
  farGap: 95,
  starSize: 1.4,
  midSize: 1,
  farSize: 0.7,
  tilt: 0,
  surfaceColor: "#04040a",
  starColor: "#ffffff",
  midColor: "#cbd5e1",
  farColor: "#94a3b8",
  starOpacity: 0.9,
  midOpacity: 0.55,
  farOpacity: 0.35,
  nebulaColor: "#4c1d95",
  nebulaOpacity: 0,
  nebulaBlur: 70,
  vignette: 0.5,
  parallaxDuration: 90,
  parallaxDistance: 200,
  parallax: false,
};

export function Preview(props: Partial<typeof defaults>) {
  const v = { ...defaults, ...props };

  return (
    <div
      className="stark-bg-starfield h-full min-h-[420px] w-full"
      data-preset={v.preset || undefined}
      style={
        {
          "--star-gap": `${v.starGap}px`,
          "--mid-gap": `${v.midGap}px`,
          "--far-gap": `${v.farGap}px`,
          "--star-size": `${v.starSize}px`,
          "--mid-size": `${v.midSize}px`,
          "--far-size": `${v.farSize}px`,
          "--tilt": `${v.tilt}deg`,
          "--surface-color": v.surfaceColor,
          "--star-color": v.starColor,
          "--mid-color": v.midColor,
          "--far-color": v.farColor,
          "--star-opacity": v.starOpacity,
          "--mid-opacity": v.midOpacity,
          "--far-opacity": v.farOpacity,
          "--nebula-color": v.nebulaColor,
          "--nebula-opacity": v.nebulaOpacity,
          "--nebula-blur": `${v.nebulaBlur}px`,
          "--vignette": v.vignette,
          "--parallax-duration": `${v.parallaxDuration}s`,
          "--parallax-distance": `${v.parallaxDistance}px`,
          "--parallax-play": v.parallax ? "running" : "paused",
        } as CSSProperties
      }
    />
  );
}

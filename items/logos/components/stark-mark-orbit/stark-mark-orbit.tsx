import type * as React from "react";

import { cn } from "@/lib/utils";

function StarkMarkOrbit({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Stark Orbit"
      className={cn("size-16", className)}
      {...props}
    >
      <defs>
        <linearGradient id="stark-mark-orbit-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF7AA8" />
          <stop offset="100%" stopColor="#D6246E" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#stark-mark-orbit-grad)" />
      <circle cx="32" cy="32" r="7" fill="#fff" />
      <ellipse
        cx="32"
        cy="32"
        rx="19"
        ry="9"
        fill="none"
        stroke="#fff"
        stroke-width="3"
        opacity=".85"
        transform="rotate(-28 32 32)"
      />
    </svg>
  );
}

export { StarkMarkOrbit };

import type * as React from "react";

import { cn } from "@/lib/utils";

function StarkMarkAperture({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Stark Aperture"
      className={cn("size-16", className)}
      {...props}
    >
      <defs>
        <linearGradient id="stark-mark-aperture-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#stark-mark-aperture-grad)" />
      <circle cx="32" cy="32" r="17" fill="none" stroke="#fff" stroke-width="3.4" />
      <path
        d="M32 15v17l14 9"
        fill="none"
        stroke="#fff"
        stroke-width="3.4"
        stroke-linecap="round"
      />
    </svg>
  );
}

export { StarkMarkAperture };

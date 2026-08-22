import type * as React from "react";

import { cn } from "@/lib/utils";

function StarkMarkWave({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Stark Wave"
      className={cn("size-16", className)}
      {...props}
    >
      <defs>
        <linearGradient id="stark-mark-wave-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5AA9FF" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#stark-mark-wave-grad)" />
      <g fill="#fff">
        <rect x="16" y="30" width="6" height="12" rx="3" />
        <rect x="26" y="20" width="6" height="22" rx="3" />
        <rect x="36" y="25" width="6" height="17" rx="3" />
        <rect x="46" y="34" width="6" height="8" rx="3" />
      </g>
    </svg>
  );
}

export { StarkMarkWave };

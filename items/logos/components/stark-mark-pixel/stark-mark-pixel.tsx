import type * as React from "react";

import { cn } from "@/lib/utils";

function StarkMarkPixel({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Stark Pixel"
      className={cn("size-16", className)}
      {...props}
    >
      <defs>
        <linearGradient id="stark-mark-pixel-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0ABFC" />
          <stop offset="100%" stopColor="#86198F" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#stark-mark-pixel-grad)" />
      <rect x="18" y="18" width="9" height="9" fill="#fff" />
      <rect x="37" y="18" width="9" height="9" fill="#fff" />
      <rect x="27.5" y="27.5" width="9" height="9" fill="#fff" />
      <rect x="18" y="37" width="9" height="9" fill="#fff" />
      <rect x="37" y="37" width="9" height="9" fill="#fff" />
    </svg>
  );
}

export { StarkMarkPixel };

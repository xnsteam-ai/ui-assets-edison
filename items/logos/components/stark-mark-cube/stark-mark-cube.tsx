import type * as React from "react";

import { cn } from "@/lib/utils";

function StarkMarkCube({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Stark Cube"
      className={cn("size-16", className)}
      {...props}
    >
      <defs>
        <linearGradient id="stark-mark-cube-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2FD3C6" />
          <stop offset="100%" stopColor="#0B8F9B" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#stark-mark-cube-grad)" />
      <path d="M32 14l16 9v18l-16 9-16-9V23z" fill="#fff" opacity=".92" />
      <path
        d="M32 14v36M16 23l16 9 16-9"
        stroke="#0B8F9B"
        stroke-width="2.6"
        fill="none"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { StarkMarkCube };

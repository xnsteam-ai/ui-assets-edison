import type * as React from "react";

import { cn } from "@/lib/utils";

function StarkMarkPrism({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Stark Prism"
      className={cn("size-16", className)}
      {...props}
    >
      <defs>
        <linearGradient id="stark-mark-prism-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#stark-mark-prism-grad)" />
      <path d="M32 14l18 32H14z" fill="#fff" />
      <path d="M32 14v32" stroke="#6D28D9" stroke-width="2.6" />
    </svg>
  );
}

export { StarkMarkPrism };

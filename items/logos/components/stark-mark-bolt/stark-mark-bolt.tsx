import type * as React from "react";

import { cn } from "@/lib/utils";

function StarkMarkBolt({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Stark Bolt"
      className={cn("size-16", className)}
      {...props}
    >
      <defs>
        <linearGradient id="stark-mark-bolt-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFC24B" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#stark-mark-bolt-grad)" />
      <path d="M36 10L20 36h10l-2 18 16-26H34z" fill="#fff" />
    </svg>
  );
}

export { StarkMarkBolt };

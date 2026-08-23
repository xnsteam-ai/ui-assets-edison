import type * as React from "react";

import { cn } from "@/lib/utils";

function StarkMarkBraces({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Stark Braces"
      className={cn("size-16", className)}
      {...props}
    >
      <defs>
        <linearGradient id="stark-mark-braces-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#3730A3" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#stark-mark-braces-grad)" />
      <path d="M27 17c-5 0-4 7-4 10s-4 5-4 5 4 2 4 5 -1 10 4 10" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M37 17c5 0 4 7 4 10s4 5 4 5-4 2-4 5 1 10-4 10" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export { StarkMarkBraces };

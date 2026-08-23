import type * as React from "react";

import { cn } from "@/lib/utils";

function StarkMarkCircuit({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Stark Circuit"
      className={cn("size-16", className)}
      {...props}
    >
      <defs>
        <linearGradient id="stark-mark-circuit-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2DD4BF" />
          <stop offset="100%" stopColor="#134E4A" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#stark-mark-circuit-grad)" />
      <rect x="24" y="24" width="16" height="16" rx="3" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 14v10M32 40v10M14 32h10M40 32h10" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="14" r="2.6" fill="#fff" />
      <circle cx="32" cy="50" r="2.6" fill="#fff" />
      <circle cx="14" cy="32" r="2.6" fill="#fff" />
      <circle cx="50" cy="32" r="2.6" fill="#fff" />
    </svg>
  );
}

export { StarkMarkCircuit };

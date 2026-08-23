import type * as React from "react";

import { cn } from "@/lib/utils";

function StarkMarkFloppy({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Stark Floppy"
      className={cn("size-16", className)}
      {...props}
    >
      <defs>
        <linearGradient id="stark-mark-floppy-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#64748B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#stark-mark-floppy-grad)" />
      <path d="M17 17h24l6 6v24H17z" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 17v11h14V17" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="24" y="35" width="16" height="12" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export { StarkMarkFloppy };

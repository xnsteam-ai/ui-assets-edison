import type * as React from "react";

import { cn } from "@/lib/utils";

function StarkMarkStack({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Stark Stack"
      className={cn("size-16", className)}
      {...props}
    >
      <defs>
        <linearGradient id="stark-mark-stack-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#stark-mark-stack-grad)" />
      <path d="M32 16l16 8-16 8-16-8z" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 32l16 8 16-8" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 40l16 8 16-8" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export { StarkMarkStack };

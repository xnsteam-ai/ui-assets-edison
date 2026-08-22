import type * as React from "react";

import { cn } from "@/lib/utils";

function IllustrationOffline({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 120 96"
      role="img"
      aria-label="Offline illustration"
      className={cn("h-auto w-48", className)}
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M28 42a44 44 0 0 1 64 0" />
        <path d="M40 55a28 28 0 0 1 40 0" />
        <path d="M52 67a12 12 0 0 1 16 0" />
      </g>
      <circle cx="60" cy="80" r="4.5" fill="#34D399" />
      <path
        d="M28 18 92 84"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { IllustrationOffline };

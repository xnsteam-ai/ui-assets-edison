import type * as React from "react";

import { cn } from "@/lib/utils";

function IllustrationErrorCloud({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 120 96"
      role="img"
      aria-label="Error Cloud illustration"
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
        <path d="M40 62h42a12 12 0 0 0 1-24 18 18 0 0 0-34-6 13 13 0 0 0-9 30z" />
      </g>
      <path d="M62 56 52 78h8l-3 12 14-20h-9z" fill="#34D399" />
    </svg>
  );
}

export { IllustrationErrorCloud };

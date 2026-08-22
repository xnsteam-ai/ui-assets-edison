import type * as React from "react";

import { cn } from "@/lib/utils";

function IllustrationEmptyBox({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 120 96"
      role="img"
      aria-label="Empty Box illustration"
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
        <path d="M30 50h60v32H30z" />
        <path d="M30 50 20 36h80L90 50" />
        <path d="M60 50v32" />
      </g>
      <circle cx="42" cy="24" r="5" fill="#34D399" />
      <path d="M78 16l5 10H73z" fill="#34D399" />
      <path
        d="M60 12v9"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { IllustrationEmptyBox };

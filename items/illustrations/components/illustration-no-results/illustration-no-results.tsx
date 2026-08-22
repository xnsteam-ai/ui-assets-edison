import type * as React from "react";

import { cn } from "@/lib/utils";

function IllustrationNoResults({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 120 96"
      role="img"
      aria-label="No Results illustration"
      className={cn("h-auto w-48", className)}
      {...props}
    >
      <circle cx="52" cy="44" r="11" fill="#34D399" />
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="52" cy="44" r="22" />
        <path d="M68 60 88 80" />
        <path d="M30 15l4 7M76 14l-4 7M20 40h-8M92 44h8" />
      </g>
    </svg>
  );
}

export { IllustrationNoResults };

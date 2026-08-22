import type * as React from "react";

import { cn } from "@/lib/utils";

function IllustrationAllDone({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 120 96"
      role="img"
      aria-label="All Done illustration"
      className={cn("h-auto w-48", className)}
      {...props}
    >
      <circle cx="60" cy="46" r="24" fill="#34D399" />
      <path
        d="M49 46l8 8 16-17"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 18l4 8M96 20l-5 8M16 60l8 2M104 58l-8 3" />
      </g>
    </svg>
  );
}

export { IllustrationAllDone };

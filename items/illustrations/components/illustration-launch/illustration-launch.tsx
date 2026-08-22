import type * as React from "react";

import { cn } from "@/lib/utils";

function IllustrationLaunch({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 120 96"
      role="img"
      aria-label="Launch illustration"
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
        <path d="M60 12c9 10 13 22 13 32v18H47V44c0-10 4-22 13-32z" />
        <path d="M47 54 36 68h11M73 54l11 14H73" />
      </g>
      <circle cx="60" cy="40" r="7" fill="#34D399" />
      <path d="M54 62c3 9 6 15 6 20 0-5 3-11 6-20z" fill="#34D399" />
    </svg>
  );
}

export { IllustrationLaunch };

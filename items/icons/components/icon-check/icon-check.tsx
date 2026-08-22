import type * as React from "react";

import { cn } from "@/lib/utils";

function IconCheck({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Check icon"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}

export { IconCheck };

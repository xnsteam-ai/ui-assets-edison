import type * as React from "react";

import { cn } from "@/lib/utils";

function IconLink({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Link icon"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M9 15l6-6" />
      <path d="M10.5 6.5 12 5a4.5 4.5 0 0 1 6.5 6.5L17 13" />
      <path d="M13.5 17.5 12 19a4.5 4.5 0 0 1-6.5-6.5L7 11" />
    </svg>
  );
}

export { IconLink };

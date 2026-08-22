import type * as React from "react";

import { cn } from "@/lib/utils";

function IconBell({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Bell icon"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M18 16v-5a6 6 0 0 0-12 0v5l-2 3h16z" />
      <path d="M10 22h4" />
    </svg>
  );
}

export { IconBell };

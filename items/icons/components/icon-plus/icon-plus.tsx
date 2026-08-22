import type * as React from "react";

import { cn } from "@/lib/utils";

function IconPlus({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Plus icon"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export { IconPlus };

import type * as React from "react";

import { cn } from "@/lib/utils";

function IconHeart({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Heart icon"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M12 20s-7-4.6-7-9.5A4.5 4.5 0 0 1 12 8a4.5 4.5 0 0 1 7 2.5C19 15.4 12 20 12 20z" />
    </svg>
  );
}

export { IconHeart };

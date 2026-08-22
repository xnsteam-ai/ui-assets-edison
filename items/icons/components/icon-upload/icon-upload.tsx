import type * as React from "react";

import { cn } from "@/lib/utils";

function IconUpload({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Upload icon"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M12 20V9" />
      <path d="M7 13l5-5 5 5" />
      <path d="M4 4h16" />
    </svg>
  );
}

export { IconUpload };

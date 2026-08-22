import type * as React from "react";

import { cn } from "@/lib/utils";

function IconMail({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Mail icon"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-6", className)}
      {...props}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7.5l9 6 9-6" />
    </svg>
  );
}

export { IconMail };

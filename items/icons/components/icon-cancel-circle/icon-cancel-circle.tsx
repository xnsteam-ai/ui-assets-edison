/**
 * Cancel Circle icon.
 *
 * Artwork from @hugeicons/core-free-icons — MIT licensed.
 * https://hugeicons.com
 *
 * Inlined, so this component installs with no runtime dependency. To use the full ~7,000-icon
 * library instead, install `@stark-icons/hugeicons`.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function IconCancelCircle({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Cancel Circle icon"
      fill="none"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M14.9994 15L9 9M9.00064 15L15 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export { IconCancelCircle };

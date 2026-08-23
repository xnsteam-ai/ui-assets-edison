/**
 * Pause Circle icon.
 *
 * Artwork from @hugeicons/core-free-icons — MIT licensed.
 * https://hugeicons.com
 *
 * Inlined, so this component installs with no runtime dependency. To use the full ~7,000-icon
 * library instead, install `@stark-icons/hugeicons`.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function IconPauseCircle({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Pause Circle icon"
      fill="none"
      className={cn("size-6", className)}
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9.5 9L9.5 15M14.5 9V15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export { IconPauseCircle };

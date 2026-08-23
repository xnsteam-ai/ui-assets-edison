/**
 * Loading 03 icon.
 *
 * Artwork from @hugeicons/core-free-icons — MIT licensed.
 * https://hugeicons.com
 *
 * Inlined, so this component installs with no runtime dependency. To use the full ~7,000-icon
 * library instead, install `@stark-icons/hugeicons`.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function IconLoading03({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Loading 03 icon"
      fill="none"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M12 3V6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M12 18V21" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M21 12L18 12" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M6 12L3 12" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M18.3635 5.63672L16.2422 7.75804" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M7.75804 16.2422L5.63672 18.3635" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M18.3635 18.3635L16.2422 16.2422" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M7.75804 7.75804L5.63672 5.63672" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

export { IconLoading03 };

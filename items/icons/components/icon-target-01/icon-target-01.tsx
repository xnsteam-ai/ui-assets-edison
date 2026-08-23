/**
 * Target 01 icon.
 *
 * Artwork from @hugeicons/core-free-icons — MIT licensed.
 * https://hugeicons.com
 *
 * Inlined, so this component installs with no runtime dependency. To use the full ~7,000-icon
 * library instead, install `@stark-icons/hugeicons`.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function IconTarget01({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Target 01 icon"
      fill="none"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M15.1312 2.5C14.1462 2.17555 13.0936 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.9548 21.8396 9.94704 21.5422 9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M19.5 4.5L12 12M19.5 4.5V2M19.5 4.5H22" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

export { IconTarget01 };

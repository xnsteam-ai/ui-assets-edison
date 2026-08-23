/**
 * Coins 01 icon.
 *
 * Artwork from @hugeicons/core-free-icons — MIT licensed.
 * https://hugeicons.com
 *
 * Inlined, so this component installs with no runtime dependency. To use the full ~7,000-icon
 * library instead, install `@stark-icons/hugeicons`.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function IconCoins01({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Coins 01 icon"
      fill="none"
      className={cn("size-6", className)}
      {...props}
    >
      <ellipse cx="15.5" cy="11" rx="6.5" ry="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M22 15.5C22 16.6046 19.0899 17.5 15.5 17.5C11.9101 17.5 9 16.6046 9 15.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M22 11V19.8C22 21.015 19.0899 22 15.5 22C11.9101 22 9 21.015 9 19.8V11" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="8.5" cy="4" rx="6.5" ry="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 11C4.10819 10.7698 2.36991 10.1745 2 9M6 16C4.10819 15.7698 2.36991 15.1745 2 14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M6 21C4.10819 20.7698 2.36991 20.1745 2 19L2 4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M15 6V4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

export { IconCoins01 };

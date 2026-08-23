/**
 * Archive icon.
 *
 * Artwork from @hugeicons/core-free-icons — MIT licensed.
 * https://hugeicons.com
 *
 * Inlined, so this component installs with no runtime dependency. To use the full ~7,000-icon
 * library instead, install `@stark-icons/hugeicons`.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function IconArchive({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Archive icon"
      fill="none"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M13 2H11C7.22876 2 5.34315 2 4.17157 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V10C21 6.22876 21 4.34315 19.8284 3.17157C18.6569 2 16.7712 2 13 2Z" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M21 12H3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M15 7H9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M15 17H9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

export { IconArchive };

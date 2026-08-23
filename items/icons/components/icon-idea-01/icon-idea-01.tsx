/**
 * Idea 01 icon.
 *
 * Artwork from @hugeicons/core-free-icons — MIT licensed.
 * https://hugeicons.com
 *
 * Inlined, so this component installs with no runtime dependency. To use the full ~7,000-icon
 * library instead, install `@stark-icons/hugeicons`.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function IconIdea01({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Idea 01 icon"
      fill="none"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M8 16.4998C6.7725 15.4011 6 13.7768 6 11.9998C6 8.68605 8.68629 5.99976 12 5.99976C15.3137 5.99976 18 8.68605 18 11.9998C18 13.7768 17.2275 15.4011 16 16.4998" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M12 11.9998V16.4998" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M9.5 18.9998H14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M10.5 21.4998H13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M3.5 11.9998H2.5M5.98438 5.97632L5.23438 5.23022M18.0195 5.97632L18.7695 5.23022M21.5 11.9998H20.5M12 2.49976V3.49976" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export { IconIdea01 };

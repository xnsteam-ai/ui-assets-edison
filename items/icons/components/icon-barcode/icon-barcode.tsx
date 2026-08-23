/**
 * Barcode icon.
 *
 * Artwork from @hugeicons/core-free-icons — MIT licensed.
 * https://hugeicons.com
 *
 * Inlined, so this component installs with no runtime dependency. To use the full ~7,000-icon
 * library instead, install `@stark-icons/hugeicons`.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function IconBarcode({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Barcode icon"
      fill="none"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M16.5 5V15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M21 5V19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M12 5V19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M3 5V19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M7.5 5V15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M16.625 18.75H16.5M16.75 18.75C16.75 18.8881 16.6381 19 16.5 19C16.3619 19 16.25 18.8881 16.25 18.75C16.25 18.6119 16.3619 18.5 16.5 18.5C16.6381 18.5 16.75 18.6119 16.75 18.75Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M7.625 18.75H7.5M7.75 18.75C7.75 18.8881 7.63807 19 7.5 19C7.36193 19 7.25 18.8881 7.25 18.75C7.25 18.6119 7.36193 18.5 7.5 18.5C7.63807 18.5 7.75 18.6119 7.75 18.75Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export { IconBarcode };

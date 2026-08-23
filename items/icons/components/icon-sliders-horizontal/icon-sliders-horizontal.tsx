/**
 * Sliders Horizontal icon.
 *
 * Artwork from @hugeicons/core-free-icons — MIT licensed.
 * https://hugeicons.com
 *
 * Inlined, so this component installs with no runtime dependency. To use the full ~7,000-icon
 * library instead, install `@stark-icons/hugeicons`.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function IconSlidersHorizontal({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Sliders Horizontal icon"
      fill="none"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M3.99963 5.00055L9.99963 5.00031" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M12.9996 5.00031L19.9996 5.00031" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M15.9996 9.00031L15.9996 15.0003" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M9.99963 2.00031L9.99963 8.00031" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M11.9996 16.0003L11.9996 22.0003" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M15.9996 12.0001L19.9996 12.0003" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M3.99963 12.0005L12.9996 12.0003" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M11.9996 19.0003L19.9996 19.0003" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M3.99963 19.0005L8.99963 19.0003" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

export { IconSlidersHorizontal };

/**
 * Source Code icon.
 *
 * Artwork from @hugeicons/core-free-icons — MIT licensed.
 * https://hugeicons.com
 *
 * Inlined, so this component installs with no runtime dependency. To use the full ~7,000-icon
 * library instead, install `@stark-icons/hugeicons`.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function IconSourceCode({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Source Code icon"
      fill="none"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M17 8L18.8398 9.85008C19.6133 10.6279 20 11.0168 20 11.5C20 11.9832 19.6133 12.3721 18.8398 13.1499L17 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M7 8L5.16019 9.85008C4.38673 10.6279 4 11.0168 4 11.5C4 11.9832 4.38673 12.3721 5.16019 13.1499L7 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M14.5 4L9.5 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export { IconSourceCode };

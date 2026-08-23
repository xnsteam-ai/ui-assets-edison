/**
 * inception logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The inception name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoInception({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="inception"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M14.767 1H7.884L1 7.883v6.884h6.884V7.883h6.883V1zM9.234 23h6.882L23 16.116V9.233h-6.884v6.883H9.234V23z">
      </path>
    </svg>
  );
}

export { AiLogoInception };

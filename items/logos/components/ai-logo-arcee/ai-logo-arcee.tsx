/**
 * arcee logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The arcee name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoArcee({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="arcee"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M13.236 2.377L2.751 20.493H0L11.863 0l1.373 2.377zm3.554 6.156l-9.606 11.96H4.13L15.511 6.32l1.279 2.212zm6.908 11.96H14.05l8.406-2.151 1.242 2.15zm-3.42-5.922l-7.843 5.92H8.482l10.597-7.997 1.2 2.077z" fill="#008C8C">
      </path>
    </svg>
  );
}

export { AiLogoArcee };

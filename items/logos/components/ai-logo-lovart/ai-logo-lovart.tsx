/**
 * lovart logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The lovart name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoLovart({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="lovart"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M11.86-.14c6.622 0 12 5.377 12 12 0 6.622-5.378 12-12 12-6.623 0-12-5.378-12-12 0-6.623 5.377-12 12-12zM7.831 18.006l4.892.034.01-1.523-3.375-.025.018-6.023-1.523-.004-.022 7.54zm7.533-12.229a3.794 3.794 0 000 7.585 3.794 3.794 0 000-7.585zM2.533 10.446l.002 1.524 3.508-.004-.002-1.524-3.508.004zm12.832-3.221a2.349 2.349 0 012.346 2.346 2.348 2.348 0 01-2.346 2.346 2.349 2.349 0 01-2.346-2.346 2.35 2.35 0 012.346-2.346z">
      </path>
    </svg>
  );
}

export { AiLogoLovart };

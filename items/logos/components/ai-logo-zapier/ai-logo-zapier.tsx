/**
 * zapier logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The zapier name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoZapier({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="zapier"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M18.5 16h-13v3h13v-3z" fill="#FF4F00">
      </path>
    </svg>
  );
}

export { AiLogoZapier };

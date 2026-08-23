/**
 * dreammachine logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The dreammachine name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoDreammachine({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="dreammachine"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M12.393 24L2 17.998l10.393-6 10.392 6-10.393 6z" fillOpacity=".66">
      </path>
      <path d="M2 5.999L12.393 0v24L2 18V5.999z" fillOpacity=".66">
      </path>
    </svg>
  );
}

export { AiLogoDreammachine };

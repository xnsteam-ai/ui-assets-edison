/**
 * dalle logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The dalle name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoDalle({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="dalle"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M0 10h4.8v5H0z" fill="#FFFF67">
      </path>
      <path d="M4.8 10h4.8v5H4.8z" fill="#43FFFF">
      </path>
      <path d="M9.6 10h4.8v5H9.6z" fill="#51DA4B">
      </path>
      <path d="M14.4 10h4.8v5h-4.8z" fill="#FF6E3D">
      </path>
      <path d="M19.2 10H24v5h-4.8z" fill="#3C46FF">
      </path>
    </svg>
  );
}

export { AiLogoDalle };

/**
 * Vercel logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The Vercel name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoVercel({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Vercel"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M12 0l12 20.785H0L12 0z">
      </path>
    </svg>
  );
}

export { AiLogoVercel };

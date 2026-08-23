/**
 * Straico logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The Straico name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoStraico({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Straico"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M22 6h-5.278l3.166-6h-8.443L3 16h6.333v8L22 6z" fill="#464BBA">
      </path>
    </svg>
  );
}

export { AiLogoStraico };

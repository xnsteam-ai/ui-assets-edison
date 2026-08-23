/**
 * suno logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The suno name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoSuno({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="suno"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M16.5 0C20.642 0 24 5.373 24 12h-9c0 6.627-3.358 12-7.5 12C3.358 24 0 18.627 0 12h9c0-6.627 3.358-12 7.5-12z">
      </path>
    </svg>
  );
}

export { AiLogoSuno };

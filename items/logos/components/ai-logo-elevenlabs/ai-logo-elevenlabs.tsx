/**
 * elevenlabs logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The elevenlabs name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoElevenlabs({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="elevenlabs"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M5 0h5v24H5V0zM14 0h5v24h-5V0z">
      </path>
    </svg>
  );
}

export { AiLogoElevenlabs };

/**
 * Infinigence logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The Infinigence name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoInfinigence({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Infinigence"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M14.186 19.885V4.226H5v4.137h4.226v11.522H5V24h13.412v-4.115h-4.226z" fill="#7F1084">
      </path>
      <path d="M18.412 0h-4.226v4.226h4.226V0z" fill="#2EA7E0">
      </path>
    </svg>
  );
}

export { AiLogoInfinigence };

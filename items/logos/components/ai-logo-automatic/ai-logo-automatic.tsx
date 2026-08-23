/**
 * automatic logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The automatic name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoAutomatic({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="automatic"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M8.462 3.5h2.924l8.33 17h-1.46L10.617 4.942l-1.442.001z" opacity=".8">
      </path>
      <path d="M5.474 20.5l2.817-5.366 2.873 5.366h5.541l-8.362-17L0 20.5z">
      </path>
      <path d="M12.768 3.501L21.113 20.5h1.46L14.238 3.504z" opacity=".4">
      </path>
      <path d="M14.195 3.501L22.54 20.5H24L15.666 3.504z" opacity=".2">
      </path>
      <path d="M11.34 3.501L19.683 20.5h1.464L12.81 3.504z" opacity=".6">
      </path>
    </svg>
  );
}

export { AiLogoAutomatic };

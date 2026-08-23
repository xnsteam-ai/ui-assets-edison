/**
 * zeabur logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The zeabur name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoZeabur({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="zeabur"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M9.325 15.022h14.672V22H0v-6.978h6.746l9.29-5.044H0V3h23.997v6.978z">
      </path>
      <path d="M.001 3h15.954v6.978H.001z" fill="#6300FF">
      </path>
      <path d="M9.4 15.022H24V22H9.4z" fill="#F40">
      </path>
    </svg>
  );
}

export { AiLogoZeabur };

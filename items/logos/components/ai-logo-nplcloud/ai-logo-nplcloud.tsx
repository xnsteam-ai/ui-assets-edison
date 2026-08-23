/**
 * NPLCloud logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The NPLCloud name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoNplcloud({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="NPLCloud"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M10.033 5.807L0 18.193h10.792l4.636-5.724-5.395-6.662zm.651 5.421l-.651 2.553-.652-2.553-2.538.926 3.19-3.938 3.19 3.938-2.539-.926zM18.107 10.918l-5.893 7.275H24l-5.893-7.275zm0 4.683l-.383-1.499-1.49.544 1.873-2.313 1.873 2.313-1.49-.544-.383 1.5z" fill="#00D1B2">
      </path>
    </svg>
  );
}

export { AiLogoNplcloud };

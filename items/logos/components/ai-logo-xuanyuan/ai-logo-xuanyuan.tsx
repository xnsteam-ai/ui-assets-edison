/**
 * xuanyuan logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The xuanyuan name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoXuanyuan({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="xuanyuan"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M0 6.306C0 5.48.893 4.96 1.612 5.37l6.607 3.76c.337.192.545.55.545.938v9.35c0 .596-.483 1.079-1.079 1.079H1.08A1.079 1.079 0 010 19.417V6.307z" fill="#3C96E6">
      </path>
      <path d="M9.708 10.063c0-.385.206-.742.54-.934l12.135-6.984A1.079 1.079 0 0124 3.08v16.337c0 .596-.483 1.079-1.079 1.079H10.787a1.079 1.079 0 01-1.08-1.079v-9.354z" fill="#F95A4C">
      </path>
    </svg>
  );
}

export { AiLogoXuanyuan };

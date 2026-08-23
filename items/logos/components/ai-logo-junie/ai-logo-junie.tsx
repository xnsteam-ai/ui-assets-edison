/**
 * junie logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The junie name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoJunie({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="junie"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M24 9.333C24 18.666 20 24 9.333 24H8v-8h1.333C14 16 16 14 16 9.333V8h8v1.333zM8 16H0V8h8v8zM16 8H8V0h8v8z" fill="#47E054">
      </path>
    </svg>
  );
}

export { AiLogoJunie };

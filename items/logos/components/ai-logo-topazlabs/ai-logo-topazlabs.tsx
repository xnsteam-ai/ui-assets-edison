/**
 * topazlabs logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The topazlabs name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoTopazlabs({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="topazlabs"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M2 15.357V22h6.65v-6.643H2zM15.32 15.357V8.714H8.67v6.643h6.65zM22 8.643V2h-6.65v6.643H22z">
      </path>
    </svg>
  );
}

export { AiLogoTopazlabs };

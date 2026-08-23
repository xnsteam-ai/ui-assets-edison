/**
 * Nebius logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The Nebius name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoNebius({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Nebius"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M20 2.306v16.797s4-.242 4-4.815V2.306h-4zM4 22.001V5.204s-4 .242-4 4.816V22h4z">
      </path>
      <path d="M16.318 16.51L11.286 4.94c-.824-1.872-2.168-2.926-4.077-2.926-1.908 0-3.211 1.54-3.211 3.19 0 0 2.405-.333 3.68 2.593l5.036 11.57c.821 1.87 2.168 2.926 4.075 2.926 1.905 0 3.211-1.541 3.211-3.19 0 0-2.406.333-3.682-2.594z">
      </path>
    </svg>
  );
}

export { AiLogoNebius };

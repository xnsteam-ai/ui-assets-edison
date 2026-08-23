/**
 * opencode logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The opencode name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoOpencode({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="opencode"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M16 6H8v12h8V6zm4 16H4V2h16v20z">
      </path>
    </svg>
  );
}

export { AiLogoOpencode };

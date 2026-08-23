/**
 * figma logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The figma name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoFigma({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="figma"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M4 20a4 4 0 014-4h4v4a4 4 0 01-8 0z" fill="#24CB71">
      </path>
      <path d="M12 0v8h4a4 4 0 000-8h-4z" fill="#FF7237">
      </path>
      <path d="M15.967 16a4 4 0 100-8 4 4 0 000 8z" fill="#00B6FF">
      </path>
      <path d="M4 4a4 4 0 004 4h4V0H8a4 4 0 00-4 4z" fill="#FF3737">
      </path>
      <path d="M4 12a4 4 0 004 4h4V8H8a4 4 0 00-4 4z" fill="#874FFF">
      </path>
    </svg>
  );
}

export { AiLogoFigma };

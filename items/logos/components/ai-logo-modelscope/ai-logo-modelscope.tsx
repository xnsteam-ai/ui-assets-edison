/**
 * Model Scope logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The Model Scope name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoModelscope({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Model Scope"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M0 7.967h2.667v2.667H0zM8 10.633h2.667V13.3H8z" fill="#36CED0">
      </path>
      <path d="M0 10.633h2.667V13.3H0zM2.667 13.3h2.666v2.667H8v2.666H2.667V13.3zM2.667 5.3H8v2.667H5.333v2.666H2.667V5.3zM10.667 13.3h2.667v2.667h-2.667z" fill="#624AFF">
      </path>
      <path d="M24 7.967h-2.667v2.667H24zM16 10.633h-2.667V13.3H16z" fill="#36CED0">
      </path>
      <path d="M24 10.633h-2.667V13.3H24zM21.333 13.3h-2.666v2.667H16v2.666h5.333V13.3zM21.333 5.3H16v2.667h2.667v2.666h2.666V5.3z" fill="#624AFF">
      </path>
    </svg>
  );
}

export { AiLogoModelscope };

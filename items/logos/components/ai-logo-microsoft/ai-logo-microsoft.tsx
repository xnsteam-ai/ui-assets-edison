/**
 * Microsoft logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The Microsoft name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoMicrosoft({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Microsoft"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M11.49 2H2v9.492h9.492V2h-.002z" fill="#F25022">
      </path>
      <path d="M22 2h-9.492v9.492H22V2z" fill="#7FBA00">
      </path>
      <path d="M11.49 12.508H2V22h9.492v-9.492h-.002z" fill="#00A4EF">
      </path>
      <path d="M22 12.508h-9.492V22H22v-9.492z" fill="#FFB900">
      </path>
    </svg>
  );
}

export { AiLogoMicrosoft };

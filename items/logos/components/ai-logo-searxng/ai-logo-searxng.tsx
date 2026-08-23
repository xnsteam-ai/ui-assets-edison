/**
 * searxng logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The searxng name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoSearxng({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="searxng"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M6.638 4.38a5.35 5.35 0 017.747 3.963 5.35 5.35 0 01-.56 3.284l-1.154-.61A4.044 4.044 0 007.237 5.54l-.6-1.158z" fill="#3050FF">
      </path>
      <path clipRule="evenodd" d="M9.13 0a9.13 9.13 0 017.992 13.546l6.803 6.515-3.4 3.551-6.853-6.562A9.13 9.13 0 119.13 0zm0 2.61a6.521 6.521 0 100 13.042 6.521 6.521 0 000-13.043z" fill="#3050FF" fillRule="evenodd">
      </path>
    </svg>
  );
}

export { AiLogoSearxng };

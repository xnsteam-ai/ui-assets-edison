/**
 * Bfl logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The Bfl name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoBfl({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Bfl"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M17.113 10.248H14.56l-2.553-3.616-7.963 11.27h2.558l5.405-7.654h2.552l-5.404 7.653h2.565l5.392-7.653L24 20 19.97 20v-2.091l-2.857-4.044-2.842 4.037V20H0L12.008 3l5.105 7.249z">
      </path>
    </svg>
  );
}

export { AiLogoBfl };

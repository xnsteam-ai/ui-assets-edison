/**
 * Jina logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The Jina name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoJina({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Jina"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M6.608 21.416a4.608 4.608 0 100-9.217 4.608 4.608 0 000 9.217zM20.894 2.015c.614 0 1.106.492 1.106 1.106v9.002c0 5.13-4.148 9.309-9.217 9.37v-9.355l-.03-9.032c0-.614.491-1.106 1.106-1.106h7.158l-.123.015z">
      </path>
    </svg>
  );
}

export { AiLogoJina };

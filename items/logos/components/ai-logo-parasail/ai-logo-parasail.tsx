/**
 * Parasail logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The Parasail name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoParasail({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Parasail"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M0 15.852c4.5 0 8.147 3.648 8.147 8.148H0v-8.148z">
      </path>
      <path clipRule="evenodd" d="M0 7.688v.018C9 7.706 16.294 15 16.294 24h.019l-.018-.036c3.33-.2 8.864-2.447 7.49-9.58A19.95 19.95 0 009.61.213C2.482-1.155.235 4.374.036 7.704L0 7.688z">
      </path>
    </svg>
  );
}

export { AiLogoParasail };

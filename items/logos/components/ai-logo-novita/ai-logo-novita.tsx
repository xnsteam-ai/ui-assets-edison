/**
 * Novita logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The Novita name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoNovita({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Novita"
      className={cn("size-6", className)}
      {...props}
    >
      <path clipRule="evenodd" d="M9.167 4.17v5.665L0 19.003h9.167v-5.666l5.666 5.666H24L9.167 4.17z" fill="#23D57C" fillRule="evenodd">
      </path>
    </svg>
  );
}

export { AiLogoNovita };

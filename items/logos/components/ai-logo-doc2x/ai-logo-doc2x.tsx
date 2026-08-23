/**
 * doc2x logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The doc2x name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoDoc2x({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="doc2x"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M21.66 7.017a3.308 3.308 0 10-4.677-4.678l-3.458 3.458a3.308 3.308 0 104.678 4.677l3.458-3.457zM10.475 18.203a3.308 3.308 0 10-4.678-4.678l-3.458 3.458a3.308 3.308 0 104.678 4.677l3.458-3.457z" fill="#7748F9">
      </path>
      <path d="M18.203 13.525a3.308 3.308 0 10-4.678 4.678l3.458 3.458a3.308 3.308 0 004.678-4.678l-3.458-3.458zM7.017 2.339a3.308 3.308 0 10-4.678 4.678l3.458 3.457a3.308 3.308 0 004.677-4.678L7.017 2.34z" fill="#BFABFB">
      </path>
    </svg>
  );
}

export { AiLogoDoc2x };

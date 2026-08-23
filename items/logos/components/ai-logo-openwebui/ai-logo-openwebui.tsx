/**
 * openwebui logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The openwebui name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoOpenwebui({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="openwebui"
      className={cn("size-6", className)}
      {...props}
    >
      <path clipRule="evenodd" d="M17.697 12c0 4.97-3.962 9-8.849 9C3.962 21 0 16.97 0 12s3.962-9 8.848-9c4.887 0 8.849 4.03 8.849 9zm-3.636 0c0 2.928-2.334 5.301-5.213 5.301-2.878 0-5.212-2.373-5.212-5.301S5.97 6.699 8.848 6.699c2.88 0 5.213 2.373 5.213 5.301z">
      </path>
      <path d="M24 3h-3.394v18H24V3z">
      </path>
    </svg>
  );
}

export { AiLogoOpenwebui };

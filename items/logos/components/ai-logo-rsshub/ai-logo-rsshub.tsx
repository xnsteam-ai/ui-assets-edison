/**
 * rsshub logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The rsshub name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoRsshub({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="rsshub"
      className={cn("size-6", className)}
      {...props}
    >
      <rect fill="#FFD6A6" height="22" rx="7" width="22" x="1" y="1">
      </rect>
      <path d="M1.13 6.646C1.046 7.084 1 7.536 1 8v8a7 7 0 007 7h8a7.04 7.04 0 001.354-.13A12.154 12.154 0 0018.5 17.7c0-6.738-5.462-12.2-12.2-12.2-1.848 0-3.6.41-5.17 1.146z" fill="#FF8549">
      </path>
      <circle cx="6.25" cy="17.75" fill="#FF2900" r="4.55">
      </circle>
    </svg>
  );
}

export { AiLogoRsshub };

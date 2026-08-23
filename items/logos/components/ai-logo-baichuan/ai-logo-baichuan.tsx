/**
 * Baichuan logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The Baichuan name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoBaichuan({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Baichuan"
      className={cn("size-6", className)}
      {...props}
    >
      <defs>
      <linearGradient id="baichuan-lobe-icons-baichuan-_R_0_" x1="17.764%" x2="100%" y1="8.678%" y2="91.322%">
      <stop offset="0%" stopColor="#FEC13E">
      </stop>
      <stop offset="100%" stopColor="#FF6933">
      </stop>
      </linearGradient>
      </defs>
      <path d="M7.333 2h-3.2l-2 4.333V17.8L0 22h5.2l2.028-4.2L7.333 2zm7.334 0h-5.2v20h5.2V2zM16.8 7.733H22V22h-5.2V7.733zM22 2h-5.2v4.133H22V2z" fill="url(#baichuan-lobe-icons-baichuan-_R_0_)" fillRule="nonzero">
      </path>
    </svg>
  );
}

export { AiLogoBaichuan };

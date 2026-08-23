/**
 * Crusoe logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The Crusoe name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoCrusoe({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Crusoe"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M12 0L4.583 6.583c-3.23 2.869-3.23 7.965 0 10.834L12 24l7.417-6.583c3.23-2.869 3.23-7.965 0-10.834L12 0z" fill="url(#crusoe-lobe-icons-crusoe-_R_0_)">
      </path>
      <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id="crusoe-lobe-icons-crusoe-_R_0_" x1="18.919" x2="4.853" y1="5.595" y2="18.301">
      <stop stopColor="#F4BF45">
      </stop>
      <stop offset=".35" stopColor="#E48047">
      </stop>
      <stop offset=".69" stopColor="#C73361">
      </stop>
      <stop offset="1" stopColor="#A42F5F">
      </stop>
      </linearGradient>
      </defs>
    </svg>
  );
}

export { AiLogoCrusoe };

/**
 * monica logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The monica name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoMonica({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="monica"
      className={cn("size-6", className)}
      {...props}
    >
      <circle cx="12" cy="12" fill="url(#monica-lobe-icons-monica-_R_0_)" r="12">
      </circle>
      <ellipse cx="12" cy="12" fill="#fff" rx="9.75" ry="8.438">
      </ellipse>
      <path d="M16.207 10.195a.96.96 0 111.357 1.357l-1.114 1.114 1.473.85a.96.96 0 11-.96 1.662l-2.444-1.411a1.003 1.003 0 01-.072-.046.962.962 0 01-.236-1.53l1.996-1.996zM7.688 9.937a1.5 1.5 0 00-1.5 1.5v2.25a1.5 1.5 0 003 0v-2.25a1.5 1.5 0 00-1.5-1.5z" fill="#1E1E1E">
      </path>
      <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id="monica-lobe-icons-monica-_R_0_" x1="0" x2="24" y1="12.281" y2="12.281">
      <stop stopColor="#A83FE0">
      </stop>
      <stop offset=".477" stopColor="#515FFB">
      </stop>
      <stop offset="1" stopColor="#2BB5DD">
      </stop>
      </linearGradient>
      </defs>
    </svg>
  );
}

export { AiLogoMonica };

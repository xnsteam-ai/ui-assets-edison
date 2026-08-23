/**
 * lovable logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The lovable name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoLovable({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="lovable"
      className={cn("size-6", className)}
      {...props}
    >
      <path clipRule="evenodd" d="M7.082 0c3.91 0 7.081 3.179 7.081 7.1v2.7h2.357c3.91 0 7.082 3.178 7.082 7.1 0 3.923-3.17 7.1-7.082 7.1H0V7.1C0 3.18 3.17 0 7.082 0z" fill="url(#lovable-lobe-icons-lovable-_R_0_)" fillRule="evenodd">
      </path>
      <defs>
      <radialGradient cx="0" cy="0" gradientTransform="matrix(-1 22.49999 -30.45394 -1.3535 14 3)" gradientUnits="userSpaceOnUse" id="lovable-lobe-icons-lovable-_R_0_" r="1">
      <stop offset=".25" stopColor="#FE7B02">
      </stop>
      <stop offset=".433" stopColor="#FE4230">
      </stop>
      <stop offset=".548" stopColor="#FE529A">
      </stop>
      <stop offset=".654" stopColor="#DD67EE">
      </stop>
      <stop offset=".95" stopColor="#4B73FF">
      </stop>
      </radialGradient>
      </defs>
    </svg>
  );
}

export { AiLogoLovable };

/**
 * kwaipilot logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The kwaipilot name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoKwaipilot({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="kwaipilot"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M11.765.03C5.327.03.108 5.25.108 11.686c0 3.514 1.556 6.665 4.015 8.804L9.89 8.665h6.451L9.31 23.083c.807.173 1.63.26 2.455.26 6.438 0 11.657-5.22 11.657-11.658S18.202.028 11.765.028V.03z" fill="url(#kwaipilot-lobe-icons-kwaipilot-0-_R_0_)">
      </path>
      <path d="M4.123 20.489l6.362-13.046c.017-.036.035-.073.055-.11l.086-.18h.005a6.697 6.697 0 015.913-3.551c2.784 0 5.171 1.7 6.184 4.116-1.622-4.485-5.92-7.69-10.963-7.69C5.327.028.108 5.247.108 11.685c0 3.514 1.556 6.666 4.015 8.804z" fill="url(#kwaipilot-lobe-icons-kwaipilot-1-_R_0_)">
      </path>
      <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id="kwaipilot-lobe-icons-kwaipilot-0-_R_0_" x1="13.469" x2="12.557" y1="4.823" y2="21.302">
      <stop offset=".313" stopColor="#9EC0E0">
      </stop>
      <stop offset="1" stopColor="#fff">
      </stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="kwaipilot-lobe-icons-kwaipilot-1-_R_0_" x1="13.739" x2="5.647" y1="4.229" y2="17.386">
      <stop stopColor="#fff">
      </stop>
      <stop offset="1" stopColor="#BCD5EC">
      </stop>
      </linearGradient>
      </defs>
    </svg>
  );
}

export { AiLogoKwaipilot };

/**
 * Stepfun logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The Stepfun name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoStepfun({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Stepfun"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M22.012 0h1.032v.927H24v.968h-.956V3.78h-1.032V1.896h-1.878v-.97h1.878V0zM2.6 12.371V1.87h.969v10.502h-.97zm10.423.66h10.95v.918h-6.208v9.579h-4.742V13.03zM5.629 3.333v12.356H0v4.51h10.386V8L20.859 8l-.003-4.668-15.227.001z" fill="url(#stepfun-lobe-icons-stepfun-_R_0_)" fillRule="evenodd">
      </path>
      <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id="stepfun-lobe-icons-stepfun-_R_0_" x1="1.646" x2="18.342" y1="1.916" y2="22.091">
      <stop stopColor="#01A9FF">
      </stop>
      <stop offset="1" stopColor="#0160FF">
      </stop>
      </linearGradient>
      </defs>
    </svg>
  );
}

export { AiLogoStepfun };

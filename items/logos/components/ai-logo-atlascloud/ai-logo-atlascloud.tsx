/**
 * Atlas Cloud logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The Atlas Cloud name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoAtlascloud({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Atlas Cloud"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M20.2,18.01L12,0.47,3.8,18.01l-2.58,5.52c1.62,-1.05,3.39,-1.86,5.26,-2.41,1.76,-0.51,3.61,-0.79,5.52,-0.79,0.98,0,1.95,0.08,2.9,0.22l-1.86,-4.3c-0.53,-0.1,-2.87,-0.1,-4.59,0.3l3.56,-8.28,5.52,12.85c0.01,0,0.02,0.01,0.03,0.01,1.86,0.55,3.62,1.36,5.23,2.4l-2.58,-5.52Z">
      </path>
    </svg>
  );
}

export { AiLogoAtlascloud };

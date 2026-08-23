/**
 * replit logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The replit name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoReplit({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="replit"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M11.878 7.761H3.482A1.469 1.469 0 012 6.304V1.457C2 .644 2.67 0 3.482 0h6.913c.827 0 1.483.658 1.483 1.457v6.304zM20.882 16.215h-8.995V7.75h8.995c.87 0 1.588.717 1.588 1.586v5.294c0 .885-.717 1.586-1.588 1.586zM10.395 24H3.482C2.67 24 2 23.343 2 22.546v-4.853c0-.797.67-1.454 1.482-1.454h8.396v6.307c0 .797-.67 1.454-1.483 1.454z" fill="#FD5402">
      </path>
    </svg>
  );
}

export { AiLogoReplit };

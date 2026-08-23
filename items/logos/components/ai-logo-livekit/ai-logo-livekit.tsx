/**
 * livekit logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The livekit name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoLivekit({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="livekit"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M14 10h-4v4h4v-4zM18 6h-4v4.001h4v-4zM18 14h-4v4h4v-4zM22 2h-4v4h4V2zM22 18h-4v4h4v-4z" fill="#1FD5F9">
      </path>
      <path d="M6 18V2H2v20h12v-4H6z" fill="#fff">
      </path>
    </svg>
  );
}

export { AiLogoLivekit };

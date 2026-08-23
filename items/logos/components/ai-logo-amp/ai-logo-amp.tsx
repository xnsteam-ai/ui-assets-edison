/**
 * amp logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The amp name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoAmp({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="amp"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M15.087 23.18L12.03 24l-2.097-7.823-5.738 5.738-2.251-2.251 5.718-5.719-7.769-2.082.82-3.057 11.294 3.08 3.08 11.295z" fill="#F34E3F">
      </path>
      <path d="M19.505 18.762l-3.057.82-2.564-9.573-9.572-2.564.819-3.057 11.295 3.079 3.08 11.295z" fill="#F34E3F">
      </path>
      <path d="M23.893 14.374l-3.057.82-2.565-9.572L8.7 3.057 9.52 0l11.295 3.08 3.079 11.294z" fill="#F34E3F">
      </path>
    </svg>
  );
}

export { AiLogoAmp };

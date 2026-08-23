/**
 * askverdict logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The askverdict name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoAskverdict({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="askverdict"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M12 3.42L4.5 7.97 12 12.47Z" fill="url(#askverdict-lobe-icons-ask-verdict-_R_0_)" fillOpacity="0.7">
      </path>
      <path d="M12 3.42L19.5 7.97 12 12.47Z" fill="url(#askverdict-lobe-icons-ask-verdict-_R_0_)">
      </path>
      <path d="M12 6.56L14.48 8.95 13.08 8.95 12 7.73 10.83 8.95 9.42 8.95Z" fill="#0a0800" fillOpacity="0.52">
      </path>
      <path d="M4.5 13.88L12 16.83 19.5 13.88 19.5 15.61 12 18.56 4.5 15.61Z" fill="url(#askverdict-lobe-icons-ask-verdict-_R_0_)" fillOpacity="0.82">
      </path>
      <path d="M5.3 16.83L12 19.55 18.7 16.83 18.7 18.38 12 20.77 5.3 18.38Z" fill="url(#askverdict-lobe-icons-ask-verdict-_R_0_)" fillOpacity="0.62">
      </path>
      <defs>
      <linearGradient id="askverdict-lobe-icons-ask-verdict-_R_0_" x1="50%" x2="50%" y1="0%" y2="100%">
      <stop offset="0%" stopColor="#FAD460">
      </stop>
      <stop offset="45%" stopColor="#E8A317">
      </stop>
      <stop offset="100%" stopColor="#B8751A">
      </stop>
      </linearGradient>
      </defs>
    </svg>
  );
}

export { AiLogoAskverdict };

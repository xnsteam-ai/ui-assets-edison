/**
 * Civitai logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The Civitai name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoCivitai({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Civitai"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M12 0l10.392 6v12L12 24 1.608 18V6L12 0z" fill="url(#civitai-lobe-icons-civitai-0-_R_0_)">
      </path>
      <path d="M12 3.934l6.985 4.033v8.066L12 20.065l-6.985-4.032V7.967L12 3.934z" fill="url(#civitai-lobe-icons-civitai-1-_R_0_)">
      </path>
      <path d="M12 6.885l4.43 2.558v1.377h-2.386L12 9.64l-2.044 1.18v2.36L12 14.36l2.044-1.18h2.386v1.377L12 17.115l-4.43-2.558V9.443L12 6.885z" fill="#fff" fillRule="evenodd">
      </path>
      <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id="civitai-lobe-icons-civitai-0-_R_0_" x1="12" x2="12" y1="0" y2="24">
      <stop stopColor="#1281F4">
      </stop>
      <stop offset="1" stopColor="#0821C6">
      </stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="civitai-lobe-icons-civitai-1-_R_0_" x1="12" x2="12" y1="3.934" y2="20.066">
      <stop stopColor="#09138A">
      </stop>
      <stop offset="1" stopColor="#150740">
      </stop>
      </linearGradient>
      </defs>
    </svg>
  );
}

export { AiLogoCivitai };

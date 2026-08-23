/**
 * gradio logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The gradio name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoGradio({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="gradio"
      className={cn("size-6", className)}
      {...props}
    >
      <path clipRule="evenodd" d="M11.238 7.603a1.532 1.532 0 011.524 0l10.468 6a1.532 1.532 0 010 2.66l-10.468 6c-.472.27-1.052.27-1.524 0l-10.468-6a1.533 1.533 0 010-2.66l10.468-6zm-6.624 7.33L12 19.166l7.386-4.233L12 10.699l-7.386 4.234z" fill="url(#gradio-lobe-icons-gradio-0-_R_0_)" fillRule="evenodd">
      </path>
      <path clipRule="evenodd" d="M11.238 1.733a1.533 1.533 0 011.524 0l10.468 6a1.532 1.532 0 010 2.659l-10.468 6c-.472.27-1.052.27-1.524 0l-10.468-6a1.532 1.532 0 010-2.659l10.468-6zm-6.624 7.33L12 13.296l7.386-4.233L12 4.829 4.614 9.063z" fill="url(#gradio-lobe-icons-gradio-1-_R_0_)" fillRule="evenodd">
      </path>
      <path clipRule="evenodd" d="M12.784 10.265L2.291 16.239.774 13.575l10.494-5.974 1.516 2.664z" fill="url(#gradio-lobe-icons-gradio-2-_R_0_)" fillRule="evenodd">
      </path>
      <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id="gradio-lobe-icons-gradio-0-_R_0_" x1=".182" x2="19.377" y1="14.907" y2="14.907">
      <stop stopColor="#F9D100">
      </stop>
      <stop offset="1" stopColor="#F97700">
      </stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="gradio-lobe-icons-gradio-1-_R_0_" x1="23.74" x2="4.519" y1="9.037" y2="9.037">
      <stop stopColor="#F9D100">
      </stop>
      <stop offset="1" stopColor="#F97700">
      </stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="gradio-lobe-icons-gradio-2-_R_0_" x1=".182" x2="19.35" y1="14.907" y2="14.793">
      <stop stopColor="#F9D100">
      </stop>
      <stop offset="1" stopColor="#F97700">
      </stop>
      </linearGradient>
      </defs>
    </svg>
  );
}

export { AiLogoGradio };

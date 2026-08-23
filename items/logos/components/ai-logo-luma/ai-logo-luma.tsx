/**
 * luma logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The luma name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoLuma({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="luma"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M2 5.999L12.392 0v24L2 18V5.999z" fill="currentColor">
      </path>
      <path d="M12.392 24L2 18l10.392-6 10.393 6-10.393 6z" fill="url(#luma-lobe-icons-luma-0-_R_0_)">
      </path>
      <path d="M12.392 24L2 18l10.392-6 10.393 6-10.393 6z" fill="url(#luma-lobe-icons-luma-1-_R_0_)">
      </path>
      <path d="M2 5.999L12.392 0v24L2 18V5.999z" fill="url(#luma-lobe-icons-luma-2-_R_0_)" style={{ mixBlendMode: "screen" }}>
      </path>
      <path d="M12.392 24L2 18l10.392-6 10.393 6-10.393 6z" fill="url(#luma-lobe-icons-luma-3-_R_0_)" style={{ mixBlendMode: "overlay" }}>
      </path>
      <path d="M2 5.999L12.392 0v24L2 18V5.999z" fill="url(#luma-lobe-icons-luma-4-_R_0_)" style={{ mixBlendMode: "overlay" }}>
      </path>
      <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id="luma-lobe-icons-luma-0-_R_0_" x1="2" x2="22.785" y1="18" y2="18">
      <stop stopColor="#00A">
      </stop>
      <stop offset="1" stopColor="#A78DFF">
      </stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="luma-lobe-icons-luma-1-_R_0_" x1="2" x2="22.785" y1="18" y2="18">
      <stop stopColor="#00A">
      </stop>
      <stop offset="1" stopColor="#A78DFF">
      </stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="luma-lobe-icons-luma-2-_R_0_" x1="13.748" x2="4.672" y1="22.642" y2="3.745">
      <stop stopColor="#004EFF">
      </stop>
      <stop offset="1" stopColor="#0FF">
      </stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="luma-lobe-icons-luma-3-_R_0_" x1="2" x2="22.785" y1="18" y2="18">
      <stop stopColor="#00A">
      </stop>
      <stop offset="1" stopColor="#A78DFF">
      </stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="luma-lobe-icons-luma-4-_R_0_" x1="13.748" x2="4.672" y1="22.642" y2="3.745">
      <stop stopColor="#004EFF">
      </stop>
      <stop offset="1" stopColor="#0FF">
      </stop>
      </linearGradient>
      </defs>
    </svg>
  );
}

export { AiLogoLuma };

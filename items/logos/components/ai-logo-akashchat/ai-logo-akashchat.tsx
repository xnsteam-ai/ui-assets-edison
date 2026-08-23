/**
 * Akash Chat logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The Akash Chat name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoAkashchat({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Akash Chat"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M15.902 14.836l3.93 6.914h-7.934L7.93 14.836h7.972z" fill="url(#akashchat-lobe-icons-akash-chat-_R_0_)">
      </path>
      <path d="M19.828 21.754l3.96-6.918L15.86 1H7.93l11.898 20.754z" fill="#FF414C">
      </path>
      <path d="M3.965 7.914h7.93L3.969 21.75 0 14.836l3.965-6.922z" fill="#FF414C">
      </path>
      <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id="akashchat-lobe-icons-akash-chat-_R_0_" x1="13.877" x2="18.518" y1="19.997" y2="14.799">
      <stop stopColor="#FF414C">
      </stop>
      <stop offset="1" stopColor="#FF414C" stopOpacity="0">
      </stop>
      </linearGradient>
      </defs>
    </svg>
  );
}

export { AiLogoAkashchat };

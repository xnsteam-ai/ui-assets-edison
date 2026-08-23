/**
 * VLLM logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The VLLM name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoVllm({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="VLLM"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M0 4.973h9.324V23L0 4.973z" fill="#FDB515">
      </path>
      <path d="M13.986 4.351L22.378 0l-6.216 23H9.324l4.662-18.649z" fill="#30A2FF">
      </path>
    </svg>
  );
}

export { AiLogoVllm };

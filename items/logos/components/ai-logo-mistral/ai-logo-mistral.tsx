/**
 * Mistral logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed, https://github.com/lobehub/lobe-icons
 *
 * The Mistral name and logo are trademarks of Mistral AI (https://mistral.ai). They are
 * reproduced here to identify Mistral AI's models, and remain the property of their owner —
 * this project claims no rights in them. Check Mistral AI's brand guidelines before using the
 * mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoMistral({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Mistral"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M3.428 3.4h3.429v3.428H3.428V3.4zm13.714 0h3.43v3.428h-3.43V3.4z" fill="gold">
      </path>
      <path d="M3.428 6.828h6.857v3.429H3.429V6.828zm10.286 0h6.857v3.429h-6.857V6.828z" fill="#FFAF00">
      </path>
      <path d="M3.428 10.258h17.144v3.428H3.428v-3.428z" fill="#FF8205">
      </path>
      <path d="M3.428 13.686h3.429v3.428H3.428v-3.428zm6.858 0h3.429v3.428h-3.429v-3.428zm6.856 0h3.43v3.428h-3.43v-3.428z" fill="#FA500F">
      </path>
      <path d="M0 17.114h10.286v3.429H0v-3.429zm13.714 0H24v3.429H13.714v-3.429z" fill="#E10500">
      </path>
    </svg>
  );
}

export { AiLogoMistral };

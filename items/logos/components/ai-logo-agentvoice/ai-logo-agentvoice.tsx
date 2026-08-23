/**
 * agentvoice logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The agentvoice name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoAgentvoice({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="agentvoice"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M23.696 12.056h-8.825a.283.283 0 01-.246-.425l4.413-7.643a.283.283 0 00-.246-.425l-9.018.005a.567.567 0 00-.49.283L.037 19.863a.283.283 0 00.246.425h9.015c.203 0 .39-.108.491-.284l4.325-7.49a.283.283 0 01.49 0l4.413 7.644c.11.188.382.188.491 0l4.433-7.677a.283.283 0 00-.246-.425z" fill="#0F6FFF">
      </path>
    </svg>
  );
}

export { AiLogoAgentvoice };

/**
 * trae logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The trae name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoTrae({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="trae"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M24 20.541H3.428v-3.426H0V3.4h24V20.54zM3.428 17.115h17.144V6.827H3.428v10.288zm8.573-5.196l-2.425 2.424-2.424-2.424 2.424-2.424 2.425 2.424zm6.857-.001l-2.424 2.423-2.425-2.423 2.425-2.425 2.424 2.425z" fill="#32F08C">
      </path>
    </svg>
  );
}

export { AiLogoTrae };

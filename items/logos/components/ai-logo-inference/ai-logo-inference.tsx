/**
 * Inference logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The Inference name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoInference({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Inference"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M22 21.376h-4.89V2.62H22v18.756zM14.532 21.376h-3.469V2.62h3.469v18.756zM8.764 21.376h-2.66V2.62h2.66v18.756zM3.903 21.376H2V2.62h1.903v18.756z">
      </path>
    </svg>
  );
}

export { AiLogoInference };

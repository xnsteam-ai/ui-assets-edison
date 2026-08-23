/**
 * Manjaro logo.
 *
 * Artwork from gilbarbara/logos — CC0-1.0, dedicated to the public domain.
 * https://github.com/gilbarbara/logos
 *
 * The Manjaro name and logo are trademarks of their respective owner, reproduced here to
 * identify them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function LogoManjaro({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 256 256"
      role="img"
      aria-label="Manjaro"
      className={cn("size-6", className)}
      {...props}
    >
      <g>
        <path d="M256,4.06799356e-06 L256,256.000004 L181.075279,256.000004 L181.075279,4.06799356e-06 L256,4.06799356e-06 Z M165.459633,90.5359552 L165.459633,256.000027 L90.5349112,256.000027 L90.5349112,90.5359552 L165.459633,90.5359552 Z M165.460901,0 L165.460901,74.9247224 L74.6704761,74.9247224 L74.6704761,256.000023 L0,256.000023 L0,0 L165.460901,0 Z" fill="#35BF5C">
      </path>
    </g>
    </svg>
  );
}

export { LogoManjaro };

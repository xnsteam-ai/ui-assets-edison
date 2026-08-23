/**
 * NPM logo.
 *
 * Artwork from gilbarbara/logos — CC0-1.0, dedicated to the public domain.
 * https://github.com/gilbarbara/logos
 *
 * The NPM name and logo are trademarks of their respective owner, reproduced here to
 * identify them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function LogoNpm({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 512 165"
      role="img"
      aria-label="NPM"
      className={cn("size-6", className)}
      {...props}
    >
      <g>
        <path d="M157.538462,164.102564 L223.179487,164.102564 L223.179487,131.282051 L288.820513,131.282051 L288.820513,0 L157.538462,0 L157.538462,164.102564 Z M223.179487,32.8205128 L256,32.8205128 L256,98.4615385 L223.179487,98.4615385 L223.179487,32.8205128 Z M315.076923,0 L315.076923,131.282051 L380.717949,131.282051 L380.717949,32.8205128 L413.538462,32.8205128 L413.538462,131.282051 L446.358974,131.282051 L446.358974,32.8205128 L479.179487,32.8205128 L479.179487,131.282051 L512,131.282051 L512,0 L315.076923,0 Z M0,131.282051 L65.6410256,131.282051 L65.6410256,32.8205128 L98.4615385,32.8205128 L98.4615385,131.282051 L131.282051,131.282051 L131.282051,0 L0,0 L0,131.282051 Z" fill="#C12127">
      </path>
    </g>
    </svg>
  );
}

export { LogoNpm };

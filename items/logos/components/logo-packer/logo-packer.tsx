/**
 * Packer logo.
 *
 * Artwork from gilbarbara/logos — CC0-1.0, dedicated to the public domain.
 * https://github.com/gilbarbara/logos
 *
 * The Packer name and logo are trademarks of their respective owner, reproduced here to
 * identify them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function LogoPacker({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 256 413"
      role="img"
      aria-label="Packer"
      className={cn("size-6", className)}
      {...props}
    >
      <g>
		<polyline fill="#1DAEFF" points="0.356848485 50.5963636 135.493818 127.861818 135.493818 412.696727 0.356848485 335.446788">
      </polyline>
		<path d="M202.395152,83.8918788 L55.5054545,0.187636364 L55.5054545,58.3151515 L155.392,115.379879 L155.392,289.80897 L202.402909,316.518303 C231.493818,333.119515 255.309576,323.174303 255.309576,294.409212 L255.309576,166.41697 C255.309576,137.636364 231.493818,100.500848 202.402909,83.8918788" fill="#1D94DD">
      </path>
	</g>
    </svg>
  );
}

export { LogoPacker };

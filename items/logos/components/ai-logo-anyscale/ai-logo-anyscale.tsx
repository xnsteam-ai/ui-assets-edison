/**
 * Anyscale logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The Anyscale name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoAnyscale({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Anyscale"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M17.583 12.344L14.606 17.5H20.6c.22 0 .424-.117.535-.308l2.799-4.848h-6.351zM23.934 11.656l-2.799-4.848A.616.616 0 0020.6 6.5h-5.994l2.977 5.156h6.35zM8.653 6.5h5.953l-2.997-5.191A.616.616 0 0011.074 1H5.476l3.176 5.5zM4.881 1.343L2.083 6.191a.618.618 0 000 .617l2.997 5.191 2.976-5.156-3.175-5.5zM8.057 17.155L5.081 12l-2.998 5.192a.618.618 0 000 .617l2.798 4.848 3.175-5.5h.001zM5.476 23h5.598c.22 0 .424-.117.535-.308l2.997-5.192H8.653L5.477 23z" fill="#0163FB">
      </path>
    </svg>
  );
}

export { AiLogoAnyscale };

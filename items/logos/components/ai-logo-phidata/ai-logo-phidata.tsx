/**
 * phidata logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The phidata name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoPhidata({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="phidata"
      className={cn("size-6", className)}
      {...props}
    >
      <path clipRule="evenodd" d="M2.692 3.752C2 4.769 2 6.193 2 9.04v5.92c0 2.847 0 4.27.692 5.288a4 4 0 001.06 1.06C4.769 22 6.193 22 9.04 22h5.92c2.847 0 4.27 0 5.288-.692a4 4 0 001.06-1.06C22 19.231 22 17.807 22 14.96V9.04c0-2.847 0-4.27-.692-5.288a4 4 0 00-1.06-1.06C19.231 2 17.807 2 14.96 2H9.04c-2.847 0-4.27 0-5.288.692a4 4 0 00-1.06 1.06zm16.57 11.478a.755.755 0 10-1.51.032c.029 1.305-.304 1.912-.725 2.21-.468.334-1.288.473-2.635.272a.755.755 0 00-.222 1.493c1.445.215 2.769.15 3.731-.534 1.01-.718 1.393-1.94 1.36-3.473z" fill="#FF4017" fillRule="evenodd">
      </path>
    </svg>
  );
}

export { AiLogoPhidata };

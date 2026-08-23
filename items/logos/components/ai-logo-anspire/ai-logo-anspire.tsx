/**
 * anspire logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The anspire name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoAnspire({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="anspire"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M20.531 3.736A2.146 2.146 0 0018.419 2h-3.838c-1.071 0-2.07.54-2.65 1.435L.023 21.78a.142.142 0 00.12.22h3.6c.097 0 .188-.05.24-.131l3.547-5.492h6.274c1.46 0 2.73-.996 3.067-2.407l.167-.695.002-.01a.14.14 0 00-.139-.161H9.644l4.935-7.643a.861.861 0 01.724-.393h1.225c.276 0 .512.194.563.463l3.105 16.237a.286.286 0 00.281.232h3.38c.009 0 .018 0 .026-.003a.142.142 0 00.114-.166L20.531 3.736z" fill="#514BFD">
      </path>
    </svg>
  );
}

export { AiLogoAnspire };

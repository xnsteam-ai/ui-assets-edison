/**
 * Lambda logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The Lambda name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoLambda({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Lambda"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M2 2h20v20H2V2zm1.768 18.237h16.459V3.761H3.768v16.476zm3.515-14.91l3.479 6.176-3.871 7.154h2.493l2.58-4.883 2.747 4.883h2.54L9.82 5.324l-2.538.002z">
      </path>
    </svg>
  );
}

export { AiLogoLambda };

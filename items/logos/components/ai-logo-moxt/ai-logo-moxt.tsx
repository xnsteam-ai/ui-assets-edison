/**
 * moxt logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The moxt name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoMoxt({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="moxt"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M12.03 11.936v6.22L6.477 15.05l-.002-6.21 5.557 3.095z" fill="#29C16A">
      </path>
      <path clipRule="evenodd" d="M10.646.36a2.77 2.77 0 012.729 0l8.284 4.713A2.623 2.623 0 0123 7.347v9.34c0 .936-.511 1.803-1.341 2.276l-8.23 4.678a2.77 2.77 0 01-2.727.001l-8.36-4.745A2.623 2.623 0 011 16.621v-4.553l.001-.002H1V7.36c0-.936.51-1.803 1.34-2.276L10.646.36zm1.882 4.12a1.03 1.03 0 00-1.015 0L5.612 7.838a.975.975 0 00-.498.846v6.643c0 .349.19.671.499.846l5.883 3.349a1.03 1.03 0 001.011.002l5.875-3.306a.977.977 0 00.503-.848v-6.71c0-.349-.19-.671-.5-.847l-5.857-3.331z" fill="#29C16A" fillRule="evenodd">
      </path>
    </svg>
  );
}

export { AiLogoMoxt };

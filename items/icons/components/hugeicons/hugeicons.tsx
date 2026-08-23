/**
 * Thin wrapper over @hugeicons/react, giving every icon in the free library a Stark-consistent
 * default size and `currentColor` stroke.
 *
 * Both packages are MIT with no dependencies of their own beyond React.
 * https://hugeicons.com
 */

"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import type * as React from "react";

import { cn } from "@/lib/utils";

type HugeIconProps = Omit<React.ComponentProps<typeof HugeiconsIcon>, "size"> & {
  /** Rendered pixel size. Defaults to 24 to match the rest of the Stark icon set. */
  size?: number;
};

function HugeIcon({ className, size = 24, strokeWidth = 1.75, ...props }: HugeIconProps) {
  return (
    <HugeiconsIcon
      className={cn("shrink-0", className)}
      size={size}
      strokeWidth={strokeWidth}
      {...props}
    />
  );
}

export { HugeIcon };

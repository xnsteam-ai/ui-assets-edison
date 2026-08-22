import type * as React from "react";

import { cn } from "@/lib/utils";

function IconStar({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Star icon"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M12 4l2.5 5.4 5.9.7-4.4 4L17.2 20 12 17.1 6.8 20l1.2-5.9-4.4-4 5.9-.7z" />
    </svg>
  );
}

export { IconStar };

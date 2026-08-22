import type * as React from "react";

import { cn } from "@/lib/utils";

function StarkMarkSpark({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Stark Spark"
      className={cn("size-16", className)}
      {...props}
    >
      <defs>
        <linearGradient id="stark-mark-spark-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7C5CFF" />
          <stop offset="100%" stopColor="#4B2ED6" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#stark-mark-spark-grad)" />
      <path d="M32 12l4.6 14.8L52 32l-15.4 5.2L32 52l-4.6-14.8L12 32l15.4-5.2z" fill="#fff" />
    </svg>
  );
}

export { StarkMarkSpark };

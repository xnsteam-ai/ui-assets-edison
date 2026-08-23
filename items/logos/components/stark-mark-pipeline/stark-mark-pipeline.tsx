import type * as React from "react";

import { cn } from "@/lib/utils";

function StarkMarkPipeline({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Stark Pipeline"
      className={cn("size-16", className)}
      {...props}
    >
      <defs>
        <linearGradient id="stark-mark-pipeline-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2DD4BF" />
          <stop offset="100%" stopColor="#115E59" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#stark-mark-pipeline-grad)" />
      <circle cx="18" cy="32" r="5" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="32" r="5" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="46" cy="32" r="5" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 32h4M37 32h4" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export { StarkMarkPipeline };

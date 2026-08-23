import type * as React from "react";

import { cn } from "@/lib/utils";

function StarkMarkDice({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Stark Dice"
      className={cn("size-16", className)}
      {...props}
    >
      <defs>
        <linearGradient id="stark-mark-dice-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#6B21A8" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#stark-mark-dice-grad)" />
      <rect x="17" y="17" width="30" height="30" rx="7" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="26" cy="26" r="2.6" fill="#fff" />
      <circle cx="38" cy="26" r="2.6" fill="#fff" />
      <circle cx="32" cy="32" r="2.6" fill="#fff" />
      <circle cx="26" cy="38" r="2.6" fill="#fff" />
      <circle cx="38" cy="38" r="2.6" fill="#fff" />
    </svg>
  );
}

export { StarkMarkDice };

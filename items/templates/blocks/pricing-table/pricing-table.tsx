import type * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Placeholder layout for the Pricing Table template.
 * The regions are blocked out; swap them for real content when the template is built.
 */
function PricingTable({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("aspect-[4/3] w-full text-foreground", className)} {...props}>
      <div className="flex h-full w-full items-stretch gap-2 p-6">
        <div className="flex flex-1 flex-col gap-1.5 rounded-lg bg-foreground/8 p-2">
          <div className="h-1.5 w-2/3 rounded-full bg-foreground/25" />
          <div className="h-3 w-1/2 rounded bg-foreground/30" />
          <div className="h-1 w-full rounded-full bg-foreground/10" />
          <div className="h-1 w-5/6 rounded-full bg-foreground/10" />
          <div className="mt-auto h-4 rounded bg-foreground/20" />
        </div>
        <div className="flex flex-1 flex-col gap-1.5 rounded-lg bg-foreground/15 p-2">
          <div className="h-1.5 w-2/3 rounded-full bg-foreground/30" />
          <div className="h-3 w-1/2 rounded bg-foreground/40" />
          <div className="h-1 w-full rounded-full bg-foreground/15" />
          <div className="h-1 w-5/6 rounded-full bg-foreground/15" />
          <div className="mt-auto h-4 rounded bg-foreground/35" />
        </div>
        <div className="flex flex-1 flex-col gap-1.5 rounded-lg bg-foreground/8 p-2">
          <div className="h-1.5 w-2/3 rounded-full bg-foreground/25" />
          <div className="h-3 w-1/2 rounded bg-foreground/30" />
          <div className="h-1 w-full rounded-full bg-foreground/10" />
          <div className="h-1 w-5/6 rounded-full bg-foreground/10" />
          <div className="mt-auto h-4 rounded bg-foreground/20" />
        </div>
      </div>
    </div>
  );
}

export { PricingTable };

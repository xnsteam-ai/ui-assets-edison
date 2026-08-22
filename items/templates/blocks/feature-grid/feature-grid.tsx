import type * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Placeholder layout for the Feature Grid template.
 * The regions are blocked out; swap them for real content when the template is built.
 */
function FeatureGrid({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("aspect-[4/3] w-full text-foreground", className)} {...props}>
      <div className="grid h-full w-full grid-cols-3 grid-rows-2 gap-2 p-5">
        <div className="flex flex-col gap-1 rounded-lg bg-foreground/8 p-2">
          <div className="size-3 rounded bg-foreground/30" />
          <div className="h-1 w-3/4 rounded-full bg-foreground/20" />
          <div className="h-1 w-full rounded-full bg-foreground/10" />
        </div>
        <div className="flex flex-col gap-1 rounded-lg bg-foreground/8 p-2">
          <div className="size-3 rounded bg-foreground/30" />
          <div className="h-1 w-3/4 rounded-full bg-foreground/20" />
          <div className="h-1 w-full rounded-full bg-foreground/10" />
        </div>
        <div className="flex flex-col gap-1 rounded-lg bg-foreground/8 p-2">
          <div className="size-3 rounded bg-foreground/30" />
          <div className="h-1 w-3/4 rounded-full bg-foreground/20" />
          <div className="h-1 w-full rounded-full bg-foreground/10" />
        </div>
        <div className="flex flex-col gap-1 rounded-lg bg-foreground/8 p-2">
          <div className="size-3 rounded bg-foreground/30" />
          <div className="h-1 w-3/4 rounded-full bg-foreground/20" />
          <div className="h-1 w-full rounded-full bg-foreground/10" />
        </div>
        <div className="flex flex-col gap-1 rounded-lg bg-foreground/8 p-2">
          <div className="size-3 rounded bg-foreground/30" />
          <div className="h-1 w-3/4 rounded-full bg-foreground/20" />
          <div className="h-1 w-full rounded-full bg-foreground/10" />
        </div>
        <div className="flex flex-col gap-1 rounded-lg bg-foreground/8 p-2">
          <div className="size-3 rounded bg-foreground/30" />
          <div className="h-1 w-3/4 rounded-full bg-foreground/20" />
          <div className="h-1 w-full rounded-full bg-foreground/10" />
        </div>
      </div>
    </div>
  );
}

export { FeatureGrid };

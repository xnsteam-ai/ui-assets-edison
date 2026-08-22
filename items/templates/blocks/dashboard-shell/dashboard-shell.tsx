import type * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Placeholder layout for the Dashboard Shell template.
 * The regions are blocked out; swap them for real content when the template is built.
 */
function DashboardShell({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("aspect-[4/3] w-full text-foreground", className)} {...props}>
      <div className="flex h-full w-full gap-2 p-5">
        <div className="flex w-1/5 flex-col gap-1.5 rounded-lg bg-foreground/10 p-2">
          <div className="h-1.5 w-full rounded-full bg-foreground/25" />
          <div className="h-1.5 w-4/5 rounded-full bg-foreground/15" />
          <div className="h-1.5 w-4/5 rounded-full bg-foreground/15" />
          <div className="h-1.5 w-3/5 rounded-full bg-foreground/15" />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="h-5 rounded-lg bg-foreground/10" />
          <div className="grid flex-1 grid-cols-3 gap-2">
            <div className="rounded-lg bg-foreground/12" />
            <div className="rounded-lg bg-foreground/12" />
            <div className="rounded-lg bg-foreground/12" />
          </div>
          <div className="h-1/3 rounded-lg bg-foreground/8" />
        </div>
      </div>
    </div>
  );
}

export { DashboardShell };

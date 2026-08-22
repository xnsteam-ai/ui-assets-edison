import type * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Placeholder layout for the Settings Page template.
 * The regions are blocked out; swap them for real content when the template is built.
 */
function SettingsPage({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("aspect-[4/3] w-full text-foreground", className)} {...props}>
      <div className="flex h-full w-full gap-3 p-5">
        <div className="flex w-1/4 flex-col gap-1.5">
          <div className="h-1.5 w-full rounded-full bg-foreground/30" />
          <div className="h-1.5 w-4/5 rounded-full bg-foreground/12" />
          <div className="h-1.5 w-4/5 rounded-full bg-foreground/12" />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1/3 rounded-full bg-foreground/25" />
            <div className="ml-auto h-4 w-10 rounded-full bg-foreground/20" />
          </div>
          <div className="h-px w-full bg-foreground/10" />
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-2/5 rounded-full bg-foreground/25" />
            <div className="ml-auto h-4 w-10 rounded-full bg-foreground/20" />
          </div>
          <div className="h-px w-full bg-foreground/10" />
          <div className="h-8 rounded-md bg-foreground/10" />
        </div>
      </div>
    </div>
  );
}

export { SettingsPage };

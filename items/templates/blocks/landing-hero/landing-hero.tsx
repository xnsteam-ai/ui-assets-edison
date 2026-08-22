import type * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Placeholder layout for the Landing Hero template.
 * The regions are blocked out; swap them for real content when the template is built.
 */
function LandingHero({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("aspect-[4/3] w-full text-foreground", className)} {...props}>
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6">
        <div className="h-2.5 w-3/5 rounded-full bg-foreground/30" />
        <div className="h-1.5 w-4/5 rounded-full bg-foreground/10" />
        <div className="h-1.5 w-2/3 rounded-full bg-foreground/10" />
        <div className="mt-2 flex gap-2">
          <div className="h-5 w-16 rounded-md bg-foreground/35" />
          <div className="h-5 w-16 rounded-md bg-foreground/12" />
        </div>
      </div>
    </div>
  );
}

export { LandingHero };

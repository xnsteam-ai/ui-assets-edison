import type * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Placeholder layout for the Auth Screen template.
 * The regions are blocked out; swap them for real content when the template is built.
 */
function AuthScreen({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("aspect-[4/3] w-full text-foreground", className)} {...props}>
      <div className="grid h-full w-full place-items-center p-6">
        <div className="flex w-3/5 flex-col gap-2 rounded-lg bg-foreground/10 p-3">
          <div className="h-2 w-1/2 rounded-full bg-foreground/30" />
          <div className="h-4 rounded-md bg-foreground/12" />
          <div className="h-4 rounded-md bg-foreground/12" />
          <div className="h-4 rounded-md bg-foreground/35" />
          <div className="h-px w-full bg-foreground/12" />
          <div className="h-4 rounded-md bg-foreground/12" />
        </div>
      </div>
    </div>
  );
}

export { AuthScreen };

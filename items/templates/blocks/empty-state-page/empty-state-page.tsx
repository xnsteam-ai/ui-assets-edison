import type * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Placeholder layout for the Empty State Page template.
 * The regions are blocked out; swap them for real content when the template is built.
 */
function EmptyStatePage({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("aspect-[4/3] w-full text-foreground", className)} {...props}>
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6">
        <div className="size-10 rounded-full bg-foreground/12" />
        <div className="h-2 w-2/5 rounded-full bg-foreground/28" />
        <div className="h-1 w-3/5 rounded-full bg-foreground/12" />
        <div className="mt-1 h-5 w-20 rounded-md bg-foreground/30" />
      </div>
    </div>
  );
}

export { EmptyStatePage };

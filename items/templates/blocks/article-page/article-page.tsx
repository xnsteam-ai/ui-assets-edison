import type * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Placeholder layout for the Article Page template.
 * The regions are blocked out; swap them for real content when the template is built.
 */
function ArticlePage({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("aspect-[4/3] w-full text-foreground", className)} {...props}>
      <div className="flex h-full w-full flex-col gap-1.5 px-10 py-6">
        <div className="h-2.5 w-4/5 rounded-full bg-foreground/30" />
        <div className="h-1 w-1/3 rounded-full bg-foreground/15" />
        <div className="mt-2 h-10 rounded-lg bg-foreground/10" />
        <div className="h-1 w-full rounded-full bg-foreground/12" />
        <div className="h-1 w-full rounded-full bg-foreground/12" />
        <div className="h-1 w-11/12 rounded-full bg-foreground/12" />
        <div className="h-1 w-4/5 rounded-full bg-foreground/12" />
      </div>
    </div>
  );
}

export { ArticlePage };

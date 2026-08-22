import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

/** Single source of defaults. The registry rewrites this literal when exporting a customised copy. */
const defaults = {
  title: "Ready to publish",
  description: "Use this component as a small, installable starter item.",
  body: "Replace this example with a component from your own registry.",
  status: "Template",
  actionLabel: "Open docs",
  actionHref: "",
  align: "left",
  radius: 10,
  padding: 24,
  showBadge: true,
  showAction: true,
};

type ExampleCardProps = Partial<typeof defaults> & {
  className?: string;
};

// Text alignment only: `Card` is a flex column, so `items-*` here would collapse child widths.
const alignClasses: Record<string, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

function ExampleCard({ className, ...props }: ExampleCardProps) {
  const {
    title,
    description,
    body,
    status,
    actionLabel,
    actionHref,
    align,
    radius,
    padding,
    showBadge,
    showAction,
  } = { ...defaults, ...props };

  return (
    <Card
      className={cn("w-full max-w-sm gap-0", alignClasses[align] ?? alignClasses.left, className)}
      style={{ borderRadius: `${radius}px`, padding: `${padding}px` }}
    >
      <CardHeader className="p-0">
        <div className="flex items-center justify-between gap-3">
          <CardTitle>{title}</CardTitle>
          {showBadge ? <Badge variant="secondary">{status}</Badge> : null}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="px-0 pt-3">
        <p className="text-sm text-muted-foreground">{body}</p>
      </CardContent>
      {showAction ? (
        <CardFooter className="px-0 pt-4">
          <Button
            className="w-full"
            nativeButton={!actionHref}
            render={actionHref ? <a href={actionHref} /> : undefined}
          >
            {actionLabel}
          </Button>
        </CardFooter>
      ) : null}
    </Card>
  );
}

export { ExampleCard, type ExampleCardProps };

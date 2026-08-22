import { cn } from "@/lib/utils";

/** Single source of defaults. The registry rewrites this literal when exporting a customised copy. */
const defaults = {
  heading: "Nothing here yet",
  body: "Create your first item to see it listed here.",
  actionLabel: "Create item",
  actionHref: "",
  align: "center",
  radius: 12,
  padding: 32,
  gap: 10,
  accent: "#09090b",
  ink: "inherit",
  showArt: true,
  showAction: true,
  surface: "transparent",
};

type EmptyStatePageProps = Partial<typeof defaults> & {
  className?: string;
};

// Text alignment only: the wrapper is a flex column, so `items-*` here would collapse child widths.
const alignClasses: Record<string, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

function EmptyStatePage({ className, ...props }: EmptyStatePageProps) {
  const {
    heading,
    body,
    actionLabel,
    actionHref,
    align,
    radius,
    padding,
    gap,
    accent,
    ink,
    showArt,
    showAction,
    surface,
  } = { ...defaults, ...props };

  return (
    <div
      className={cn(
        "flex aspect-[4/3] w-full flex-col",
        align === "center" ? "items-center" : "",
        alignClasses[align] ?? alignClasses.left,
        className,
      )}
      style={{
        borderRadius: `${radius}px`,
        padding: `${padding}px`,
        gap: `${gap}px`,
        color: ink === "inherit" ? undefined : ink,
        backgroundColor: surface === "transparent" ? undefined : surface,
      }}
    >
      {showArt ? (
        <span className="size-12 rounded-full" style={{ backgroundColor: accent, opacity: 0.15 }} />
      ) : null}
      <span className="text-sm font-semibold">{heading}</span>
      <span className="max-w-xs text-xs opacity-70">{body}</span>
      {showAction ? (
        <a
          href={actionHref || undefined}
          className="rounded-md px-3 py-1.5 text-xs font-medium"
          style={{ backgroundColor: accent, color: "var(--color-background)" }}
        >
          {actionLabel}
        </a>
      ) : null}
    </div>
  );
}

export { EmptyStatePage, type EmptyStatePageProps };

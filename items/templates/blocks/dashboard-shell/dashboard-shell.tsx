import { cn } from "@/lib/utils";

/** Single source of defaults. The registry rewrites this literal when exporting a customised copy. */
const defaults = {
  title: "Overview",
  navLabel: "Workspace",
  metricOne: "Revenue",
  metricTwo: "Active users",
  metricThree: "Churn",
  align: "left",
  radius: 12,
  padding: 20,
  gap: 12,
  accent: "#09090b",
  ink: "inherit",
  showSidebar: true,
  showTopBar: true,
  surface: "transparent",
};

type DashboardShellProps = Partial<typeof defaults> & {
  className?: string;
};

// Text alignment only: the wrapper is a flex column, so `items-*` here would collapse child widths.
const alignClasses: Record<string, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

function DashboardShell({ className, ...props }: DashboardShellProps) {
  const {
    title,
    navLabel,
    metricOne,
    metricTwo,
    metricThree,
    align,
    radius,
    padding,
    gap,
    accent,
    ink,
    showSidebar,
    showTopBar,
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
      <div className="flex h-full w-full" style={{ gap: `${gap}px` }}>
        {showSidebar ? (
          <div
            className="flex w-1/5 flex-col gap-2 p-2 ring-1 ring-current/10"
            style={{ borderRadius: `${radius}px` }}
          >
            <span className="text-[10px] tracking-wide uppercase opacity-60">{navLabel}</span>
            <div className="h-1.5 w-4/5 rounded-full bg-current/15" />
            <div className="h-1.5 w-3/5 rounded-full bg-current/15" />
          </div>
        ) : null}
        <div className="flex flex-1 flex-col" style={{ gap: `${gap}px` }}>
          {showTopBar ? (
            <div
              className="flex items-center px-3 py-2 ring-1 ring-current/10"
              style={{ borderRadius: `${radius}px` }}
            >
              <span className="text-xs font-medium">{title}</span>
            </div>
          ) : null}
          <div className="grid flex-1 grid-cols-3" style={{ gap: `${gap}px` }}>
            {[metricOne, metricTwo, metricThree].map((metric) => (
              <div
                key={metric}
                className="flex flex-col justify-between p-2 ring-1 ring-current/10"
                style={{ borderRadius: `${radius}px` }}
              >
                <span className="text-[10px] opacity-60">{metric}</span>
                <span className="text-sm font-semibold" style={{ color: accent }}>
                  &mdash;
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { DashboardShell, type DashboardShellProps };

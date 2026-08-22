import { cn } from "@/lib/utils";

/** Single source of defaults. The registry rewrites this literal when exporting a customised copy. */
const defaults = {
  heading: "Everything you need",
  featureLabel: "Feature",
  columns: 3,
  align: "left",
  radius: 10,
  padding: 20,
  gap: 10,
  accent: "#09090b",
  ink: "inherit",
  showHeading: true,
  surface: "transparent",
};

type FeatureGridProps = Partial<typeof defaults> & {
  className?: string;
};

// Text alignment only: the wrapper is a flex column, so `items-*` here would collapse child widths.
const alignClasses: Record<string, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

function FeatureGrid({ className, ...props }: FeatureGridProps) {
  const {
    heading,
    featureLabel,
    columns,
    align,
    radius,
    padding,
    gap,
    accent,
    ink,
    showHeading,
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
      {showHeading ? <h2 className="text-sm font-semibold">{heading}</h2> : null}
      <div
        className="grid w-full flex-1"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gap: `${gap}px` }}
      >
        {Array.from({ length: columns * 2 }, (_unused, cell) => (
          <div
            key={cell}
            className="flex flex-col gap-1 p-2 ring-1 ring-current/10"
            style={{ borderRadius: `${radius}px` }}
          >
            <span className="size-3 rounded" style={{ backgroundColor: accent }} />
            <span className="text-[10px] opacity-70">{featureLabel}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export { FeatureGrid, type FeatureGridProps };

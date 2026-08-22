import { cn } from "@/lib/utils";

/** Single source of defaults. The registry rewrites this literal when exporting a customised copy. */
const defaults = {
  heading: "Settings",
  sectionOne: "General",
  sectionTwo: "Notifications",
  rowOne: "Workspace name",
  rowTwo: "Email digests",
  align: "left",
  radius: 10,
  padding: 20,
  gap: 12,
  accent: "#09090b",
  ink: "inherit",
  showNav: true,
  surface: "transparent",
};

type SettingsPageProps = Partial<typeof defaults> & {
  className?: string;
};

// Text alignment only: the wrapper is a flex column, so `items-*` here would collapse child widths.
const alignClasses: Record<string, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

function SettingsPage({ className, ...props }: SettingsPageProps) {
  const {
    heading,
    sectionOne,
    sectionTwo,
    rowOne,
    rowTwo,
    align,
    radius,
    padding,
    gap,
    accent,
    ink,
    showNav,
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
        {showNav ? (
          <div className="flex w-1/4 flex-col gap-1.5">
            <span className="text-xs font-medium">{heading}</span>
            <span className="text-[11px] opacity-60">{sectionOne}</span>
            <span className="text-[11px] opacity-60">{sectionTwo}</span>
          </div>
        ) : null}
        <div className="flex flex-1 flex-col" style={{ gap: `${gap}px` }}>
          {[rowOne, rowTwo].map((row) => (
            <div key={row} className="flex items-center justify-between gap-2">
              <span className="text-[11px] opacity-70">{row}</span>
              <span
                className="h-4 w-9 rounded-full"
                style={{ backgroundColor: accent, opacity: 0.75 }}
              />
            </div>
          ))}
          <div className="h-16 ring-1 ring-current/10" style={{ borderRadius: `${radius}px` }} />
        </div>
      </div>
    </div>
  );
}

export { SettingsPage, type SettingsPageProps };

import { cn } from "@/lib/utils";

/** Single source of defaults. The registry rewrites this literal when exporting a customised copy. */
const defaults = {
  headline: "Build faster with Stark",
  subhead: "A production-ready starting point for your next product surface.",
  primaryLabel: "Get started",
  secondaryLabel: "Read the docs",
  primaryHref: "",
  align: "center",
  radius: 12,
  padding: 32,
  gap: 12,
  surface: "transparent",
  ink: "inherit",
  accent: "#09090b",
  showSecondary: true,
  showEyebrow: true,
  eyebrow: "Introducing",
};

type LandingHeroProps = Partial<typeof defaults> & {
  className?: string;
};

// Text alignment only: the wrapper is a flex column, so `items-*` here would collapse child widths.
const alignClasses: Record<string, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

function LandingHero({ className, ...props }: LandingHeroProps) {
  const {
    headline,
    subhead,
    primaryLabel,
    secondaryLabel,
    primaryHref,
    align,
    radius,
    padding,
    gap,
    surface,
    ink,
    accent,
    showSecondary,
    showEyebrow,
    eyebrow,
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
      {showEyebrow ? (
        <span className="text-[11px] tracking-[0.28em] uppercase opacity-70">{eyebrow}</span>
      ) : null}
      <h1 className="text-2xl font-semibold tracking-tight">{headline}</h1>
      <p className="max-w-md text-sm opacity-70">{subhead}</p>
      <div className="mt-1 flex flex-wrap items-center gap-2">
        <a
          href={primaryHref || undefined}
          className="rounded-md px-4 py-2 text-xs font-medium"
          style={{ backgroundColor: accent, color: "var(--color-background)" }}
        >
          {primaryLabel}
        </a>
        {showSecondary ? (
          <span className="rounded-md px-4 py-2 text-xs font-medium ring-1 ring-current/20">
            {secondaryLabel}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export { LandingHero, type LandingHeroProps };

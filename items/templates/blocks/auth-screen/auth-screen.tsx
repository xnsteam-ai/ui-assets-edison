import { cn } from "@/lib/utils";

/** Single source of defaults. The registry rewrites this literal when exporting a customised copy. */
const defaults = {
  heading: "Sign in",
  subhead: "Welcome back. Enter your details to continue.",
  submitLabel: "Continue",
  providerLabel: "Continue with SSO",
  align: "left",
  radius: 12,
  padding: 24,
  gap: 10,
  accent: "#09090b",
  ink: "inherit",
  showProvider: true,
  showSubhead: true,
  surface: "transparent",
};

type AuthScreenProps = Partial<typeof defaults> & {
  className?: string;
};

// Text alignment only: the wrapper is a flex column, so `items-*` here would collapse child widths.
const alignClasses: Record<string, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

function AuthScreen({ className, ...props }: AuthScreenProps) {
  const {
    heading,
    subhead,
    submitLabel,
    providerLabel,
    align,
    radius,
    padding,
    gap,
    accent,
    ink,
    showProvider,
    showSubhead,
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
      <div
        className="flex w-full max-w-xs flex-col p-4 ring-1 ring-current/10"
        style={{ borderRadius: `${radius}px`, gap: `${gap}px` }}
      >
        <span className="text-base font-semibold">{heading}</span>
        {showSubhead ? <span className="text-xs opacity-70">{subhead}</span> : null}
        <div className="h-8 rounded-md bg-current/10" />
        <div className="h-8 rounded-md bg-current/10" />
        <span
          className="rounded-md px-3 py-2 text-center text-xs font-medium"
          style={{ backgroundColor: accent, color: "var(--color-background)" }}
        >
          {submitLabel}
        </span>
        {showProvider ? (
          <span className="rounded-md px-3 py-2 text-center text-xs ring-1 ring-current/20">
            {providerLabel}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export { AuthScreen, type AuthScreenProps };

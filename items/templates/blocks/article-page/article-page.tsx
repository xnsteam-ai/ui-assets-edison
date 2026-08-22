import { cn } from "@/lib/utils";

/** Single source of defaults. The registry rewrites this literal when exporting a customised copy. */
const defaults = {
  title: "Designing a registry that scales",
  meta: "8 min read",
  body: "Long-form reading layout with a comfortable measure and a clear hierarchy.",
  align: "left",
  radius: 10,
  padding: 28,
  gap: 8,
  accent: "#09090b",
  ink: "inherit",
  showMeta: true,
  showCover: true,
  surface: "transparent",
};

type ArticlePageProps = Partial<typeof defaults> & {
  className?: string;
};

// Text alignment only: the wrapper is a flex column, so `items-*` here would collapse child widths.
const alignClasses: Record<string, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

function ArticlePage({ className, ...props }: ArticlePageProps) {
  const {
    title,
    meta,
    body,
    align,
    radius,
    padding,
    gap,
    accent,
    ink,
    showMeta,
    showCover,
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
      <h1 className="text-lg font-semibold tracking-tight">{title}</h1>
      {showMeta ? <span className="text-[11px] opacity-60">{meta}</span> : null}
      {showCover ? (
        <div
          className="h-16 w-full"
          style={{ borderRadius: `${radius}px`, backgroundColor: accent, opacity: 0.15 }}
        />
      ) : null}
      <p className="max-w-prose text-xs leading-relaxed opacity-75">{body}</p>
    </div>
  );
}

export { ArticlePage, type ArticlePageProps };

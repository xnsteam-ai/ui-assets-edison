import { cn } from "@/lib/utils";

/** Single source of defaults. The registry rewrites this literal when exporting a customised copy. */
const defaults = {
  heading: "Simple pricing",
  planOne: "Starter",
  planTwo: "Team",
  planThree: "Scale",
  priceOne: "$0",
  priceTwo: "$24",
  priceThree: "$96",
  ctaLabel: "Choose plan",
  align: "center",
  radius: 12,
  padding: 24,
  gap: 12,
  accent: "#09090b",
  ink: "inherit",
  showHeading: true,
  highlightMiddle: true,
  surface: "transparent",
};

type PricingTableProps = Partial<typeof defaults> & {
  className?: string;
};

// Text alignment only: the wrapper is a flex column, so `items-*` here would collapse child widths.
const alignClasses: Record<string, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

function PricingTable({ className, ...props }: PricingTableProps) {
  const {
    heading,
    planOne,
    planTwo,
    planThree,
    priceOne,
    priceTwo,
    priceThree,
    ctaLabel,
    align,
    radius,
    padding,
    gap,
    accent,
    ink,
    showHeading,
    highlightMiddle,
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
      {showHeading ? <h2 className="text-lg font-semibold tracking-tight">{heading}</h2> : null}
      <div className="flex w-full items-stretch" style={{ gap: `${gap}px` }}>
        {[
          { name: planOne, price: priceOne, featured: false },
          { name: planTwo, price: priceTwo, featured: highlightMiddle },
          { name: planThree, price: priceThree, featured: false },
        ].map((plan) => (
          <div
            key={plan.name}
            className="flex flex-1 flex-col gap-2 p-3 ring-1 ring-current/10"
            style={{
              borderRadius: `${radius}px`,
              backgroundColor: plan.featured ? accent : "transparent",
              color: plan.featured ? "var(--color-background)" : undefined,
            }}
          >
            <span className="text-[11px] tracking-wide uppercase opacity-70">{plan.name}</span>
            <span className="text-xl font-semibold">{plan.price}</span>
            <span className="mt-auto rounded-md px-2 py-1.5 text-[11px] ring-1 ring-current/20">
              {ctaLabel}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export { PricingTable, type PricingTableProps };

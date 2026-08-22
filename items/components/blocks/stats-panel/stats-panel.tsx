import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { ExampleCard } from "../../components/example-card/example-card";
import { stats } from "./stats-data";

/** Single source of defaults. The registry rewrites this literal when exporting a customised copy. */
const defaults = {
  panelTitle: "Registry health",
  cardTitle: "Registry starter",
  cardDescription: "Compose local registry items with shadcn dependencies.",
  cardStatus: "Block",
  gap: 16,
  radius: 10,
  accent: "#09090b",
  showCard: true,
  showBadges: true,
};

type StatsPanelProps = Partial<typeof defaults> & {
  className?: string;
};

function StatsPanel({ className, ...props }: StatsPanelProps) {
  const {
    panelTitle,
    cardTitle,
    cardDescription,
    cardStatus,
    gap,
    radius,
    accent,
    showCard,
    showBadges,
  } = { ...defaults, ...props };

  return (
    <div
      className={cn(
        "grid w-full max-w-3xl",
        showCard ? "md:grid-cols-[1fr_1.2fr]" : "md:grid-cols-1",
        className,
      )}
      style={{ gap: `${gap}px` }}
    >
      {showCard ? (
        <ExampleCard
          title={cardTitle}
          description={cardDescription}
          status={cardStatus}
          radius={radius}
        />
      ) : null}
      <Card style={{ borderRadius: `${radius}px` }}>
        <CardHeader>
          <CardTitle>{panelTitle}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center justify-between gap-4 border p-3"
              style={{ borderRadius: `${radius}px` }}
            >
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium">{stat.label}</span>
                <span className="text-sm text-muted-foreground">{stat.detail}</span>
              </div>
              {showBadges ? (
                <Badge variant="secondary" style={{ color: accent }}>
                  {stat.value}
                </Badge>
              ) : null}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export { StatsPanel, type StatsPanelProps };

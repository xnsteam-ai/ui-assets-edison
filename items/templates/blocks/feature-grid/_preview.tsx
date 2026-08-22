"use client";

import { FeatureGrid, type FeatureGridProps } from "./feature-grid";

export function Preview(props: FeatureGridProps) {
  return <FeatureGrid className="h-full" {...props} />;
}

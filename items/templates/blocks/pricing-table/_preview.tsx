"use client";

import { PricingTable, type PricingTableProps } from "./pricing-table";

export function Preview(props: PricingTableProps) {
  return <PricingTable className="h-full" {...props} />;
}

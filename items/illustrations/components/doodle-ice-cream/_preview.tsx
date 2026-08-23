"use client";

import { DoodleIceCream } from "./doodle-ice-cream";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleIceCream className="size-full" {...props} />;
}

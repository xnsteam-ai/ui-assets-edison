"use client";

import { DoodleStrolling } from "./doodle-strolling";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleStrolling className="size-full" {...props} />;
}

"use client";

import { DoodleReading } from "./doodle-reading";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleReading className="size-full" {...props} />;
}

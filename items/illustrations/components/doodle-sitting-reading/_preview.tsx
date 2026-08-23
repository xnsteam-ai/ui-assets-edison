"use client";

import { DoodleSittingReading } from "./doodle-sitting-reading";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleSittingReading className="size-full" {...props} />;
}

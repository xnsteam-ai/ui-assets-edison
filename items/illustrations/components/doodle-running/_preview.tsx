"use client";

import { DoodleRunning } from "./doodle-running";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleRunning className="size-full" {...props} />;
}

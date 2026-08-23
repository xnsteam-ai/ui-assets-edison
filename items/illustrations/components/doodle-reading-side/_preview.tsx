"use client";

import { DoodleReadingSide } from "./doodle-reading-side";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleReadingSide className="size-full" {...props} />;
}

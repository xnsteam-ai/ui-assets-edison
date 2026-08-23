"use client";

import { DoodleSleek } from "./doodle-sleek";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleSleek className="size-full" {...props} />;
}

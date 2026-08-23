"use client";

import { DoodleMeditating } from "./doodle-meditating";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleMeditating className="size-full" {...props} />;
}

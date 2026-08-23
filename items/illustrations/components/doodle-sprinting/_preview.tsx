"use client";

import { DoodleSprinting } from "./doodle-sprinting";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleSprinting className="size-full" {...props} />;
}

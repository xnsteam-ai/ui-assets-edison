"use client";

import { DoodlePlant } from "./doodle-plant";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodlePlant className="size-full" {...props} />;
}

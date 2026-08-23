"use client";

import { DoodleRollerSkating } from "./doodle-roller-skating";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleRollerSkating className="size-full" {...props} />;
}

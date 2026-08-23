"use client";

import { DoodleRolling } from "./doodle-rolling";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleRolling className="size-full" {...props} />;
}

"use client";

import { DoodleJumping } from "./doodle-jumping";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleJumping className="size-full" {...props} />;
}

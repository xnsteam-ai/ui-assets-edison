"use client";

import { DoodleZombieing } from "./doodle-zombieing";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleZombieing className="size-full" {...props} />;
}

"use client";

import { DoodleSwinging } from "./doodle-swinging";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleSwinging className="size-full" {...props} />;
}

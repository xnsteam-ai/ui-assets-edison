"use client";

import { DoodleClumsy } from "./doodle-clumsy";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleClumsy className="size-full" {...props} />;
}

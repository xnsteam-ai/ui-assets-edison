"use client";

import { DoodleFloat } from "./doodle-float";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleFloat className="size-full" {...props} />;
}

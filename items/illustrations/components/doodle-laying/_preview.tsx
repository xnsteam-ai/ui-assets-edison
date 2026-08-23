"use client";

import { DoodleLaying } from "./doodle-laying";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleLaying className="size-full" {...props} />;
}

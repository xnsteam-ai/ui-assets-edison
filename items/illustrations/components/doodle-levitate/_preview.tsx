"use client";

import { DoodleLevitate } from "./doodle-levitate";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleLevitate className="size-full" {...props} />;
}

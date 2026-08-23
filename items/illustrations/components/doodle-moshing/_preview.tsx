"use client";

import { DoodleMoshing } from "./doodle-moshing";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleMoshing className="size-full" {...props} />;
}

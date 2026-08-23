"use client";

import { DoodleSitting } from "./doodle-sitting";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleSitting className="size-full" {...props} />;
}

"use client";

import { DoodleBallet } from "./doodle-ballet";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleBallet className="size-full" {...props} />;
}

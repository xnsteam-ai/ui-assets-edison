"use client";

import { DoodleBikini } from "./doodle-bikini";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleBikini className="size-full" {...props} />;
}

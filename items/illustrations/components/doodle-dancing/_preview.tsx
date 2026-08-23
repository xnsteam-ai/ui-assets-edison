"use client";

import { DoodleDancing } from "./doodle-dancing";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleDancing className="size-full" {...props} />;
}

"use client";

import { DoodleDoggie } from "./doodle-doggie";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleDoggie className="size-full" {...props} />;
}

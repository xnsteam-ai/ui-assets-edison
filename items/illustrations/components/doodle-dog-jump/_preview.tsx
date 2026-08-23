"use client";

import { DoodleDogJump } from "./doodle-dog-jump";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleDogJump className="size-full" {...props} />;
}

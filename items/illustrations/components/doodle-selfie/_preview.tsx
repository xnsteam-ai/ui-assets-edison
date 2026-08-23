"use client";

import { DoodleSelfie } from "./doodle-selfie";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleSelfie className="size-full" {...props} />;
}

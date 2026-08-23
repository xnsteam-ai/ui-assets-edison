"use client";

import { DoodleChilling } from "./doodle-chilling";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleChilling className="size-full" {...props} />;
}

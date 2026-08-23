"use client";

import { DoodleUnboxing } from "./doodle-unboxing";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleUnboxing className="size-full" {...props} />;
}

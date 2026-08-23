"use client";

import { DoodleLoving } from "./doodle-loving";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleLoving className="size-full" {...props} />;
}

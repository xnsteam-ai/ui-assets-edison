"use client";

import { DoodleGroovy } from "./doodle-groovy";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleGroovy className="size-full" {...props} />;
}

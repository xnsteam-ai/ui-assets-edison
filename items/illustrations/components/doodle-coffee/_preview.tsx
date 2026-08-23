"use client";

import { DoodleCoffee } from "./doodle-coffee";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodleCoffee className="size-full" {...props} />;
}

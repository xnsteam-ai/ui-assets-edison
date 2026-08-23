"use client";

import { DoodlePetting } from "./doodle-petting";

export function Preview(props: { ink?: string; accent?: string }) {
  return <DoodlePetting className="size-full" {...props} />;
}

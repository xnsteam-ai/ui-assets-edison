"use client";

import { AiLogoDalle } from "./ai-logo-dalle";

export function Preview() {
  return (
    <div className="grid size-full place-items-center bg-white p-[24%]">
      <AiLogoDalle className="size-full" />
    </div>
  );
}

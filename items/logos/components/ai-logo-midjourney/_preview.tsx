"use client";

import { AiLogoMidjourney } from "./ai-logo-midjourney";

export function Preview() {
  return (
    <div className="grid size-full place-items-center bg-white p-[24%]">
      <AiLogoMidjourney className="size-full text-neutral-900" />
    </div>
  );
}

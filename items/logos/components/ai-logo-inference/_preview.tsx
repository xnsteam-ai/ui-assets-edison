"use client";

import { AiLogoInference } from "./ai-logo-inference";

export function Preview() {
  return (
    <div className="grid size-full place-items-center bg-white p-[24%]">
      <AiLogoInference className="size-full text-neutral-900" />
    </div>
  );
}

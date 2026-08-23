"use client";

import { AiLogoOllama } from "./ai-logo-ollama";

export function Preview() {
  return (
    <div className="grid size-full place-items-center bg-white p-[24%]">
      <AiLogoOllama className="size-full text-neutral-900" />
    </div>
  );
}

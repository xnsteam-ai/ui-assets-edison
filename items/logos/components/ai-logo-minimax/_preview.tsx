"use client";

import { AiLogoMinimax } from "./ai-logo-minimax";

export function Preview() {
  return (
    <div className="grid size-full place-items-center bg-white p-[24%]">
      <AiLogoMinimax className="size-full" />
    </div>
  );
}

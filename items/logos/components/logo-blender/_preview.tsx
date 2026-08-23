"use client";

import { LogoBlender } from "./logo-blender";

export function Preview() {
  return (
    <div className="grid size-full place-items-center bg-white p-[24%]">
      <LogoBlender className="size-full" />
    </div>
  );
}

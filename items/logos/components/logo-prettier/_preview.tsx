"use client";

import { LogoPrettier } from "./logo-prettier";

export function Preview() {
  return (
    <div className="grid size-full place-items-center bg-white p-[24%]">
      <LogoPrettier className="size-full" />
    </div>
  );
}

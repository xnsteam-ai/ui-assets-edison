"use client";

import { LogoSvelte } from "./logo-svelte";

export function Preview() {
  return (
    <div className="grid size-full place-items-center bg-white p-[24%]">
      <LogoSvelte className="size-full" />
    </div>
  );
}

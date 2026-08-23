"use client";

import { LogoTailwindcss } from "./logo-tailwindcss";

export function Preview() {
  return (
    <div className="grid size-full place-items-center bg-white p-[24%]">
      <LogoTailwindcss className="size-full" />
    </div>
  );
}

"use client";

import { LogoStorybook } from "./logo-storybook";

export function Preview() {
  return (
    <div className="grid size-full place-items-center bg-white p-[24%]">
      <LogoStorybook className="size-full" />
    </div>
  );
}

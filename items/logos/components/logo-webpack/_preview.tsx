"use client";

import { LogoWebpack } from "./logo-webpack";

export function Preview() {
  return (
    <div className="grid size-full place-items-center bg-white p-[24%]">
      <LogoWebpack className="size-full" />
    </div>
  );
}

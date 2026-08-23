"use client";

import { LogoNeovim } from "./logo-neovim";

export function Preview() {
  return (
    <div className="grid size-full place-items-center bg-white p-[24%]">
      <LogoNeovim className="size-full" />
    </div>
  );
}

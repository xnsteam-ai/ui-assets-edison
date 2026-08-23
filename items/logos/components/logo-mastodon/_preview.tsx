"use client";

import { LogoMastodon } from "./logo-mastodon";

export function Preview() {
  return (
    <div className="grid size-full place-items-center bg-white p-[24%]">
      <LogoMastodon className="size-full" />
    </div>
  );
}

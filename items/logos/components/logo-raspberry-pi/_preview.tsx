"use client";

import { LogoRaspberryPi } from "./logo-raspberry-pi";

export function Preview() {
  return (
    <div className="grid size-full place-items-center bg-white p-[24%]">
      <LogoRaspberryPi className="size-full" />
    </div>
  );
}

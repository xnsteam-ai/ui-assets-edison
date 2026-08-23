/**
 * make logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The make name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoMake({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="make"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M6.989 4.036L.062 17.818a.577.577 0 00.257.774l3.733 1.876a.577.577 0 00.775-.256L11.753 6.43a.577.577 0 00-.257-.775L7.763 3.78a.575.575 0 00-.774.257z" fill="url(#make-lobe-icons-make-0-_R_0_)">
      </path>
      <path d="M19.245 3.832h4.179c.318 0 .577.26.577.577v15.425a.578.578 0 01-.577.578h-4.179a.578.578 0 01-.577-.578V4.41c0-.318.259-.577.577-.577z" fill="url(#make-lobe-icons-make-1-_R_0_)">
      </path>
      <path d="M12.815 4.085L9.85 19.108a.576.576 0 00.453.677l4.095.826c.314.063.62-.14.681-.454l2.964-15.022a.577.577 0 00-.453-.677l-4.096-.827a.577.577 0 00-.68.454z" fill="url(#make-lobe-icons-make-2-_R_0_)">
      </path>
      <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id="make-lobe-icons-make-0-_R_0_" x1="1.5" x2="12" y1="19.5" y2="0">
      <stop stopColor="#F0F">
      </stop>
      <stop offset=".17" stopColor="#E90CF9">
      </stop>
      <stop offset=".54" stopColor="#C023ED">
      </stop>
      <stop offset=".73" stopColor="#B02DE9">
      </stop>
      <stop offset="1" stopColor="#B02DE9">
      </stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="make-lobe-icons-make-1-_R_0_" x1="0" x2="24" y1="24" y2="0">
      <stop stopColor="#B02DE9">
      </stop>
      <stop offset=".02" stopColor="#B02DE9">
      </stop>
      <stop offset=".8" stopColor="#6D00CC">
      </stop>
      <stop offset="1" stopColor="#6D00CC">
      </stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="make-lobe-icons-make-2-_R_0_" x1="0" x2="24" y1="24" y2="0">
      <stop stopColor="#F0F">
      </stop>
      <stop offset=".02" stopColor="#F0F">
      </stop>
      <stop offset=".09" stopColor="#E90CF9">
      </stop>
      <stop offset=".23" stopColor="#C023ED">
      </stop>
      <stop offset=".3" stopColor="#B02DE9">
      </stop>
      <stop offset=".42" stopColor="#A42BE3">
      </stop>
      <stop offset=".63" stopColor="#8626D5">
      </stop>
      <stop offset=".85" stopColor="#6021C3">
      </stop>
      <stop offset="1" stopColor="#6021C3">
      </stop>
      </linearGradient>
      </defs>
    </svg>
  );
}

export { AiLogoMake };

/**
 * codeflicker logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The codeflicker name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoCodeflicker({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="codeflicker"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M4.707 6.24V3.5H0v16.977h4.707v-2.74H2.94V6.24h1.766z">
      </path>
      <path d="M20.868 3.5h-1.575v2.74h1.775v11.497h-1.775v2.74H24V3.5h-3.132zM13.22 3.5l-.55 3.082H9.623l.541-3.082h3.057zM14.395 8.398l-2.133 12.08H9.213l2.125-12.08h3.057z" fill="#32EDDA">
      </path>
      <path d="M14.395 8.398l-2.133 12.08h7.031v-2.741h1.775V8.398h-6.673z" fill="url(#codeflicker-lobe-icons-code-flicker-0-_R_0_)">
      </path>
      <path d="M9.622 6.583l1.716 1.816h3.057l-1.724-1.816H9.62z" fill="url(#codeflicker-lobe-icons-code-flicker-1-_R_0_)">
      </path>
      <path d="M13.22 3.5h6.073v2.74h1.775v2.158h-6.673L12.67 6.582l.55-3.082z" fill="url(#codeflicker-lobe-icons-code-flicker-2-_R_0_)">
      </path>
      <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id="codeflicker-lobe-icons-code-flicker-0-_R_0_" x1="10.505" x2="20.36" y1="13.772" y2="14.838">
      <stop stopColor="#32EDDA">
      </stop>
      <stop offset=".09" stopColor="#48EEDD" stopOpacity=".89">
      </stop>
      <stop offset=".43" stopColor="#95F5EB" stopOpacity=".51">
      </stop>
      <stop offset=".7" stopColor="#CEFAF6" stopOpacity=".24">
      </stop>
      <stop offset=".9" stopColor="#F1FDFC" stopOpacity=".07">
      </stop>
      <stop offset="1" stopColor="#fff" stopOpacity="0">
      </stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="codeflicker-lobe-icons-code-flicker-1-_R_0_" x1="11.854" x2="12.321" y1="6.258" y2="9.998">
      <stop offset=".01" stopColor="#32EDDA">
      </stop>
      <stop offset=".06" stopColor="#4CEFDE" stopOpacity=".87">
      </stop>
      <stop offset=".15" stopColor="#76F2E6" stopOpacity=".67">
      </stop>
      <stop offset=".25" stopColor="#9AF6EC" stopOpacity=".49">
      </stop>
      <stop offset=".35" stopColor="#B9F8F2" stopOpacity=".34">
      </stop>
      <stop offset=".45" stopColor="#D3FBF7" stopOpacity=".21">
      </stop>
      <stop offset=".56" stopColor="#E6FCFA" stopOpacity=".12">
      </stop>
      <stop offset=".68" stopColor="#F4FEFD" stopOpacity=".05">
      </stop>
      <stop offset=".82" stopColor="#FCFEFE" stopOpacity=".01">
      </stop>
      <stop offset="1" stopColor="#fff" stopOpacity="0">
      </stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="codeflicker-lobe-icons-code-flicker-2-_R_0_" x1="13.112" x2="20.41" y1="2.9" y2="8.873">
      <stop stopColor="#32EDDA">
      </stop>
      <stop offset=".1" stopColor="#5BF0E1" stopOpacity=".8">
      </stop>
      <stop offset=".23" stopColor="#86F4E9" stopOpacity=".59">
      </stop>
      <stop offset=".35" stopColor="#ABF7EF" stopOpacity=".41">
      </stop>
      <stop offset=".48" stopColor="#C9FAF5" stopOpacity=".26">
      </stop>
      <stop offset=".6" stopColor="#E1FCF9" stopOpacity=".15">
      </stop>
      <stop offset=".73" stopColor="#F1FDFC" stopOpacity=".06">
      </stop>
      <stop offset=".86" stopColor="#FBFEFE" stopOpacity=".02">
      </stop>
      <stop offset="1" stopColor="#fff" stopOpacity="0">
      </stop>
      </linearGradient>
      </defs>
    </svg>
  );
}

export { AiLogoCodeflicker };

/**
 * Azure logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The Azure name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoAzure({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Azure"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M7.242 1.613A1.11 1.11 0 018.295.857h6.977L8.03 22.316a1.11 1.11 0 01-1.052.755h-5.43a1.11 1.11 0 01-1.053-1.466L7.242 1.613z" fill="url(#azure-lobe-icons-azure-0-_R_0_)">
      </path>
      <path d="M18.397 15.296H7.4a.51.51 0 00-.347.882l7.066 6.595c.206.192.477.298.758.298h6.226l-2.706-7.775z" fill="#0078D4">
      </path>
      <path d="M15.272.857H7.497L0 23.071h7.775l1.596-4.73 5.068 4.73h6.665l-2.707-7.775h-7.998L15.272.857z" fill="url(#azure-lobe-icons-azure-1-_R_0_)">
      </path>
      <path d="M17.193 1.613a1.11 1.11 0 00-1.052-.756h-7.81.035c.477 0 .9.304 1.052.756l6.748 19.992a1.11 1.11 0 01-1.052 1.466h-.12 7.895a1.11 1.11 0 001.052-1.466L17.193 1.613z" fill="url(#azure-lobe-icons-azure-2-_R_0_)">
      </path>
      <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id="azure-lobe-icons-azure-0-_R_0_" x1="8.247" x2="1.002" y1="1.626" y2="23.03">
      <stop stopColor="#114A8B">
      </stop>
      <stop offset="1" stopColor="#0669BC">
      </stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="azure-lobe-icons-azure-1-_R_0_" x1="14.042" x2="12.324" y1="15.302" y2="15.888">
      <stop stopOpacity=".3">
      </stop>
      <stop offset=".071" stopOpacity=".2">
      </stop>
      <stop offset=".321" stopOpacity=".1">
      </stop>
      <stop offset=".623" stopOpacity=".05">
      </stop>
      <stop offset="1" stopOpacity="0">
      </stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="azure-lobe-icons-azure-2-_R_0_" x1="12.841" x2="20.793" y1="1.626" y2="22.814">
      <stop stopColor="#3CCBF4">
      </stop>
      <stop offset="1" stopColor="#2892DF">
      </stop>
      </linearGradient>
      </defs>
    </svg>
  );
}

export { AiLogoAzure };

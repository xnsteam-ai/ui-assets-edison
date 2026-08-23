/**
 * Azure AI logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The Azure AI name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoAzureai({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Azure AI"
      className={cn("size-6", className)}
      {...props}
    >
      <path clipRule="evenodd" d="M16.233 0c.713 0 1.345.551 1.572 1.329.227.778 1.555 5.59 1.555 5.59v9.562h-4.813L14.645 0h1.588z" fill="url(#azureai-lobe-icons-azure-ai-0-_R_0_)" fillRule="evenodd">
      </path>
      <path d="M23.298 7.47c0-.34-.275-.6-.6-.6h-2.835a3.617 3.617 0 00-3.614 3.615v5.996h3.436a3.617 3.617 0 003.613-3.614V7.47z" fill="url(#azureai-lobe-icons-azure-ai-1-_R_0_)">
      </path>
      <path clipRule="evenodd" d="M16.233 0a.982.982 0 00-.989.989l-.097 18.198A4.814 4.814 0 0110.334 24H1.6a.597.597 0 01-.567-.794l7-19.981A4.819 4.819 0 0112.57 0h3.679-.016z" fill="url(#azureai-lobe-icons-azure-ai-2-_R_0_)" fillRule="evenodd">
      </path>
      <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id="azureai-lobe-icons-azure-ai-0-_R_0_" x1="18.242" x2="14.191" y1="16.837" y2=".616">
      <stop stopColor="#712575">
      </stop>
      <stop offset=".09" stopColor="#9A2884">
      </stop>
      <stop offset=".18" stopColor="#BF2C92">
      </stop>
      <stop offset=".27" stopColor="#DA2E9C">
      </stop>
      <stop offset=".34" stopColor="#EB30A2">
      </stop>
      <stop offset=".4" stopColor="#F131A5">
      </stop>
      <stop offset=".5" stopColor="#EC30A3">
      </stop>
      <stop offset=".61" stopColor="#DF2F9E">
      </stop>
      <stop offset=".72" stopColor="#C92D96">
      </stop>
      <stop offset=".83" stopColor="#AA2A8A">
      </stop>
      <stop offset=".95" stopColor="#83267C">
      </stop>
      <stop offset="1" stopColor="#712575">
      </stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="azureai-lobe-icons-azure-ai-1-_R_0_" x1="19.782" x2="19.782" y1=".34" y2="23.222">
      <stop stopColor="#DA7ED0">
      </stop>
      <stop offset=".08" stopColor="#B17BD5">
      </stop>
      <stop offset=".19" stopColor="#8778DB">
      </stop>
      <stop offset=".3" stopColor="#6276E1">
      </stop>
      <stop offset=".41" stopColor="#4574E5">
      </stop>
      <stop offset=".54" stopColor="#2E72E8">
      </stop>
      <stop offset=".67" stopColor="#1D71EB">
      </stop>
      <stop offset=".81" stopColor="#1471EC">
      </stop>
      <stop offset="1" stopColor="#1171ED">
      </stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="azureai-lobe-icons-azure-ai-2-_R_0_" x1="18.404" x2="3.236" y1=".859" y2="25.183">
      <stop stopColor="#DA7ED0">
      </stop>
      <stop offset=".05" stopColor="#B77BD4">
      </stop>
      <stop offset=".11" stopColor="#9079DA">
      </stop>
      <stop offset=".18" stopColor="#6E77DF">
      </stop>
      <stop offset=".25" stopColor="#5175E3">
      </stop>
      <stop offset=".33" stopColor="#3973E7">
      </stop>
      <stop offset=".42" stopColor="#2772E9">
      </stop>
      <stop offset=".54" stopColor="#1A71EB">
      </stop>
      <stop offset=".68" stopColor="#1371EC">
      </stop>
      <stop offset="1" stopColor="#1171ED">
      </stop>
      </linearGradient>
      </defs>
    </svg>
  );
}

export { AiLogoAzureai };

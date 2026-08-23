/**
 * Logstash logo.
 *
 * Artwork from gilbarbara/logos — CC0-1.0, dedicated to the public domain.
 * https://github.com/gilbarbara/logos
 *
 * The Logstash name and logo are trademarks of their respective owner, reproduced here to
 * identify them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function LogoLogstash({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 256 307"
      role="img"
      aria-label="Logstash"
      className={cn("size-6", className)}
      {...props}
    >
      <g>
        <path d="M122.434516,189.21698 L0,189.21698 L0,0 L11.1304106,0 C72.6036683,0 122.434516,49.8308482 122.434516,111.304106 L122.434516,189.21698 Z" fill="#FEC514">
      </path>
        <path d="M116.869311,306.086291 L122.434516,306.086291 L122.434516,189.21698 L0,189.21698 C0,253.762231 52.3240602,306.086291 116.869311,306.086291" fill="#343741">
      </path>
        <polygon fill="#00BFB3" points="150.261099 306.086291 256 306.086291 256 189.21698 150.261099 189.21698">
      </polygon>
    </g>
    </svg>
  );
}

export { LogoLogstash };

/**
 * Kibana logo.
 *
 * Artwork from gilbarbara/logos — CC0-1.0, dedicated to the public domain.
 * https://github.com/gilbarbara/logos
 *
 * The Kibana name and logo are trademarks of their respective owner, reproduced here to
 * identify them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function LogoKibana({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 256 328"
      role="img"
      aria-label="Kibana"
      className={cn("size-6", className)}
      {...props}
    >
      <g>
        <polygon fill="#F04E98" points="256 0 -4.7684239e-17 0 2.20275616e-13 294.78912">
      </polygon>
        <path d="M2.27373675e-13,122.88 L2.27373675e-13,294.78912 L122.19392,154.08128 C85.8624,134.27712 44.288,122.88 2.27373675e-13,122.88" fill="#343741">
      </path>
        <path d="M148.589568,170.540032 L23.200768,314.944512 L12.131328,327.683072 L250.866688,327.683072 C237.769728,263.130112 200.301568,207.496192 148.589568,170.540032" fill="#00BFB3">
      </path>
    </g>
    </svg>
  );
}

export { LogoKibana };

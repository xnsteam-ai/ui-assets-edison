/**
 * Terraform logo.
 *
 * Artwork from gilbarbara/logos — CC0-1.0, dedicated to the public domain.
 * https://github.com/gilbarbara/logos
 *
 * The Terraform name and logo are trademarks of HashiCorp (https://www.terraform.io). They are
 * reproduced here to identify HashiCorp, and remain the property of their owner. Check their
 * brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function LogoTerraform({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 256 291"
      role="img"
      aria-label="Terraform"
      className={cn("size-6", className)}
      {...props}
    >
      <g>
        <polygon fill="#4040B2" points="176.485057 188.994162 256.000302 143.127442 256.000302 51.2485453 176.485057 97.2122358">
      </polygon>
        <path d="M88.2425283,51.2485453 L167.757774,97.2122358 L167.757774,188.994162 L88.2425283,143.078957 M0,91.8304113 L79.5152453,137.745617 L79.5152453,45.9152057 L0,0 M88.2425283,244.994228 L167.757774,290.909434 L167.757774,199.079023 L88.2425283,153.163817" fill="#5C4EE5">
      </path>
    </g>
    </svg>
  );
}

export { LogoTerraform };

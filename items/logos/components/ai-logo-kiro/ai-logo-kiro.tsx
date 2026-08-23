/**
 * kiro logo.
 *
 * Artwork from @lobehub/icons-static-svg — MIT licensed.
 * https://github.com/lobehub/lobe-icons
 *
 * The kiro name and logo are trademarks of their respective owner, reproduced here to identify
 * them. Check the owner's brand guidelines before using the mark in your own product.
 */

import type * as React from "react";

import { cn } from "@/lib/utils";

function AiLogoKiro({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="kiro"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M18.8 0H5.2A5.2 5.2 0 000 5.2v13.6A5.2 5.2 0 005.2 24h13.6a5.2 5.2 0 005.2-5.2V5.2A5.2 5.2 0 0018.8 0z" fill="#9046FF">
      </path>
      <path d="M7.97 16.376c-1.644 3.642 1.86 4.556 4.443 2.424.76 2.39 3.608.607 4.631-1.247 2.251-4.084 1.342-8.249 1.108-9.108-1.6-5.859-9.6-5.869-10.976.03-.323 1.033-.328 2.206-.507 3.423-.09.617-.16 1.009-.393 1.655-.139.373-.323.7-.62 1.257-.458.865-.264 2.53 2.101 1.665l.224-.1h-.01l-.001.001z" fill="#fff">
      </path>
      <path d="M12.722 10.985c-.656 0-.755-.785-.755-1.252 0-.423.074-.756.218-.97a.61.61 0 01.537-.283c.229 0 .428.095.567.289.159.218.243.55.243.964 0 .785-.303 1.252-.805 1.252h-.005zm2.703 0c-.656 0-.755-.785-.755-1.252 0-.423.074-.756.219-.97a.61.61 0 01.536-.283c.229 0 .428.095.567.289.159.218.243.55.243.964 0 .785-.303 1.252-.805 1.252h-.005z" fill="currentColor">
      </path>
    </svg>
  );
}

export { AiLogoKiro };

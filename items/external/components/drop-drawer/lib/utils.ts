/**
 * Vendored from DropDrawer by jiaweing — MIT licensed.
 *
 * Source:  https://github.com/jiaweing/DropDrawer
 * Docs:    https://dropdrawer.jiaweing.com
 *
 * Copied verbatim from the project's own published registry item. Copyright remains with the
 * original author; this copy is redistributed under the same MIT licence.
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

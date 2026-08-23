/**
 * Vendored from DropDrawer by jiaweing — MIT licensed.
 *
 * Source:  https://github.com/jiaweing/DropDrawer
 * Docs:    https://dropdrawer.jiaweing.com
 *
 * Copied verbatim from the project's own published registry item. Copyright remains with the
 * original author; this copy is redistributed under the same MIT licence.
 */

import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

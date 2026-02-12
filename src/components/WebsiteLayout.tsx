import { Outlet } from "react-router-dom"

/**
 * Layout for all /website and /website/* routes.
 * Wraps content in the Wander design system scope so tokens and components render correctly.
 */
export function WebsiteLayout() {
  return (
    <div
      data-theme="light"
      className="wander-ds flex flex-col flex-1 min-h-0 min-w-0 overflow-hidden"
    >
      <Outlet />
    </div>
  )
}

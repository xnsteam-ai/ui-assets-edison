"use client";

import { DashboardShell, type DashboardShellProps } from "./dashboard-shell";

export function Preview(props: DashboardShellProps) {
  return <DashboardShell className="h-full" {...props} />;
}

"use client";

import { SettingsPage, type SettingsPageProps } from "./settings-page";

export function Preview(props: SettingsPageProps) {
  return <SettingsPage className="h-full" {...props} />;
}

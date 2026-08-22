"use client";

import { AuthScreen, type AuthScreenProps } from "./auth-screen";

export function Preview(props: AuthScreenProps) {
  return <AuthScreen className="h-full" {...props} />;
}

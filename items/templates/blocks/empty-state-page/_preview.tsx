"use client";

import { EmptyStatePage, type EmptyStatePageProps } from "./empty-state-page";

export function Preview(props: EmptyStatePageProps) {
  return <EmptyStatePage className="h-full" {...props} />;
}

"use client";

import { CopyButton, type CopyButtonProps } from "./copy-button";

export function Preview(props: Partial<CopyButtonProps>) {
  return <CopyButton value="npx shadcn@latest add @assets/copy-button" {...props} />;
}

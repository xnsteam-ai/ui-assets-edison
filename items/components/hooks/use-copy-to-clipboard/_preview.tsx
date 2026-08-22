"use client";

import { Button } from "@/components/ui/button";

import { useCopyToClipboard } from "./use-copy-to-clipboard";

type PreviewProps = {
  buttonLabel?: string;
  copyValue?: string;
  idleMessage?: string;
  copiedMessage?: string;
};

export function Preview({
  buttonLabel = "Copy example command",
  copyValue = "npx shadcn@latest add https://example.com/r/example-card.json",
  idleMessage = "Ready to copy.",
  copiedMessage = "Copied to clipboard.",
}: PreviewProps) {
  const copyState = useCopyToClipboard();

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <Button onClick={() => void copyState.copy(copyValue)}>{buttonLabel}</Button>
      <p className="text-sm text-muted-foreground">
        {copyState.status === "copied" ? copiedMessage : idleMessage}
      </p>
    </div>
  );
}

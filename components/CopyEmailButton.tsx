"use client";

import { useState } from "react";
import Button from "@/components/Button";

const EMAIL = "abdul.kaleem@gmail.com";

export default function CopyEmailButton() {
  const [message, setMessage] = useState("");

  async function copyEmail() {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(EMAIL);
        setMessage("Email address copied.");
        return;
      } catch {
        // Continue to the compatibility fallback.
      }
    }

    const textArea = document.createElement("textarea");
    textArea.value = EMAIL;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.append(textArea);
    textArea.select();

    try {
      if (document.execCommand("copy")) {
        setMessage("Email address copied.");
      } else {
        setMessage(`Copy unavailable. Email ${EMAIL} directly.`);
      }
    } catch {
      setMessage(`Copy unavailable. Email ${EMAIL} directly.`);
    } finally {
      textArea.remove();
    }
  }

  return (
    <div className="flex flex-col items-start gap-tight">
      <Button
        type="button"
        variant="secondary"
        onClick={copyEmail}
        aria-describedby="copy-email-status"
      >
        Copy email address
      </Button>
      <p
        id="copy-email-status"
        role="status"
        aria-live="polite"
        className="min-h-6 text-small text-text-muted"
      >
        {message}
      </p>
    </div>
  );
}

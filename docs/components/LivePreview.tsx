"use client";

import type { ReactNode } from "react";

interface LivePreviewProps {
  children: ReactNode;
  label?: string;
}

export function LivePreview({ children, label }: LivePreviewProps) {
  return (
    <div style={{ margin: "16px 0" }}>
      {label && (
        <div
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: "8px",
            opacity: 0.6,
          }}
        >
          {label}
        </div>
      )}
      <div className="live-preview">{children}</div>
    </div>
  );
}

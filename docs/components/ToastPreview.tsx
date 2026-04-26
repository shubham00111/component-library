"use client";

import type { ReactNode } from "react";

interface ToastPreviewProps {
  children: ReactNode;
  label?: string;
}

/**
 * Wraps Toast variants in a contained block. `contain: layout paint` creates
 * a new containing block for fixed-position descendants, keeping the toast
 * inside this card rather than the viewport.
 */
export function ToastPreview({ children, label }: ToastPreviewProps) {
  return (
    <div style={{ marginBottom: "12px" }}>
      {label && (
        <div
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: "6px",
            opacity: 0.6,
          }}
        >
          {label}
        </div>
      )}
      <div
        style={{
          contain: "layout paint",
          position: "relative",
          height: "80px",
          borderRadius: "10px",
          border: "1px solid #e5e7eb",
          background: "#f9fafb",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}

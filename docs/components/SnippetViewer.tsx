"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type TabKey = "react" | "html" | "css" | "js";

const TAB_ORDER: TabKey[] = ["react", "html", "css", "js"];
const TAB_LABELS: Record<TabKey, string> = {
  react: "React",
  html: "HTML",
  css: "CSS",
  js: "JavaScript",
};
const TAB_LANG: Record<TabKey, string> = {
  react: "jsx",
  html: "html",
  css: "css",
  js: "javascript",
};

interface SnippetViewerProps {
  html?: string;
  css?: string;
  react?: string;
  js?: string;
  title?: string;
  preview?: ReactNode;
}

export function SnippetViewer({ html, css, react, js, title, preview }: SnippetViewerProps) {
  const contentMap = { react, html, css, js };
  const available = TAB_ORDER.filter((key) => Boolean(contentMap[key]));

  const [activeTab, setActiveTab] = useState<TabKey>(available[0]);
  const [copied, setCopied] = useState(false);

  if (available.length === 0) return null;

  const activeContent = contentMap[activeTab] ?? "";

  const handleCopy = () => {
    if (typeof navigator === "undefined" || !navigator.clipboard) return;
    navigator.clipboard.writeText(activeContent).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={{ margin: "1rem 0" }}>
      {preview && (
        <div className="snippet-preview">
          {preview}
        </div>
      )}
      <div
        style={{
          border: "1px solid #2d2d2d",
          borderRadius: "8px",
          overflow: "hidden",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          fontSize: "0.8125rem",
          background: "#1e1e1e",
        }}
      >
        {title && (
          <div
            style={{
              padding: "8px 16px",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#a1a1aa",
              borderBottom: "1px solid #2d2d2d",
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "0.05em",
              textTransform: "uppercase" as const,
              background: "#111113",
            }}
          >
            {title}
          </div>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #2d2d2d",
            background: "#111113",
          }}
        >
          <div style={{ display: "flex" }}>
            {available.map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                style={{
                  padding: "8px 16px",
                  fontSize: "0.8125rem",
                  fontFamily: "system-ui, sans-serif",
                  fontWeight: 500,
                  color: activeTab === key ? "#fafafa" : "#71717a",
                  background: "transparent",
                  border: "none",
                  borderBottom: activeTab === key ? "2px solid #6366f1" : "2px solid transparent",
                  cursor: "pointer",
                  transition: "color 150ms ease",
                }}
              >
                {TAB_LABELS[key]}
              </button>
            ))}
          </div>
          <button
            onClick={handleCopy}
            style={{
              marginRight: "12px",
              padding: "4px 10px",
              fontSize: "0.75rem",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 500,
              color: copied ? "#86efac" : "#a1a1aa",
              background: "#27272a",
              border: "1px solid #3f3f46",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "color 150ms ease",
            }}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <SyntaxHighlighter
          language={TAB_LANG[activeTab]}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: "16px",
            background: "transparent",
            fontSize: "0.8125rem",
            lineHeight: "1.6",
            overflowX: "auto",
          }}
          codeTagProps={{
            style: {
              fontFamily:
                "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
            },
          }}
        >
          {activeContent}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

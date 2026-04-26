"use client";

import CodeSnippet from "@lib/components/ui/CodeSnippet";

interface SnippetViewerProps {
  html?: string;
  css?: string;
  react?: string;
  js?: string;
  title?: string;
}

export function SnippetViewer({ html, css, react, js, title }: SnippetViewerProps) {
  return <CodeSnippet html={html} css={css} react={react} js={js} title={title} />;
}

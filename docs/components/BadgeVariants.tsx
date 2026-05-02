"use client";

import { NeobrutalismBadge, ShadcnBadge, FlowbiteBadge, GlassmorphismBadge, Md3Badge, NmBadge } from "@lib/components/Badge";

export function NeobrutalismBadgePreview() {
  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <NeobrutalismBadge variant="default">Default</NeobrutalismBadge>
      <NeobrutalismBadge variant="success">Success</NeobrutalismBadge>
      <NeobrutalismBadge variant="warning">Warning</NeobrutalismBadge>
      <NeobrutalismBadge variant="destructive">Error</NeobrutalismBadge>
    </div>
  );
}

export function ShadcnBadgePreview() {
  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <ShadcnBadge variant="default">Default</ShadcnBadge>
      <ShadcnBadge variant="success">Success</ShadcnBadge>
      <ShadcnBadge variant="warning">Warning</ShadcnBadge>
      <ShadcnBadge variant="destructive">Error</ShadcnBadge>
    </div>
  );
}

export function FlowbiteBadgePreview() {
  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <FlowbiteBadge variant="default">Default</FlowbiteBadge>
      <FlowbiteBadge variant="success">Success</FlowbiteBadge>
      <FlowbiteBadge variant="warning">Warning</FlowbiteBadge>
      <FlowbiteBadge variant="destructive">Error</FlowbiteBadge>
    </div>
  );
}

export function GlassmorphismBadgePreview() {
  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", padding: "16px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "8px" }}>
      <GlassmorphismBadge variant="default">Default</GlassmorphismBadge>
      <GlassmorphismBadge variant="success">Success</GlassmorphismBadge>
      <GlassmorphismBadge variant="warning">Warning</GlassmorphismBadge>
      <GlassmorphismBadge variant="destructive">Error</GlassmorphismBadge>
    </div>
  );
}

export function Md3BadgePreview() {
  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Md3Badge variant="default">Default</Md3Badge>
      <Md3Badge variant="success">Success</Md3Badge>
      <Md3Badge variant="warning">Warning</Md3Badge>
      <Md3Badge variant="destructive">Error</Md3Badge>
    </div>
  );
}

export function NmBadgePreview() {
  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", padding: "16px", background: "#e0e5ec", borderRadius: "8px" }}>
      <NmBadge variant="default">Default</NmBadge>
      <NmBadge variant="success">Success</NmBadge>
      <NmBadge variant="warning">Warning</NmBadge>
      <NmBadge variant="destructive">Error</NmBadge>
    </div>
  );
}

"use client";

import { NeobrutalismBadge, ShadcnBadge, FlowbiteBadge } from "@lib/components/Badge";

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

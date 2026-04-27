"use client";

import { NeobrutalismButton, ShadcnButton, FlowbiteButton } from "@lib/components/Button";

export function NeobrutalismButtonPreview() {
  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <NeobrutalismButton variant="primary">Primary</NeobrutalismButton>
      <NeobrutalismButton variant="secondary">Secondary</NeobrutalismButton>
      <NeobrutalismButton variant="outline">Outline</NeobrutalismButton>
    </div>
  );
}

export function ShadcnButtonPreview() {
  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <ShadcnButton variant="primary">Primary</ShadcnButton>
      <ShadcnButton variant="secondary">Secondary</ShadcnButton>
      <ShadcnButton variant="outline">Outline</ShadcnButton>
    </div>
  );
}

export function FlowbiteButtonPreview() {
  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <FlowbiteButton variant="primary">Primary</FlowbiteButton>
      <FlowbiteButton variant="secondary">Secondary</FlowbiteButton>
      <FlowbiteButton variant="outline">Outline</FlowbiteButton>
    </div>
  );
}

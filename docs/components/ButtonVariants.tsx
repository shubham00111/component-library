"use client";

import { NeobrutalismButton, ShadcnButton, FlowbiteButton, GlassmorphismButton, Md3Button, NmButton } from "@lib/components/Button";

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

export function GlassmorphismButtonPreview() {
  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", padding: "16px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "8px" }}>
      <GlassmorphismButton variant="primary">Primary</GlassmorphismButton>
      <GlassmorphismButton variant="secondary">Secondary</GlassmorphismButton>
      <GlassmorphismButton variant="outline">Outline</GlassmorphismButton>
    </div>
  );
}

export function Md3ButtonPreview() {
  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Md3Button variant="primary">Filled</Md3Button>
      <Md3Button variant="secondary">Tonal</Md3Button>
      <Md3Button variant="outline">Outlined</Md3Button>
    </div>
  );
}

export function NmButtonPreview() {
  return (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", padding: "16px", background: "#e0e5ec", borderRadius: "8px" }}>
      <NmButton variant="primary">Primary</NmButton>
      <NmButton variant="secondary">Secondary</NmButton>
      <NmButton variant="outline">Outline</NmButton>
    </div>
  );
}

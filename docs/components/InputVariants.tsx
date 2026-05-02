"use client";

import { NeobrutalismInput, ShadcnInput, FlowbiteInput, GlassmorphismInput, Md3Input, NmInput } from "@lib/components/Input";

export function NeobrutalismInputPreview() {
  return <NeobrutalismInput label="Email address" placeholder="you@example.com" />;
}

export function ShadcnInputPreview() {
  return <ShadcnInput label="Email address" placeholder="you@example.com" />;
}

export function FlowbiteInputPreview() {
  return <FlowbiteInput label="Email address" placeholder="you@example.com" />;
}

export function GlassmorphismInputPreview() {
  return (
    <div style={{ padding: "16px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "8px" }}>
      <GlassmorphismInput label="Email address" placeholder="you@example.com" />
    </div>
  );
}

export function Md3InputPreview() {
  return <Md3Input label="Email address" placeholder="you@example.com" />;
}

export function NmInputPreview() {
  return (
    <div style={{ padding: "16px", background: "#e0e5ec", borderRadius: "8px" }}>
      <NmInput label="Email address" placeholder="you@example.com" />
    </div>
  );
}

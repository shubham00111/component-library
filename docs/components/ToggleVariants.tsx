"use client";

import { NeobrutalismToggle, ShadcnToggle, FlowbiteToggle, GlassmorphismToggle, Md3Toggle, NmToggle } from "@lib/components/Toggle";

export function NeobrutalismTogglePreview() {
  return <NeobrutalismToggle defaultChecked label="Enable notifications" />;
}

export function ShadcnTogglePreview() {
  return <ShadcnToggle defaultChecked label="Enable notifications" />;
}

export function FlowbiteTogglePreview() {
  return <FlowbiteToggle defaultChecked label="Enable notifications" />;
}

export function GlassmorphismTogglePreview() {
  return (
    <div style={{ padding: "16px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "8px" }}>
      <GlassmorphismToggle defaultChecked label="Enable notifications" />
    </div>
  );
}

export function Md3TogglePreview() {
  return <Md3Toggle defaultChecked label="Enable notifications" />;
}

export function NmTogglePreview() {
  return (
    <div style={{ padding: "16px", background: "#e0e5ec", borderRadius: "8px" }}>
      <NmToggle defaultChecked label="Enable notifications" />
    </div>
  );
}

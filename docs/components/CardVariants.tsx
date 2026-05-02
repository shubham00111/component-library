"use client";

import { NeobrutalismCard, ShadcnCard, FlowbiteCard, GlassmorphismCard, Md3Card, NmCard } from "@lib/components/Card";

export function NeobrutalismCardPreview() {
  return (
    <NeobrutalismCard
      title="Card Title"
      description="A short description for this card."
    />
  );
}

export function ShadcnCardPreview() {
  return (
    <ShadcnCard
      title="Card Title"
      description="A short description for this card."
    />
  );
}

export function FlowbiteCardPreview() {
  return (
    <FlowbiteCard
      title="Card Title"
      description="A short description for this card."
    />
  );
}

export function GlassmorphismCardPreview() {
  return (
    <div style={{ padding: "16px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "8px" }}>
      <GlassmorphismCard title="Card Title" description="A short description for this card." />
    </div>
  );
}

export function Md3CardPreview() {
  return <Md3Card title="Card Title" description="A short description for this card." />;
}

export function NmCardPreview() {
  return (
    <div style={{ padding: "16px", background: "#e0e5ec", borderRadius: "8px" }}>
      <NmCard title="Card Title" description="A short description for this card." />
    </div>
  );
}

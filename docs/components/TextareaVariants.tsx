"use client";
import { NeobrutalismTextarea, ShadcnTextarea, FlowbiteTextarea, GlassmorphismTextarea, Md3Textarea, NmTextarea } from "@lib/components/Textarea";

export function NeobrutalismTextareaPreview() {
  return <NeobrutalismTextarea label="Message" placeholder="Write your message..." rows={3} />;
}

export function ShadcnTextareaPreview() {
  return <ShadcnTextarea label="Message" placeholder="Write your message..." rows={3} />;
}

export function FlowbiteTextareaPreview() {
  return <FlowbiteTextarea label="Message" placeholder="Write your message..." rows={3} />;
}

export function GlassmorphismTextareaPreview() {
  return (
    <div style={{ padding: "16px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "8px" }}>
      <GlassmorphismTextarea label="Message" placeholder="Write your message..." rows={3} />
    </div>
  );
}

export function Md3TextareaPreview() {
  return <Md3Textarea label="Message" placeholder="Write your message..." rows={3} />;
}

export function NmTextareaPreview() {
  return (
    <div style={{ padding: "16px", background: "#e0e5ec", borderRadius: "8px" }}>
      <NmTextarea label="Message" placeholder="Write your message..." rows={3} />
    </div>
  );
}

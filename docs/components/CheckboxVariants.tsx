"use client";
import { NeobrutalismCheckbox, ShadcnCheckbox, FlowbiteCheckbox, GlassmorphismCheckbox, Md3Checkbox, NmCheckbox } from "@lib/components/Checkbox";

export function NeobrutalismCheckboxPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <NeobrutalismCheckbox label="Unchecked" />
      <NeobrutalismCheckbox label="Checked" defaultChecked />
      <NeobrutalismCheckbox label="Indeterminate" indeterminate />
    </div>
  );
}

export function ShadcnCheckboxPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <ShadcnCheckbox label="Unchecked" />
      <ShadcnCheckbox label="Checked" defaultChecked />
      <ShadcnCheckbox label="Indeterminate" indeterminate />
    </div>
  );
}

export function FlowbiteCheckboxPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <FlowbiteCheckbox label="Unchecked" />
      <FlowbiteCheckbox label="Checked" defaultChecked />
      <FlowbiteCheckbox label="Indeterminate" indeterminate />
    </div>
  );
}

export function GlassmorphismCheckboxPreview() {
  return (
    <div style={{ padding: "16px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "8px", display: "flex", flexDirection: "column", gap: 10 }}>
      <GlassmorphismCheckbox label="Unchecked" />
      <GlassmorphismCheckbox label="Checked" defaultChecked />
      <GlassmorphismCheckbox label="Indeterminate" indeterminate />
    </div>
  );
}

export function Md3CheckboxPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <Md3Checkbox label="Unchecked" />
      <Md3Checkbox label="Checked" defaultChecked />
      <Md3Checkbox label="Indeterminate" indeterminate />
    </div>
  );
}

export function NmCheckboxPreview() {
  return (
    <div style={{ padding: "16px", background: "#e0e5ec", borderRadius: "8px", display: "flex", flexDirection: "column", gap: 10 }}>
      <NmCheckbox label="Unchecked" />
      <NmCheckbox label="Checked" defaultChecked />
      <NmCheckbox label="Indeterminate" indeterminate />
    </div>
  );
}

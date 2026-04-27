"use client";
import { NeobrutalismCheckbox, ShadcnCheckbox, FlowbiteCheckbox } from "@lib/components/Checkbox";

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

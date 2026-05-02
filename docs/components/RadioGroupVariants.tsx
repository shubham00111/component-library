"use client";
import { NeobrutalismRadioGroup, ShadcnRadioGroup, FlowbiteRadioGroup, GlassmorphismRadioGroup, Md3RadioGroup, NmRadioGroup } from "@lib/components/RadioGroup";

export function NeobrutalismRadioGroupPreview() {
  return (
    <NeobrutalismRadioGroup name="nb-prev" defaultValue="apple">
      <NeobrutalismRadioGroup.Item value="apple" label="Apple" />
      <NeobrutalismRadioGroup.Item value="banana" label="Banana" />
      <NeobrutalismRadioGroup.Item value="orange" label="Orange" />
    </NeobrutalismRadioGroup>
  );
}

export function ShadcnRadioGroupPreview() {
  return (
    <ShadcnRadioGroup name="shadcn-prev" defaultValue="apple">
      <ShadcnRadioGroup.Item value="apple" label="Apple" />
      <ShadcnRadioGroup.Item value="banana" label="Banana" />
      <ShadcnRadioGroup.Item value="orange" label="Orange" />
    </ShadcnRadioGroup>
  );
}

export function FlowbiteRadioGroupPreview() {
  return (
    <FlowbiteRadioGroup name="fb-prev" defaultValue="apple">
      <FlowbiteRadioGroup.Item value="apple" label="Apple" />
      <FlowbiteRadioGroup.Item value="banana" label="Banana" />
      <FlowbiteRadioGroup.Item value="orange" label="Orange" />
    </FlowbiteRadioGroup>
  );
}

export function GlassmorphismRadioGroupPreview() {
  return (
    <div style={{ padding: "16px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "8px" }}>
      <GlassmorphismRadioGroup name="glass-prev" defaultValue="apple">
        <GlassmorphismRadioGroup.Item value="apple" label="Apple" />
        <GlassmorphismRadioGroup.Item value="banana" label="Banana" />
        <GlassmorphismRadioGroup.Item value="orange" label="Orange" />
      </GlassmorphismRadioGroup>
    </div>
  );
}

export function Md3RadioGroupPreview() {
  return (
    <Md3RadioGroup name="md3-prev" defaultValue="apple">
      <Md3RadioGroup.Item value="apple" label="Apple" />
      <Md3RadioGroup.Item value="banana" label="Banana" />
      <Md3RadioGroup.Item value="orange" label="Orange" />
    </Md3RadioGroup>
  );
}

export function NmRadioGroupPreview() {
  return (
    <div style={{ padding: "16px", background: "#e0e5ec", borderRadius: "8px" }}>
      <NmRadioGroup name="nm-prev" defaultValue="apple">
        <NmRadioGroup.Item value="apple" label="Apple" />
        <NmRadioGroup.Item value="banana" label="Banana" />
        <NmRadioGroup.Item value="orange" label="Orange" />
      </NmRadioGroup>
    </div>
  );
}

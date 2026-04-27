"use client";
import { NeobrutalismRadioGroup, ShadcnRadioGroup, FlowbiteRadioGroup } from "@lib/components/RadioGroup";

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

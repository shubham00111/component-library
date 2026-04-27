"use client";

import { NeobrutalismToggle, ShadcnToggle, FlowbiteToggle } from "@lib/components/Toggle";

export function NeobrutalismTogglePreview() {
  return <NeobrutalismToggle defaultChecked label="Enable notifications" />;
}

export function ShadcnTogglePreview() {
  return <ShadcnToggle defaultChecked label="Enable notifications" />;
}

export function FlowbiteTogglePreview() {
  return <FlowbiteToggle defaultChecked label="Enable notifications" />;
}

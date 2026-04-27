"use client";

import NeobrutalismTabs from "@lib/components/Tabs/variants/NeobrutalismTabs";
import ShadcnTabs from "@lib/components/Tabs/variants/ShadcnTabs";
import FlowbiteTabs from "@lib/components/Tabs/variants/FlowbiteTabs";

const tabItems = [
  { id: "1", label: "Overview", content: <p>Overview content goes here.</p> },
  { id: "2", label: "Features", content: <p>Feature list goes here.</p> },
  { id: "3", label: "Docs", content: <p>Documentation content.</p> },
];

export function NeobrutalismTabsPreview() {
  return <NeobrutalismTabs items={tabItems} />;
}

export function ShadcnTabsPreview() {
  return <ShadcnTabs items={tabItems} />;
}

export function FlowbiteTabsPreview() {
  return <FlowbiteTabs items={tabItems} />;
}

"use client";

import NeobrutalismTabs from "@lib/components/Tabs/variants/NeobrutalismTabs";
import ShadcnTabs from "@lib/components/Tabs/variants/ShadcnTabs";
import FlowbiteTabs from "@lib/components/Tabs/variants/FlowbiteTabs";
import GlassmorphismTabs from "@lib/components/Tabs/variants/GlassmorphismTabs";
import Md3Tabs from "@lib/components/Tabs/variants/Md3Tabs";
import NmTabs from "@lib/components/Tabs/variants/NmTabs";

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

export function GlassmorphismTabsPreview() {
  return (
    <div style={{ padding: "16px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "8px" }}>
      <GlassmorphismTabs items={tabItems} />
    </div>
  );
}

export function Md3TabsPreview() {
  return <Md3Tabs items={tabItems} />;
}

export function NmTabsPreview() {
  return (
    <div style={{ padding: "16px", background: "#e0e5ec", borderRadius: "8px" }}>
      <NmTabs items={tabItems} />
    </div>
  );
}

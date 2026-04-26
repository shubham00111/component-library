"use client";

import Tabs from "@lib/components/Tabs/Tabs";

const ITEMS = [
  { id: "overview", label: "Overview", content: <p style={{ padding: "16px", color: "#6b7280" }}>Overview content goes here.</p> },
  { id: "details", label: "Details", content: <p style={{ padding: "16px", color: "#6b7280" }}>Detailed information goes here.</p> },
  { id: "reviews", label: "Reviews", content: <p style={{ padding: "16px", color: "#6b7280" }}>User reviews go here.</p> },
];

export function TabsDemo() {
  return (
    <div style={{ padding: "16px" }}>
      <Tabs items={ITEMS} defaultValue={ITEMS[0]} />
    </div>
  );
}

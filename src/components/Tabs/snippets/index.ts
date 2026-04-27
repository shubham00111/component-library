export const neobrutalismJsx = `const items = [
  { id: "1", label: "Overview", content: <p>Overview content</p> },
  { id: "2", label: "Features", content: <p>Features content</p> },
  { id: "3", label: "Docs", content: <p>Documentation content</p> },
];

// NeobrutalismTabs — bold borders, yellow active state, flat offset shadow feel
<NeobrutalismTabs items={items} />

// Active tab:   border-[3px] border-black border-b-white -mb-[3px] bg-yellow-400 font-bold
// Inactive tab: border-[3px] border-transparent hover:bg-yellow-100 font-bold
// Tab list:     border-b-[3px] border-black`;

export const shadcnJsx = `const items = [
  { id: "1", label: "Overview", content: <p>Overview content</p> },
  { id: "2", label: "Features", content: <p>Features content</p> },
  { id: "3", label: "Docs", content: <p>Documentation content</p> },
];

// ShadcnTabs — zinc underline, minimal, clean
<ShadcnTabs items={items} />

// Active tab:   border-b-2 border-zinc-900 text-zinc-900 font-medium
// Inactive tab: border-b-2 border-transparent text-zinc-500 hover:text-zinc-700 font-medium
// Tab list:     border-b border-zinc-200`;

export const flowbiteJsx = `const items = [
  { id: "1", label: "Overview", content: <p>Overview content</p> },
  { id: "2", label: "Features", content: <p>Features content</p> },
  { id: "3", label: "Docs", content: <p>Documentation content</p> },
];

// FlowbiteTabs — blue underline active state
<FlowbiteTabs items={items} />

// Active tab:   border-b-2 border-[#1c64f2] text-[#1c64f2] font-medium
// Inactive tab: border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium
// Tab list:     border-b border-gray-200`;

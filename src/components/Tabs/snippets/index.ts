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

export const glassmorphismJsx = `const GlassmorphismTabs = ({ tabs = [], defaultTab }) => {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id ?? "");
  const activeTab = tabs.find((t) => t.id === active);
  return (
    <div className="font-sans">
      <div className="flex gap-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-1 mb-4">
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActive(tab.id)} disabled={tab.disabled}
            className={\`flex-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed \${active === tab.id ? "bg-white/25 text-white shadow-[0_2px_8px_rgba(31,38,135,0.2)]" : "text-white/70 hover:text-white hover:bg-white/10"}\`}>
            {tab.label}
          </button>
        ))}
      </div>
      {activeTab && <div className="text-white/80 text-sm">{activeTab.content}</div>}
    </div>
  );
};`;

export const md3Jsx = `const Md3Tabs = ({ tabs = [], defaultTab }) => {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id ?? "");
  const activeTab = tabs.find((t) => t.id === active);
  return (
    <div className="font-sans">
      <div className="flex border-b border-[#e7e0ec] mb-4">
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActive(tab.id)} disabled={tab.disabled}
            className={\`px-6 py-3 text-sm font-medium transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed border-b-2 \${active === tab.id ? "border-[#6750a4] text-[#6750a4]" : "border-transparent text-[#49454f] hover:text-[#6750a4] hover:bg-[#6750a4]/8"}\`}>
            {tab.label}
          </button>
        ))}
      </div>
      {activeTab && <div className="text-[#1c1b1f] text-sm">{activeTab.content}</div>}
    </div>
  );
};`;

export const nmJsx = `const NmTabs = ({ tabs = [], defaultTab }) => {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id ?? "");
  const activeTab = tabs.find((t) => t.id === active);
  return (
    <div className="font-sans">
      <div className="flex gap-2 bg-[#e0e5ec] rounded-xl p-2 mb-4 shadow-[inset_-3px_-3px_6px_#ffffff,_inset_3px_3px_6px_rgba(163,177,198,0.5)]">
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActive(tab.id)} disabled={tab.disabled}
            className={\`flex-1 px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed \${active === tab.id ? "bg-[#e0e5ec] text-[#3d4f6e] shadow-[-3px_-3px_6px_#ffffff,_3px_3px_6px_rgba(163,177,198,0.5)]" : "text-[#6c7a9c] hover:text-[#3d4f6e]"}\`}>
            {tab.label}
          </button>
        ))}
      </div>
      {activeTab && <div className="text-[#6c7a9c] text-sm">{activeTab.content}</div>}
    </div>
  );
};`;

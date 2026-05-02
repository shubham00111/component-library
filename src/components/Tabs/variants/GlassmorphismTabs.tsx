"use client";
import { useState } from "react";

type TabItem = { id: string; label: string; content?: React.ReactNode; disabled?: boolean };

const GlassmorphismTabs = ({
  items,
  defaultValue,
}: {
  items: TabItem[];
  defaultValue?: TabItem;
}) => {
  const [activeTab, setActiveTab] = useState<TabItem>(defaultValue ?? items[0]);

  return (
    <div className="w-full">
      <div className="flex gap-1 p-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
        {items.map((item) => {
          const isActive = item.id === activeTab.id;
          return (
            <button
              key={item.id}
              disabled={item.disabled}
              onClick={() => !item.disabled && setActiveTab(item)}
              className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed ${
                isActive
                  ? "bg-white/25 text-white shadow-[0_2px_8px_rgba(31,38,135,0.2)]"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="pt-4 text-sm text-white/80">{activeTab.content}</div>
    </div>
  );
};

export default GlassmorphismTabs;

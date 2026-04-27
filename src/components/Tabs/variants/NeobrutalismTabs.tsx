"use client";
import { useState } from "react";

type TabItem = { id: string; label: string; content?: React.ReactNode; disabled?: boolean };

const NeobrutalismTabs = ({
  items,
  defaultValue,
}: {
  items: TabItem[];
  defaultValue?: TabItem;
}) => {
  const [activeTab, setActiveTab] = useState<TabItem>(defaultValue ?? items[0]);

  return (
    <div className="w-full">
      <div className="flex border-b-[3px] border-black gap-1">
        {items.map((item) => {
          const isActive = item.id === activeTab.id;
          return (
            <button
              key={item.id}
              disabled={item.disabled}
              onClick={() => !item.disabled && setActiveTab(item)}
              className={`px-4 py-2 font-bold border-[3px] transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
                isActive
                  ? "border-black border-b-white -mb-[3px] bg-yellow-400"
                  : "border-transparent hover:bg-yellow-100"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="pt-4 text-sm font-medium">{activeTab.content}</div>
    </div>
  );
};

export default NeobrutalismTabs;

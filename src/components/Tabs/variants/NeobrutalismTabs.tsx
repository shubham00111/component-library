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
      <div className="flex border-b-[3px] border-black dark:border-white gap-1">
        {items.map((item) => {
          const isActive = item.id === activeTab.id;
          return (
            <button
              key={item.id}
              disabled={item.disabled}
              onClick={() => !item.disabled && setActiveTab(item)}
              className={`px-4 py-2 font-bold border-[3px] transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
                isActive
                  ? "border-black dark:border-white border-b-white dark:border-b-zinc-900 -mb-[3px] bg-yellow-400 text-black"
                  : "border-transparent text-black dark:text-zinc-200 hover:bg-yellow-100 dark:hover:bg-yellow-400/20"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="pt-4 text-sm font-medium text-black dark:text-zinc-200">{activeTab.content}</div>
    </div>
  );
};

export default NeobrutalismTabs;

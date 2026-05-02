"use client";
import { useState } from "react";

type TabItem = { id: string; label: string; content?: React.ReactNode; disabled?: boolean };

const Md3Tabs = ({
  items,
  defaultValue,
}: {
  items: TabItem[];
  defaultValue?: TabItem;
}) => {
  const [activeTab, setActiveTab] = useState<TabItem>(defaultValue ?? items[0]);

  return (
    <div className="w-full">
      <div className="flex border-b border-[#e7e0ec] dark:border-[#49454f]">
        {items.map((item) => {
          const isActive = item.id === activeTab.id;
          return (
            <button
              key={item.id}
              disabled={item.disabled}
              onClick={() => !item.disabled && setActiveTab(item)}
              className={`px-4 py-3 text-sm font-medium border-b-2 -mb-px transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed ${
                isActive
                  ? "border-[#6750a4] dark:border-[#d0bcff] text-[#6750a4] dark:text-[#d0bcff]"
                  : "border-transparent text-[#49454f] dark:text-[#cac4d0] hover:text-[#6750a4] dark:hover:text-[#d0bcff] hover:bg-[#6750a4]/8 dark:hover:bg-[#d0bcff]/8"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="pt-4 text-sm text-[#49454f] dark:text-[#cac4d0]">{activeTab.content}</div>
    </div>
  );
};

export default Md3Tabs;

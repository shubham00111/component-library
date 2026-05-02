"use client";
import { useState } from "react";

type TabItem = { id: string; label: string; content?: React.ReactNode; disabled?: boolean };

const NmTabs = ({
  items,
  defaultValue,
}: {
  items: TabItem[];
  defaultValue?: TabItem;
}) => {
  const [activeTab, setActiveTab] = useState<TabItem>(defaultValue ?? items[0]);

  return (
    <div className="w-full">
      <div className="flex gap-2 p-2 bg-[#e0e5ec] dark:bg-[#2d2d3a] rounded-xl shadow-[inset_-3px_-3px_6px_#ffffff,_inset_3px_3px_6px_rgba(163,177,198,0.5)] dark:shadow-[inset_-3px_-3px_6px_#3d3d4e,_inset_3px_3px_6px_#1d1d28]">
        {items.map((item) => {
          const isActive = item.id === activeTab.id;
          return (
            <button
              key={item.id}
              disabled={item.disabled}
              onClick={() => !item.disabled && setActiveTab(item)}
              className={`flex-1 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed border-none ${
                isActive
                  ? "bg-[#e0e5ec] dark:bg-[#2d2d3a] text-[#3d4f6e] dark:text-[#c5cde0] shadow-[-3px_-3px_6px_#ffffff,_3px_3px_6px_rgba(163,177,198,0.6)] dark:shadow-[-3px_-3px_6px_#3d3d4e,_3px_3px_6px_#1d1d28]"
                  : "text-[#6c7a9c] dark:text-[#a0a8c0] hover:text-[#3d4f6e] dark:hover:text-[#c5cde0]"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="pt-4 text-sm text-[#6c7a9c] dark:text-[#a0a8c0]">{activeTab.content}</div>
    </div>
  );
};

export default NmTabs;

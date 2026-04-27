"use client";
import { useState } from "react";

type TabItem = { id: string; label: string; content?: React.ReactNode; disabled?: boolean };

const FlowbiteTabs = ({
  items,
  defaultValue,
}: {
  items: TabItem[];
  defaultValue?: TabItem;
}) => {
  const [activeTab, setActiveTab] = useState<TabItem>(defaultValue ?? items[0]);

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-200 gap-1">
        {items.map((item) => {
          const isActive = item.id === activeTab.id;
          return (
            <button
              key={item.id}
              disabled={item.disabled}
              onClick={() => !item.disabled && setActiveTab(item)}
              className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
                isActive
                  ? "border-[#1c64f2] text-[#1c64f2]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="pt-4 text-sm text-gray-700">{activeTab.content}</div>
    </div>
  );
};

export default FlowbiteTabs;

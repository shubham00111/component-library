import React, { useState } from "react";
import type { TabProps, TabItem } from "./types";
import { cn } from "../../utils/Util";

const Tabs = ({
  value,
  items,
  orientation,
  defaultValue = items[0],
  onValueChange,
}: TabProps) => {
  if (!value) {
    value = items[0];
  }

  const [activeTab, setActiveTab] = useState<TabItem>(value || defaultValue);
  return (
    <div className="w-full px-4">
      <div
        className={cn(
          "flex items-center border-b text-neutral-500",
          "border-b-neutral-300 dark:border-b-neutral-700",
        )}
      >
        {items.map((item: TabItem) => {
          let active = item.id === activeTab.id;
          return (
            <div
              key={item.id}
              className={cn(
                "me-2 cursor-pointer border-b-2 border-b-transparent px-4 pb-2 transition-colors duration-150",
                "hover:border-b-neutral-500 hover:text-neutral-600",
                "dark:hover:border-b-neutral-400 dark:hover:text-neutral-300",
                active && [
                  "border-b-neutral-600 text-neutral-700",
                  "dark:border-b-neutral-300 dark:text-neutral-100",
                ],
                item.disabled && [
                  "pointer-events-none cursor-not-allowed opacity-50",
                  "dark:opacity-40",
                ],
              )}
              onClick={() => {
                if (!item.disabled) {
                  setActiveTab(item);
                  onValueChange && onValueChange(item);
                }
              }}
            >
              {item.label}
            </div>
          );
        })}
      </div>
      <div className="min-h-20 p-4 text-neutral-600 dark:text-neutral-300">
        {activeTab.content}
      </div>
    </div>
  );
};

export default Tabs;

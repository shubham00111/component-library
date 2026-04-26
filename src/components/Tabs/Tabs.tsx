"use client";
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
  const isVertical = orientation === "vertical";

  return (
    <div className={cn("w-full px-4", isVertical && "flex gap-0")}>
      <div
        className={cn(
          "flex text-neutral-500",
          isVertical
            ? "flex-col border-r border-r-neutral-300 dark:border-r-neutral-700 pr-2"
            : "flex-row items-center border-b border-b-neutral-300 dark:border-b-neutral-700",
        )}
      >
        {items.map((item: TabItem) => {
          let active = item.id === activeTab.id;
          return (
            <div
              key={item.id}
              className={cn(
                "cursor-pointer transition-colors duration-150",
                isVertical
                  ? "border-r-2 border-r-transparent px-4 py-2 -mr-px"
                  : "me-2 border-b-2 border-b-transparent px-4 pb-2",
                isVertical
                  ? "hover:border-r-neutral-500 hover:text-neutral-600 dark:hover:border-r-neutral-400 dark:hover:text-neutral-300"
                  : "hover:border-b-neutral-500 hover:text-neutral-600 dark:hover:border-b-neutral-400 dark:hover:text-neutral-300",
                active && isVertical && [
                  "border-r-neutral-600 text-neutral-700",
                  "dark:border-r-neutral-300 dark:text-neutral-100",
                ],
                active && !isVertical && [
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
      <div className={cn(
        "min-h-20 p-4 text-neutral-600 dark:text-neutral-300",
        isVertical && "flex-1",
      )}>
        {activeTab.content}
      </div>
    </div>
  );
};

export default Tabs;

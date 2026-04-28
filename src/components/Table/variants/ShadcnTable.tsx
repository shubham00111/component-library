"use client";
import { useState } from "react";
import type { TableProps } from "../types";

const ShadcnTable = ({ columns, data, className = "" }: TableProps) => {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  const sorted = sortKey
    ? [...data].sort((a, b) => {
        const av = String(a[sortKey] ?? "");
        const bv = String(b[sortKey] ?? "");
        return sortAsc ? av.localeCompare(bv) : bv.localeCompare(av);
      })
    : data;

  return (
    <div className={["w-full overflow-x-auto border border-zinc-200 dark:border-zinc-700 rounded-[6px] font-sans bg-white dark:bg-zinc-900", className].filter(Boolean).join(" ")}>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-zinc-50 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={col.sortable ? () => handleSort(col.key) : undefined}
                className={["px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide", col.sortable ? "cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100 select-none" : ""].filter(Boolean).join(" ")}
              >
                <span className="flex items-center gap-1">
                  {col.label}
                  {col.sortable && (
                    <span className="text-zinc-400 dark:text-zinc-500">{sortKey === col.key ? (sortAsc ? "↑" : "↓") : "↕"}</span>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
          {sorted.map((row, rowIdx) => (
            <tr key={rowIdx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors duration-100">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShadcnTable;

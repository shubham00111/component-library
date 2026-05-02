"use client";
import { useState } from "react";
import type { TableProps } from "../types";

const NmTable = ({ columns, data, className = "" }: TableProps) => {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (key: string) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(true); }
  };

  const sorted = sortKey
    ? [...data].sort((a, b) => {
        const av = String(a[sortKey] ?? "");
        const bv = String(b[sortKey] ?? "");
        return sortAsc ? av.localeCompare(bv) : bv.localeCompare(av);
      })
    : data;

  return (
    <div className={["w-full overflow-x-auto bg-[#e0e5ec] dark:bg-[#2d2d3a] rounded-xl font-sans shadow-[-5px_-5px_10px_#ffffff,_5px_5px_10px_rgba(163,177,198,0.6)] dark:shadow-[-5px_-5px_10px_#3d3d4e,_5px_5px_10px_#1d1d28]", className].filter(Boolean).join(" ")}>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[rgba(163,177,198,0.3)] dark:border-[#3d3d4e]">
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={col.sortable ? () => handleSort(col.key) : undefined}
                className={["px-4 py-3 text-left text-xs font-semibold text-[#6c7a9c] dark:text-[#a0a8c0] uppercase tracking-wide", col.sortable ? "cursor-pointer hover:text-[#3d4f6e] dark:hover:text-[#c5cde0] select-none transition-colors" : ""].filter(Boolean).join(" ")}
              >
                <span className="flex items-center gap-1">
                  {col.label}
                  {col.sortable && <span className="text-[#6c7a9c]/50 dark:text-[#a0a8c0]/50">{sortKey === col.key ? (sortAsc ? "↑" : "↓") : "↕"}</span>}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row, rowIdx) => (
            <tr key={rowIdx} className="border-b border-[rgba(163,177,198,0.2)] dark:border-[#3d3d4e] last:border-b-0 hover:shadow-[inset_-2px_-2px_4px_#ffffff,_inset_2px_2px_4px_rgba(163,177,198,0.3)] dark:hover:shadow-[inset_-2px_-2px_4px_#3d3d4e,_inset_2px_2px_4px_#1d1d28] transition-all duration-150">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-sm text-[#3d4f6e] dark:text-[#c5cde0]">{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NmTable;

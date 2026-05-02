"use client";
import { useState } from "react";
import type { TableProps } from "../types";

const Md3Table = ({ columns, data, className = "" }: TableProps) => {
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
    <div className={["w-full overflow-x-auto bg-[#fffbfe] dark:bg-[#1c1b1f] border border-[#e7e0ec] dark:border-[#49454f] rounded-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.1)] font-sans", className].filter(Boolean).join(" ")}>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[#f3edf7] dark:bg-[#2b2930] border-b border-[#e7e0ec] dark:border-[#49454f]">
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={col.sortable ? () => handleSort(col.key) : undefined}
                className={["px-4 py-3 text-left text-xs font-semibold text-[#49454f] dark:text-[#cac4d0] uppercase tracking-wide", col.sortable ? "cursor-pointer hover:text-[#6750a4] dark:hover:text-[#d0bcff] select-none transition-colors" : ""].filter(Boolean).join(" ")}
              >
                <span className="flex items-center gap-1">
                  {col.label}
                  {col.sortable && <span className="text-[#79747e] dark:text-[#938f99]">{sortKey === col.key ? (sortAsc ? "↑" : "↓") : "↕"}</span>}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#e7e0ec] dark:divide-[#49454f]">
          {sorted.map((row, rowIdx) => (
            <tr key={rowIdx} className="hover:bg-[#6750a4]/8 dark:hover:bg-[#d0bcff]/8 transition-colors duration-150">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-sm text-[#1c1b1f] dark:text-[#e6e1e5]">{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Md3Table;

"use client";
import { useState } from "react";
import type { TableProps } from "../types";

const GlassmorphismTable = ({ columns, data, className = "" }: TableProps) => {
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
    <div className={["w-full overflow-x-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-[0_8px_32px_rgba(31,38,135,0.15)] font-sans", className].filter(Boolean).join(" ")}>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-white/15">
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={col.sortable ? () => handleSort(col.key) : undefined}
                className={["px-4 py-3 text-left text-xs font-semibold text-white/80 uppercase tracking-wide", col.sortable ? "cursor-pointer hover:text-white select-none transition-colors" : ""].filter(Boolean).join(" ")}
              >
                <span className="flex items-center gap-1">
                  {col.label}
                  {col.sortable && <span className="text-white/40">{sortKey === col.key ? (sortAsc ? "↑" : "↓") : "↕"}</span>}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row, rowIdx) => (
            <tr key={rowIdx} className="border-b border-white/10 last:border-b-0 hover:bg-white/5 transition-colors duration-150">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-sm text-white/80">{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GlassmorphismTable;

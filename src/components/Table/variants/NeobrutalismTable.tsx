"use client";
import { useState } from "react";
import type { TableProps } from "../types";

const NeobrutalismTable = ({ columns, data, className = "" }: TableProps) => {
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
    <div className={["w-full overflow-x-auto border-[3px] border-black shadow-[4px_4px_0_#000] rounded-[2px] font-sans", className].filter(Boolean).join(" ")}>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-yellow-400 border-b-[3px] border-black">
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={col.sortable ? () => handleSort(col.key) : undefined}
                className={["px-4 py-3 text-left text-[0.9375rem] font-extrabold text-black border-r-[3px] border-black last:border-r-0", col.sortable ? "cursor-pointer hover:bg-yellow-300 select-none" : ""].filter(Boolean).join(" ")}
              >
                <span className="flex items-center gap-1">
                  {col.label}
                  {col.sortable && (
                    <span className="text-xs">{sortKey === col.key ? (sortAsc ? "↑" : "↓") : "↕"}</span>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className={["border-b-[2px] border-black last:border-b-0", rowIdx % 2 === 1 ? "bg-yellow-50" : "bg-white"].join(" ")}
            >
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-sm text-black font-medium border-r-[2px] border-black last:border-r-0">
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

export default NeobrutalismTable;

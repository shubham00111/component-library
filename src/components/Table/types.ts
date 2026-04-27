import type { ReactNode } from "react";

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
}

export interface TableProps {
  columns: TableColumn[];
  data: Record<string, ReactNode>[];
  className?: string;
}

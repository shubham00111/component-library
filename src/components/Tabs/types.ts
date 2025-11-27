export interface TabItem {
  id: string;
  label: string;
  content?: React.ReactNode;
  disabled?: boolean;
}

export interface TabProps {
  value?: TabItem;
  defaultValue?: TabItem;
  onValueChange?: (x: TabItem) => void;
  items: TabItem[];
  orientation?: "horizontal" | "vertical";
  className?: string;
}

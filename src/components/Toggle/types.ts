export type ToggleSize = "sm" | "md" | "lg";

export interface ToggleProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  size?: ToggleSize;
  className?: string;
  id?: string;
}

export interface RadioGroupProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export interface RadioGroupItemProps {
  value: string;
  label: string;
  disabled?: boolean;
  className?: string;
}

export interface RadioGroupContextType {
  selectedValue: string | null;
  setSelectedValue: (value: string) => void;
  name: string;
  disabled: boolean;
  onChange?: (value: string) => void;
}

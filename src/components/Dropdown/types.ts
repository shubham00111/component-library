/**
 * Core option item type used throughout the dropdown component
 */
export interface OptionItem {
  label: string;
  value: string;
  id: string;
}

/**
 * Context type that holds all dropdown state and methods
 */
export interface DropdownContextType {
  show: boolean;
  setShow: (show: boolean) => void;
  selectedOption: OptionItem | null;
  highlightedIndex: number | null;
  setHighlightedIndex: (index: number | null) => void;
  options: OptionItem[];
  handleChange: (option: OptionItem, index: number) => void;
  disabled: boolean;
  placeholder?: string;
  onChange?: (option: OptionItem) => void;
}

/**
 * Main Dropdown component props
 */
export interface DropdownProps {
  options: OptionItem[];
  children: React.ReactNode;
  disabled?: boolean;
  placeholder?: string;
  onChange?: (option: OptionItem) => void;
}

/**
 * Dropdown.Trigger sub-component props
 */
export interface TriggerProps {
  className?: string;
  id?: string;
}

/**
 * Dropdown.Menu sub-component props
 */
export interface MenuProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Dropdown.Item sub-component props
 */
export interface ItemProps {
  option: OptionItem;
  index: number;
  children?: React.ReactNode;
  className?: string;
}

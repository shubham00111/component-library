/**
 * Props for Accordion.Title sub-component
 */
export interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Props for Accordion.Description sub-component
 */
export interface DescriptionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Props for Accordion context
 */
export interface AccordionContextType {
  show: boolean;
  setShow: (show: boolean) => void;
  disabled?: boolean;
  id?: string;
}

/**
 * Props for Accordion.Item wrapper
 */
export interface AccordionItemProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
  disabled?: boolean;
  className?: string;
  onToggle?: (isOpen: boolean) => void;
}

/**
 * Props for main Accordion component
 */
export interface AccordionProps {
  children: React.ReactNode;
  exclusive?: boolean;
  defaultActiveKey?: string | string[];
  onChange?: (activeKeys: string[]) => void;
  className?: string;
}

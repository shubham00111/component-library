export type PopoverPlacement = "top" | "bottom" | "left" | "right";

export interface PopoverProps {
  children: React.ReactNode;
  className?: string;
}

export interface PopoverTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export interface PopoverContentProps {
  children: React.ReactNode;
  className?: string;
}

export interface PopoverContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

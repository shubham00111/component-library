export type InputType = "text" | "email" | "password" | "number" | "tel" | "url" | "search";

export interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  type?: InputType;
  label?: string;
  error?: string;
  helperText?: string;
  id?: string;
  className?: string;
}

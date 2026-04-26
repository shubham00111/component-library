export type BadgeVariant = "default" | "success" | "warning" | "destructive" | "outline";
export type BadgeSize = "sm" | "md";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

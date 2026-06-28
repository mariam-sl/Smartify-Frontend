import { cn } from "@/shared/utils/cn";

const variants = {
  default: "text-slate-700",
  muted: "text-slate-500",
  danger: "text-red-500",
};

const sizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export default function Text({children, variant = "default", size = "md",className,}) {
  return (
    <p
      className={cn(
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </p>
  );
}
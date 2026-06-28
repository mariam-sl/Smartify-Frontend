import {cn} from "@/shared/utils/cn";

const sizes={
     h1: "text-4xl font-bold tracking-tight",
  h2: "text-3xl font-bold tracking-tight",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-semibold",
};
export default function Heading({ as: Component = "h1",size = "h1", children, className,}) {
  return (
    <Component
      className={cn(
        "text-slate-900",
        sizes[size],
        className
      )}
    >
      {children}
    </Component>
  );
}
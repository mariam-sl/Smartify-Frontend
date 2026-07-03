import { forwardRef } from "react";

import { cn } from "@/shared/utils/cn";

const Input = forwardRef(
  (
    {
      label,
      error,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex w-full flex-col gap-1">

        {label && (
          <label className="text-sm font-medium text-slate-700">
            {label}
          </label>
        )}

        <input
          ref={ref}
          className={cn(
            "h-10 w-full rounded-xl border border-slate-300 px-3 text-sm",
            "focus:outline-none focus:ring-2 focus:ring-slate-400",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error &&
              "border-red-500 focus:ring-red-400",
            className
          )}
          disabled={disabled}
          {...props}
        />

        {error && (
          <span className="text-xs text-red-500">
            {error}
          </span>
        )}

      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
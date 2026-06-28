import {cn} from "@/shared/utils/cn";

const variants={
    primary: "bg-slate-900 text-white hover:bg-slate-800",
    secondary:"bg-slate-100 text-slate-900 hover:bg-slate-200",
    outline:"border border-slate-300 bg-white hover:bg-slate-100",
    danger:"bg-red-500 text-white hover:bg-red-600",
};

const sizes={
    sm:"h-9 px-3 text-sm",
    md:"h-10 px-4",
    lg:"h-11 px-6 text-lg",
};

export default function Button({children,variant="primary",size="md",className,disabled,...props}){
    return(
        <button className={cn("inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
            variants[variant],
            sizes[size],
            className
        )}
        disabled={disabled}
        {...props}
        >
            {children}
        </button>
    );
};
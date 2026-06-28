import {cn} from "@/shared/utils/cn";

export function Card({children,className,...props}){
    return(
        <div className={cn(
            "rounded-2xl border border-slate-200 bg-white shadow-soft",
            className
        )}
        {...props}
        > 
        {children}
        </div>
    );
}

export function CardHeader({children,className,}){
    return  (
        <div className={cn(
            "border-b border-slate-100 p-6",
            className
        )}
        >
            {children}
        </div>
    );
}

export function CardContent({children,className}){
    return(
        <div className={cn(
            "p-6",
            className
        )}
        >
            {children}
        </div>
    );
}

export function CardFooter({children,className}){
    return (
        <div className={cn(
            "border-t border-slate-100 p-6",
            className
        )}
        >
            {children}
        </div>
    );
}

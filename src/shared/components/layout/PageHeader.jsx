import {cn} from "@/shared/utils/cn";

export default function PageHeader({title,description,className,actions}){
    return (
        <div className={cn(
            "flex flex-col gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-center md:justify-between",
            className
        )}
        >
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
                {description && (
                    <p className="mt-2 text-sm text-slate-500">{description}</p>
                )}
            </div>
            {actions &&  (
                <div className="flex items-center gap-3">
                    {actions}
                </div>
            )}
        </div>
    );
}
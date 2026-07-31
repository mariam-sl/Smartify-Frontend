import {cn} from "@/shared/utils/cn";

export default function PageHeader({title,description,className,actions}){
    return (
        <div className={cn(
            "flex flex-col gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-center md:justify-between",
            className
        )}
        >
            <div className="max-w-3xl">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
                {description && (
                    <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
                )}
            </div>
            {actions &&  (
                <div className="flex shrink-0 items-center gap-3">
                    {actions}
                </div>
            )}
        </div>
    );
}
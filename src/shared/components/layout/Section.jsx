import {cn} from "@/shared/utils/cn";

export default function Section({children,className}){
    return (
        <section className={cn(
            "space-y-6",
            className
        )}>
            {children}
        </section>

    );
}
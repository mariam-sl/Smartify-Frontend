import {cn} from "@/shared/utils/cn";

export default function Section({children,className}){
    return (
        <section className={cn(
            "py-12 lg:py-16",
            className
        )}>
            {children}
        </section>

    );
}
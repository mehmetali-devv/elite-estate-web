import { ReactNode } from "react";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoCard = ({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
}: {
    name: string;
    className?: string;
    background: ReactNode;
    Icon: any;
    description: string;
    href: string;
    cta: string;
}) => {
    return (
        <div
            key={name}
            className={cn(
                "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-3xl",
                "bg-neutral-900/50 border border-neutral-800",
                "hover:border-neutral-600 transition-all duration-500",
                "h-full",
                className
            )}
        >
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 h-full w-full">
                {background}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 flex flex-col justify-end h-full p-6 transition-all duration-500 group-hover:-translate-y-2">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800/50 backdrop-blur-md border border-white/10 text-neutral-400 group-hover:text-white transition-colors duration-300">
                    <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {name}
                </h3>
                <p className="text-neutral-400 text-sm line-clamp-2 mb-4 group-hover:text-neutral-300 transition-colors">
                    {description}
                </p>

                <div className="flex items-center text-sm font-medium text-white opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <Link href={href} className="inline-flex items-center hover:underline undecoration-neutral-500">
                        {cta}
                        <ArrowRightIcon className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>

            {/* Hover Overlay */}
            <div className="pointer-events-none absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <div className="absolute inset-0 bg-white/5" />
            </div>
        </div>
    );
};

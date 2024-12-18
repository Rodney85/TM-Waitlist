"use client";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title: string;
  description: React.ReactNode;
  header: React.ReactNode;
  icon: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-neutral-200 justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          <div className="flex items-center gap-2">
            {icon}
            {title}
          </div>
        </div>
        <div className="font-sans font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg mt-4">
        {header}
      </div>
    </div>
  );
};

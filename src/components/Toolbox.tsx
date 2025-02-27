import { TechIcon } from "./TechIcon";
import { twMerge } from "tailwind-merge";

export const Toolbox = ({
  toolboxItems,
  className,
}: {
  toolboxItems: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
}) => {
  return (
    <div className={twMerge("w-full flex justify-center", className)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4">
        {toolboxItems.map((item) => (
          <div
            className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg shadow-sm"
            key={item.title}
          >
            <TechIcon component={item.iconType} />
            <span className="font-semibold text-gray-700">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

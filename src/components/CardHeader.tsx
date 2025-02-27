import StarIcon from "@/assets/icons/star.svg"
import { twMerge } from "tailwind-merge";

export const CardHeader = ({ title, description, className }: {
    title: string;
    description: string;
    className?: string;
}) => {
    return (
        <div className={twMerge("flex flex-col items-center text-center", className)}>
            <div className="inline-flex items-center gap-2">
                <StarIcon className="text-emerald-300 size-9" />
                <h3 className="text-gray-700 text-2xl font-bold">{title}</h3>
            </div>
            <p className="text-gray-700 text-sm">{description}</p>
        </div>
    )
}

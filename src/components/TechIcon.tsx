export const TechIcon = ({ component: Component }: { component: React.ElementType }) => {
    return (
        <div className="relative">
            <Component className="text-yellow-300 lg:size-9 sm:size-7 text-transparent fill-current" style={{ fill: "url(#tech-icon-gradient)" }} />
            <svg className="absolute w-0 h-0">
                <defs>
                    <linearGradient id="tech-icon-gradient" gradientTransform="rotate(45)">
                        <stop offset="0%" stopColor="rgb(252 165 165)" />
                        <stop offset="100%" stopColor="rgb(253 224 71)" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

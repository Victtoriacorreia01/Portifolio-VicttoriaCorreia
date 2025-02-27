interface SectionHeaderProps {
    eyebrow: string;
    title: string;
    description: string;
  }
  
  export const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => {
    return (
      <div className="text-center mb-10">
        <span className="text-1xl uppercase bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent tracking-wide font-semibold">
          {eyebrow}
        </span>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    );
  };
  
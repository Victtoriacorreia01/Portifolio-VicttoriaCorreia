interface CardProps {
    children: React.ReactNode;
  }
  
  export const Card = ({ children }: CardProps) => {
    return (
      <div className="bg-white shadow-lg rounded-xl p-5 border border-gray-200 w-[550px] h-[430px]">
        {children}
      </div>
    );
  };
  
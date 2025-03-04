interface CardProps {
    children: React.ReactNode;
  }
  
  export const Card = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className=" bg-white shadow-lg rounded-xl p-8 border border-gray-200 lg:w-[600px] sm:w-[360px] lg:h-[450px] sm:min-h-[400px] lg:max-w-[600px] ">
        {children}
      </div>
    );
  };

export const Header = () => {
  return (
    <div className="flex justify-center items-center relative top-5 px-2 w-full">
      <nav className="flex flex-wrap justify-center gap-1 sm:gap-3 px-2 sm:px-3 py-1 sm:py-1 p-0.2 shadow-lg rounded-full bg-white backdrop-blur z-10 w-full sm:w-auto">
        <a 
          href="#" 
          className="nav-item text-xs sm:text-sm md:text-base rounded-md px-2 py-1"
          data-aos="fade-up"  
          data-aos-delay="200"  
        >
          Home
        </a>
        <a 
          href="#sobremim" 
          className="nav-item text-xs sm:text-sm md:text-base rounded-md px-2 py-1"
          data-aos="fade-up"  
          data-aos-delay="400"  
        >
          About me
        </a>
        <a 
          href="#projetos" 
          className="nav-item text-xs sm:text-sm md:text-base rounded-md px-2 py-1"
          data-aos="fade-up" 
          data-aos-delay="600"  
        >
          Projects
        </a>
        <a 
          href="#experiencia" 
          className="nav-item text-xs sm:text-sm md:text-base rounded-md px-2 py-1"
          data-aos="fade-up" 
          data-aos-delay="600"  
        >
          Experiências
        </a>
        <a 
           href="#contact" 
          className="nav-item text-xs sm:text-sm md:text-base rounded-full px-4 py-1 bg-white text-gray-900 hover:bg-red-400 hover:text-white"
          data-aos="fade-up"  
          data-aos-delay="800"  
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

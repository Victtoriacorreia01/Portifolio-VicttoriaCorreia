export const Header = () => {
  return (
    <div className="flex justify-center items-center relative top-5 px-1 w-full">
      <nav className="flex justify-between items-center gap-1 sm:gap-2 px-1 sm:px-2 py-1 shadow-lg rounded-full bg-white backdrop-blur z-10 w-full sm:w-auto">
        <a 
          href="#sobremim" 
          className="nav-item text-xs sm:text-sm rounded-md px-1 py-1"
          data-aos="fade-up"  
          data-aos-delay="400"  
        >
          Sobre mim
        </a>
        <a 
          href="#projetos" 
          className="nav-item text-xs sm:text-sm rounded-md px-1 py-1"
          data-aos="fade-up" 
          data-aos-delay="600"  
        >
          Projetos
        </a>
        <a 
          href="#experiencia" 
          className="nav-item text-xs sm:text-sm rounded-md px-1 py-1"
          data-aos="fade-up" 
          data-aos-delay="600"  
        >
          Experiências
        </a>
        <a 
          href="#contact" 
          className="nav-item text-xs sm:text-sm rounded-full px-3 py-1 bg-white text-gray-900 hover:bg-red-400 hover:text-white"
          data-aos="fade-up"  
          data-aos-delay="800"  
        >
          Contato
        </a>
      </nav>
    </div>
  );
};

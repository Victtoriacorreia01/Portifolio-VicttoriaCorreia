export const Header = () => {
  return (
    <div className="flex justify-center items-center relative top-5 sm:px-2 w-full">
      <nav className="flex justify-between items-center lg:gap-2 sm:gap-1 px-1 sm:px-2 py-2 lg:px-3 shadow-lg rounded-full bg-white backdrop-blur z-10 w-full sm:w-auto">
        <a 
          href="#sobremim" 
          className="nav-item lg:text-[15px] sm:text-[13px] rounded-md px-1 py-1"
          data-aos="fade-up"  
          data-aos-delay="400"  
        >
          Sobre mim
        </a>
        <a 
          href="#projetos" 
          className="nav-item lg:text-[15px] sm:text-[13px]  rounded-md px-1 py-1"
          data-aos="fade-up" 
          data-aos-delay="600"  
        >
          Projetos
        </a>
        <a 
          href="#experiencia" 
          className="nav-item lg:text-[15px] sm:text-[13px]  rounded-md px-1 py-1"
          data-aos="fade-up" 
          data-aos-delay="600"  
        >
          Experiências
        </a>
        <a 
          href="#contact" 
          className="nav-item lg:text-[15px] sm:text-[13px]  rounded-full px-3 py-1 bg-white text-gray-900 hover:bg-red-400 hover:text-white"
          data-aos="fade-up"  
          data-aos-delay="800"  
        >
          Contato
        </a>
      </nav>
    </div>
  );
};

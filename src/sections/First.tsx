import memojiImage from "@/assets/images/IMG_6590 (1).jpg";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const FirstSection = () => {
  return (
    <div className="mt-10 sm:mt-16 lg:mt-24 relative" data-aos="fade-up">
      <div className="py-10 sm:py-16 lg:py-24 font-sans z-0 relative">
        {/* Círculos decorativos */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-50 shadow-[0_0_100px_inset] shadow-red-200/20 w-[500px] sm:w-[700px] lg:w-[900px] h-[500px] sm:h-[700px] lg:h-[900px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-50 shadow-[0_0_120px_inset] shadow-red-200/20 w-[700px] sm:w-[900px] lg:w-[1100px] h-[700px] sm:h-[900px] lg:h-[1100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-50 shadow-[0_0_150px_inset] shadow-red-200/30 w-[1000px] sm:w-[1200px] lg:w-[1400px] h-[1000px] sm:h-[1200px] lg:h-[1400px]"></div>

        {/* Conteúdo principal */}
        <div className="container mx-auto flex flex-col items-center text-center px-6 sm:px-8 lg:px-12 relative">
          <Image
            src={memojiImage}
            alt="Minha foto"
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-50 lg:h-50 rounded-full object-cover"
            data-aos="zoom-in"
            data-aos-delay="600"
          />

          <div className="mt-5 sm:mt-7 lg:mt-8 flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-green-200 shadow-[0_0_100px_inset] shadow-emerald-300/20" data-aos="fade-up" data-aos-delay="800">
            <span className="sm:text-sm lg:text-sm text-gray-700 font-medium">
              Disponível para novos trabalhos!
            </span>
            <span className="w-3 h-3 lg:w-4 lg:h-4 bg-green-500 rounded-full animate-pulse"></span>
          </div>

          <h1 className="text-xl sm:text-1xl lg:text-3xl font-bold mt-4 text-gray-800" data-aos="fade-up" data-aos-delay="1000">
            Construindo experiências <br /> incríveis para usuários!
          </h1>

          <p className="mt-3 text-gray-600 max-w-xs sm:max-w-md lg:max-w-2xl text-sm sm:text-sm lg:text-sm" data-aos="fade-up" data-aos-delay="1200">
            Sou Victtoria Correia. Desenvolvedora web e minha missão <br /> é entregar dedicação em tudo que faço!
          </p>

          <div className="mt-5 sm:mt-7 lg:mt-10 flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="1400">
            <button className="flex items-center gap-3 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg font-semibold text-sm sm:text-sm lg:text-lg transition-all duration-300">
              <span>Meu trabalho!</span>
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </button>
            <button className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-white rounded-lg font-medium text-sm sm:text-base lg:text-lg transition-all duration-300">
              <a
                href="https://www.linkedin.com/in/victtoria-correia-3268v/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center"
              >
                😉 Vamos nos conectar?
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

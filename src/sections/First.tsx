import memojiImage from "@/assets/images/IMG_6590 (1).jpg"; 
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";

export const FirstSection = () => {
  return (
    <div className="mt-20 relative" data-aos="fade-up">
      <div className="py-12 sm:py-16 md:py-24 font-sans z-0 relative">
        <div className="absolute top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-50 shadow-[0_0_80px_inset] shadow-red-200/20 w-[800px] h-[800px]"></div>
        <div className="absolute top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-50 shadow-[0_0_80px_inset] shadow-red-200/20 w-[1100px] h-[1100px]"></div>
        <div className="absolute top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-50 shadow-[0_0_80px_inset] shadow-red-200/30 w-[1500px] h-[1500px]"></div>
        <div className="container mx-auto flex flex-col items-center text-center px-6 relative">
          <Image
            src={memojiImage}
            alt="Minha foto"
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-30 lg:h-30 rounded-full object-cover"
            data-aos="zoom-in"
            data-aos-delay="600"
          />
          <div className="mt-7 flex items-center gap-2 bg-white px-4 py-1 rounded-full border border-green-200 shadow-[0_0_80px_inset] shadow-emerald-300/20" data-aos="fade-up" data-aos-delay="800">
            <span className="text-xs sm:text-sm text-gray-700 font-light">
              Disponível para novos trabalhos!
            </span>
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 text-gray-800" data-aos="fade-up" data-aos-delay="1000">
            Construindo experiências <br /> incríveis para usuários!
          </h1>
          <p className="mt-2 text-gray-600 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl text-sm sm:text-base" data-aos="fade-up" data-aos-delay="1200">
            Sou Victtoria Correia. Minha missão é entregar dedicação em tudo que faço!
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="1400">
            <button className="flex items-center gap-2 px-6 py-2 bg-yellow-400 hover:bg-red-100 hover:text-gray-700 text-white rounded-lg font-semibold text-sm sm:text-base">
              <span>Meu trabalho!</span>
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button className="px-6 py-2 bg-gray-300 hover:bg-red-400 text-white rounded-lg font-medium text-sm sm:text-base">
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

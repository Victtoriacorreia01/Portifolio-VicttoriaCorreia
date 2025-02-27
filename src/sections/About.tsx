import Image from "next/image";
import StarIcon from "@/assets/icons/star.svg";
import {  FaWordpress } from "react-icons/fa";
import {  SiGoogleanalytics } from "react-icons/si";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import IMGfilme1 from "@/assets/images/Meufilme.jpg";
import IMGfilme2 from "@/assets/images/filme 2.jpg";
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs, SiTailwindcss, SiPostman, SiFigma, SiPython, SiWordpress } from "react-icons/si";  
import { TechIcon } from "@/components/TechIcon";
import MapaFortal from "@/assets/images/mapafortaleza.png";
import Avatar from "@/assets/images/avatar.jpg";
import { CardHeader } from "@/components/CardHeader";
import { Toolbox } from "@/components/Toolbox";

const whatIDo = [
  { 
    name: "Web Designer", 
    icon: SiFigma,
    description: "Criação de interfaces intuitivas e atraentes utilizando ferramentas como Figma."
  },
  { 
    name: "Front End Developer", 
    icon: FaReact,
    description: "Desenvolvimento de interfaces modernas, responsivas e dinâmicas utilizando React.js ou Next.js."
  },
  { 
    name: "WordPress Developer", 
    icon: FaWordpress,
    description: "Criação e manutenção de sites otimizados e customizados em WordPress."
  },
];


const toolboxItems = [
  { title: "JavaScript", iconType: FaJsSquare },
  { title: "HTML5", iconType: FaHtml5 },
  { title: "CSS3", iconType: FaCss3Alt },
  { title: "React.js", iconType: FaReact },
  { title: "Next.js", iconType: SiNextdotjs },
  { title: "Github", iconType: FaGithub },
  { title: "Postman", iconType: SiPostman },
  { title: "TypeScript", iconType: SiTypescript },
  { title: "Tailwind", iconType: SiTailwindcss },
  { title: "Figma", iconType: SiFigma }, 
  { title: "Python", iconType: SiPython }, 
  { title: "WordPress", iconType: SiWordpress },
];

const hobbies = [
  { title: "Influencer", emoji: "📸" }, 
  { title: "Mãe da Isabella", emoji: "🐶" }, 
  { title: "Amante de Viagens", emoji: "✈️" },
  { title: "Ligada à familia", emoji: "👨‍👩‍👧‍👦" }, 
  { title: "Músicas", emoji: "🎵" },
  { title: "Moda", emoji: "👗" },
  { title: "Praias", emoji: "🏝️" },
  { title: "Línguas estrangeiras", emoji: "🗣️" },
  { title: "Restaurantes", emoji: "🍽️" }, 
  { title: "Evolução Pessoal", emoji: "📚" }, 
  { title: "Edição de Vídeos", emoji: "🎬" }, 
];


export const AboutSection = () => {
  return (
    <div className="py-20 flex flex-col items-center font-sans" data-aos="fade-up" data-aos-easing="ease-out-cubic" id="sobremim">
    <SectionHeader
      eyebrow="Sobre mim"
      title="Tudo sobre meu mundo"
      description="Saiba mais sobre mim e o que eu faço!"
      data-aos="fade-up" data-aos-duration="1000"
    />
    
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card 
        className="transition-all duration-300 hover:scale-[1.02]"
        data-aos="fade-up" data-aos-duration="1200"
      >
        <CardHeader title="Meus Filmes" description="Veja quais os melhores filmes ;)" />
        <div className="flex justify-center gap-4 mt-8">
          <Image src={IMGfilme1} alt="Movie1" className="w-[230px] h-[300px] rounded-lg shadow-lg" data-aos="zoom-in" data-aos-duration="1400"/>
          <Image src={IMGfilme2} alt="Movie2" className="w-[230px] h-[300px] rounded-lg shadow-lg" data-aos="zoom-in" data-aos-duration="1600"/>
        </div>
      </Card>
      <Card 
        className="transition-all duration-300 hover:scale-[1.02]"
        data-aos="fade-up" data-aos-duration="1200"
      >
        <CardHeader title="Minhas Tecnologias" description="Explore as tecnologias que utilizo no meu dia a dia!" />
        <Toolbox toolboxItems={toolboxItems} className="mt-6" data-aos="fade-in" data-aos-duration="1400"/>
      </Card>
    
      <Card 
        className="transition-all duration-300 hover:scale-[1.02]"
        data-aos="fade-up" data-aos-duration="1200"
      >
        <CardHeader title="Por trás do código" description="Explore meus interesses" />
        <div className="flex flex-wrap gap-4 justify-center mt-12" data-aos="zoom-in" data-aos-duration="1400">
          {hobbies.map((hobby) => (
            <div key={hobby.title} className="inline-flex gap-2 px-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full py-1.5 shadow-md transition-all duration-300 hover:scale-105">
              <span className="text-white font-medium">{hobby.title}</span>
              <span>{hobby.emoji}</span>
            </div>
          ))}
        </div>
      </Card>
  
      <Card 
        className="transition-all duration-300 hover:scale-[1.02]"
        data-aos="fade-up" data-aos-duration="1200"
      >
        <CardHeader title="Meus Trabalhos" description="Tudo que eu faço!" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 cursor-pointer mt-14">
          {whatIDo.map((item, index) => (
            <div
              key={item.name}
              className="p-3 border rounded-lg shadow-lg bg-gray-50 flex flex-col items-center gap-2 transition-all duration-300 hover:shadow-xl hover:scale-[1.05]"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="w-10 h-10 bg-red-500 flex items-center justify-center rounded-full shadow-md">
                <item.icon className="text-white text-3xl" />
              </div>
              <h3 className="text-base font-semibold text-gray-800 text-center">{item.name}</h3>
              <p className="text-gray-600 text-xs text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  </div>
  
  );
};


import Image from "next/image";
import StarIcon from "@/assets/icons/star.svg";
import { FaWordpress } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import IMGfilme1 from "@/assets/images/Meufilme.jpg";
import IMGfilme2 from "@/assets/images/filme 2.jpg";
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaGithub } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiPostman, SiFigma, SiPython, SiWordpress } from "react-icons/si";
import { CardHeader } from "@/components/CardHeader";
import { Toolbox } from "@/components/Toolbox";

const whatIDo = [
  { 
    name: "Web Designer", 
    icon: SiFigma,
    description: "Criação de interfaces intuitivas e atraentes utilizando Figma."
  },
  { 
    name: "Front End Developer", 
    icon: FaReact,
    description: "Desenvolvimento de interfaces modernas utilizando React.js ou Next.js."
  },
  { 
    name: "WordPress Developer", 
    icon: FaWordpress,
    description: "Criação e manutenção de sites otimizados e customizados em WordPress."
  }
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
  { title: "WordPress", iconType: SiWordpress }
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
  { title: "Edição de Vídeos", emoji: "🎬" }
];

export const AboutSection = () => {
  return (
    <div className="py-20 flex flex-col items-center font-sans px-4" data-aos="fade-up" id="sobremim">
      <SectionHeader
        eyebrow="Sobre mim"
        title="Tudo sobre meu mundo"
        description="Saiba mais sobre mim e o que eu faço!"
        data-aos="fade-up" data-aos-duration="1000"
      />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-60 gap-y-20 w-full max-w-5xl lg:mr-48">
        <Card>
          <CardHeader title="Meus Filmes" description="Veja quais os melhores filmes ;)" />
          <div className="flex justify-center items-center gap-6 lg:mt-10 sm:mt-8 flex-wrap sm:flex-nowrap">
            <Image src={IMGfilme1} alt="Movie1" className="lg:w-[200px] lg:h-[250px] sm:w-[150px] sm:h-[200px] rounded-lg shadow-lg"/>
            <Image src={IMGfilme2} alt="Movie2" className="lg:w-[200px] lg:h-[250px] sm:w-[150px] sm:h-[200px] rounded-lg shadow-lg"/>
          </div>
        </Card>
        <Card>
          <CardHeader title="Minhas Tecnologias" description="Explore as tecnologias que utilizo no meu dia a dia!" />
          <Toolbox toolboxItems={toolboxItems} className="mt-6" />
        </Card>
        <Card>
          <CardHeader title="Por trás do código" description="Explore meus interesses" />
          <div className="flex flex-wrap gap-4 justify-center mt-20">
            {hobbies.map((hobby) => (
              <div key={hobby.title} className="inline-flex gap-2 px-3 py-1 bg-gray-900 text-white rounded-full shadow-md lg:text-[16px] sm:text-[11px]">
                <span>{hobby.emoji}</span>
                <span>{hobby.title}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <CardHeader title="Meus Trabalhos" description="Tudo que eu faço!" />
          <div className="flex justify-center sm:justify-start sm:pl-6 sm:ml-[-50px] lg:ml-[-20px]"> 
            <div className="grid grid-cols-3 lg:gap-20 sm:gap-8 mt-20 w-full max-w-[500px] px-4">
              {whatIDo.map((item) => (
                <div 
                  key={item.name} 
                  className="border rounded-lg shadow-lg bg-gray-50 flex flex-col items-center justify-center gap-2 
                             w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[140px] lg:h-[140px]"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-red-500 flex items-center justify-center rounded-full">
                    <item.icon className="text-white text-sm sm:text-base lg:text-2xl" />
                  </div>
                  <h3 className="text-[8px] sm:text-xs lg:text-sm font-semibold text-gray-800 text-center">{item.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

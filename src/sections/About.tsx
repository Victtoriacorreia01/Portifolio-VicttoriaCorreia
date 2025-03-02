import Image from "next/image";
import StarIcon from "@/assets/icons/star.svg";
import { FaWordpress } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
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
    description: "Criação de interfaces intuitivas e atraentes utilizando Figma."
  },
  { 
    name: "Front End Developer", 
    icon: FaReact,
    description: "Desenvolvimento de interfaces modernas e responsivas utilizando React.js ou Next.js."
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
    <div className="py-20 flex flex-col items-center font-sans px-4" data-aos="fade-up" id="sobremim">
      <SectionHeader
        eyebrow="Sobre mim"
        title="Tudo sobre meu mundo"
        description="Saiba mais sobre mim e o que eu faço!"
        data-aos="fade-up" data-aos-duration="1000"
      />

      {/* Cards organizados */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-20 w-full max-w-5xl">
      <Card>
  <CardHeader title="Meus Filmes" description="Veja quais os melhores filmes ;)" />
  
  {/* Container das imagens */}
  <div className="flex justify-center items-center gap-6 mt-6 flex-wrap sm:flex-nowrap">
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
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            {hobbies.map((hobby) => (
              <div key={hobby.title} className="inline-flex gap-2 px-3 py-1 bg-gray-900 text-white rounded-full shadow-md lg:text-[15px] sm:text-[10px]">
                <span>{hobby.emoji}</span>
                <span>{hobby.title}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
  <CardHeader title="Meus Trabalhos" description="Tudo que eu faço!" />
  
  {/* Wrapper dos cards menores */}
  <div className="flex justify-center"> 
    <div className="grid lg:grid-cols-3 sm:grid-cols-3 gap-4 mt-16 lg:w-[550px] sm:w-[400px]  sm:h-[90px] w-full mx-auto p-[-6px]">
      {whatIDo.map((item, index) => (
        <div key={item.name} className="p-3 border rounded-lg shadow-lg bg-gray-50 flex flex-col items-center gap-2">
          <div className="w-10 h-10 bg-red-500 flex items-center justify-center rounded-full">
            <item.icon className="text-white text-3xl" />
          </div>
          <h3 className="lg:text-[10px] sm:text-[12px] font-semibold text-gray-800">{item.name}</h3>
          <p className="text-gray-600 lg:text-[12px] sm:text-[8px] text-center lg:w-[130px]">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</Card>


      </div>
    </div>
  );
};

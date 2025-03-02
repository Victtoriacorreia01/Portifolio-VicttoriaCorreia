import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import darkSaasLandingPage from "@/assets/images/projeto1.png";
import lightSaasLandingPage from "@/assets/images/Milk.png";
import aiStartupLandingPage from "@/assets/images/projeto4.png";
import aiStartupLanding from "@/assets/images/carrinho react.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const portfolioProjects = [
  {
    company: "Login Page",
    year: "2023",
    title: "",
    results: [
      { title: "HTML, CSS e JavaScript" },
      { title: "Inteiramente em inglês" },
      { title: "Totalmente responsivo" },
    ],
    link: "https://pagina-de-login-liart.vercel.app/",
    image: darkSaasLandingPage,
  },
  {
    company: "Milk",
    year: "2024",
    title: "",
    results: [
      { title: "Envio de emails" },
      { title: "Next.js" },
      { title: "Uso de Tailwind" },
    ],
    link: "https://landing-page-victtoriacorreia01s-projects.vercel.app/",
    image: lightSaasLandingPage,
  },
  {
    company: "REKTR",
    year: "2024",
    title: "",
    results: [
      { title: "HTML, CSS e JavaScript" },
      { title: "Design atraente" },
      { title: "Totalmente Responsivo" },
    ],
    link: "https://website-completo.vercel.app/",
    image: aiStartupLandingPage,
  },
  {
    company: "Carrinho de compras",
    year: "2023",
    title: "",
    results: [
      { title: "Context API do React" },
      { title: "React.js" },
      { title: "Context API" },
    ],
    link: "https://carrinho-react-theta.vercel.app/",
    image: aiStartupLanding,
  },
];

export const ProjectsSection = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 120,
      duration: 3000,
      easing: "ease-in-out",
      delay: 300,
    });
  }, []);

  return (
    <section className="pb-16" id="projetos">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text text-center">
            Resultados Reais
          </p>
        </div>
        <h2 className="font-bold text-3xl text-center mt-6 text-black">
          Meus Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl relative z-0 overflow-hidden shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="flex-1">
                <div
                  className="bg-gradient-to-r from-red-500 to-red-800 inline-flex font-bold
                  gap-2 uppercase tracking-widest text-xs sm:text-sm text-transparent bg-clip-text"
                >
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-bold text-lg sm:text-xl mt-2 text-gray-800">
                  {project.title}
                </h3>
                <hr className="border-t-1 border-red-200 mt-3 sm:mt-4" />
                <ul className="flex flex-col gap-2 sm:gap-3 mt-3 sm:mt-4">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex gap-2 text-xs sm:text-sm text-black">
                      <CheckCircleIcon className="size-4 sm:size-4" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-black text-sm text-white h-9 sm:h-10 w-[150px] font-bold rounded-xl inline-flex items-center justify-center gap-2 mt-4">
                    <span>Veja o projeto</span>
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                </a>
              </div>
              <div className="flex-1 mt-6 sm:mt-20" data-aos="fade-left">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

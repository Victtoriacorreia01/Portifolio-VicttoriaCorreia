export const ExperienceEducation = () => {
  return (
    <div className="bg-gradient-to-b from-white to-red-50 py-10 px-4 md:py-14 md:px-8" data-aos="fade-up" id="experiencia">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {/* Educação */}
        <div data-aos="fade-right">
          <h2 className="text-2xl font-semibold text-red-800 mb-6 text-center">Educação</h2>
          <div className="space-y-5">
            {[
              { year: "2024", title: "Análise e Desenvolvimento de Sistemas", place: "Unichristus - Fortaleza (4º semestre • Em andamento)" },
  { year: "2024", title: "Desenvolvedora Full Stack", place: "Formação Intensiva com foco em projetos reais (50h)" },
  { year: "2024", title: "Testes com Jest e React Testing Library", place: "Frontend Ceará" },
  { year: "2024", title: "MySQL e Modelagem de Banco de Dados", place: "Curso Completo com Práticas SQL (20h)" },
  { year: "2023", title: "React.js Avançado", place: "Alura • 33h" },
  { year: "2023", title: "JavaScript Completo", place: "Alura • 74h de conteúdo prático e moderno" },
  { year: "2023", title: "UI/UX Design no Figma", place: "Componentes, protótipos e Design Visual (20h)" },
  { year: "2023", title: "Python para Ciência de Dados", place: "Curso em Vídeo & Alura • 30h" },
  { year: "2023", title: "HTML5 e CSS Responsivo", place: "Projetos Semânticos com Flexbox e Grid" },
  { year: "2023", title: "WordPress & Elementor", place: "Criação de sites profissionais (62h)" },
  { year: "2018", title: "Ensino Médio Completo", place: "Colégio 7 de Setembro" },
            ].map((edu, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-5 rounded-lg shadow-md border-l-4 border-red-600 text-sm md:text-base max-w-xs mx-auto md:max-w-full"
                data-aos="zoom-in"
              >
                <h3 className="text-lg font-medium text-red-800">{edu.title}</h3>
                <p className="text-sm text-gray-700">{edu.place}</p>
                <span className="text-sm text-red-600 font-medium">{edu.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experiência */}
        <div data-aos="fade-left">
          <h2 className="text-2xl font-semibold text-red-800 mb-6 text-center">Experiências</h2>
          <div className="space-y-5">
            {[
              {
                year: "2025",
                title: "Site Institucional APRECE – Turismo no Ceará",
                description: "Desenvolvimento front-end freelancer com WordPress & Elementor, com foco em arquitetura da informação clara, navegação intuitiva e identidade visual para promoção do turismo municipal."
              },
              {
                year: "2025",
                title: "Ziara - Plataforma de E-commerce Full Stack",
                description: "SPA construída com React.js, integração com API REST em Java (Spring Boot), gerenciamento de estado com Context API, autenticação JWT, localStorage para persistência, rotas protegidas com react-router-dom, formulários com validação e componente modularizado. Projeto em parceria com Ariel Rodrigues."
              },
              {
                year: "2024",
                title: "Estágio - Obras Almeida",
                description: "Desenvolvimento da interface de um sistema de cadastro de obras utilizando as tecnologias Next.js, Tailwind CSS, TypeScript e integração de APIs."
              },
              {
                year: "2024",
                title: "Carrinho de Compras",
                description: "Implementação com Context API para compartilhamento de estados."
              },
              {
                year: "2024",
                title: "Experiência com Figma",
                description: "Criação de protótipos e wireframes interativos, design de interfaces intuitivas e colaboração com desenvolvedores para implementação."
              },
              {
                year: "2024",
                title: "Landing Page com Integração de E-mails e Validação",
                description: "Landing page moderna com Next.js, Formik/Yup para validação de campos, integração com API de e-mails e layout responsivo com foco em conversão."
              }
            ].map((exp, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-5 rounded-lg shadow-md border-l-4 border-yellow-600 text-sm md:text-base max-w-xs mx-auto md:max-w-full"
                data-aos="zoom-in"
              >
                <h3 className="text-lg font-medium text-yellow-700">{exp.title}</h3>
                <p className="text-sm text-gray-700">{exp.description}</p>
                <span className="text-sm text-yellow-600 font-medium">{exp.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ExperienceEducation = () => {
  return (
    <div className="bg-gradient-to-b from-white to-red-50 py-10 px-4 md:py-14 md:px-8" data-aos="fade-up" id="experiencia">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {/* Educação */}
        <div data-aos="fade-right">
          <h2 className="text-2xl font-semibold text-red-800 mb-6 text-center">Educação</h2>
          <div className="space-y-5">
            {[
              { year: "2024", title: "Análise e Desenvolvimento de Sistemas", place: "Unichristus - Fortaleza (Em andamento)" },
              { year: "2024", title: "Testes de Unidade em Aplicações React", place: "Frontend Ceará" },
              { year: "2023", title: "React.js", place: "Alura" },
              { year: "2023", title: "JavaScript", place: "Alura" },
              { year: "2023", title: "Figma - UI/UX", place: "Alura" },
              { year: "2023", title: "Python - Curso em Vídeo & Alura", place: "" },
              { year: "2023", title: "HTML5 e CSS", place: "Alura" },
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
                year: "2024", 
                title: "Estágio - Obras Almeida", 
                description: "Desenvolvimento da interface de um sistema de cadastro de obras utilizando as tecnologias Next.js, Tailwind CSS, TypeScript e integração de APIs." 
              },
              { 
                year: "2024", 
                title: "E-commerce Completo", 
                description: "Projeto acadêmico com React.js, Java e MySQL." 
              },
              { 
                year: "2024", 
                title: "Carrinho de Compras", 
                description: "Implementação com Context API para compartilhamento de estados." 
              },
              { 
                year: "2024", 
                title: "Landing Page para Leads", 
                description: "Aplicação Next.js com API para envio de e-mails e validação com Formik/Yup." 
              },
              { 
                year: "2024", 
                title: "Cadastro de Fornecedores", 
                description: "Módulo para gestão de fornecedores com validações e design responsivo." 
              },
              { 
                year: "2023", 
                title: "Landing Pages & E-commerce", 
                description: "Criação de interfaces responsivas com HTML, CSS e JS puro." 
              },
              { 
                year: "2024", 
                title: "Experiência com Figma", 
                description: "Criação de protótipos e wireframes interativos, design de interfaces intuitivas e colaboração com desenvolvedores para implementação." 
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

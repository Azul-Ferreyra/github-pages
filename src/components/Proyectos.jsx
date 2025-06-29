// src/components/Proyectos.jsx
import { ExternalLink, Github } from 'lucide-react'; // Import icons

function Proyectos() {
  // Consider using higher-res or more relevant images
  const projects = [
    {
      name: "Defensive-Security",
      description: "Scripts de la capacitación en ciberseguridad defensiva.",
      tech: "Jupyter Notebook",
      link: "https://github.com/Azul-Ferreyra/Defensive-Security"
    },
    {
      name: "Python-para-Analisis-de-Datos",
      description: "Proyectos realizados en Python para el análisis de datos.",
      tech: "Python",
      link: "https://github.com/Azul-Ferreyra/Python-para-Analisis-de-Datos"
    },
    {
      name: "URL",
      description: "Modelo predictivo de seguridad de las URLs.",
      tech: "Jupyter Notebook",
      link: "https://github.com/Azul-Ferreyra/URL"
    },
    {
      name: "Vuelos",
      description: "Proyecto final Coderhouse.",
      tech: "",
      link: "https://github.com/Azul-Ferreyra/Vuelos"
    },
    {
      name: "NovaByte",
      description: "Proyecto final.",
      tech: "",
      link: "https://github.com/Azul-Ferreyra/NovaByte"
    },
    {
      name: "EscanerPuerto",
      description: "Escáner de puertos.",
      tech: "Python",
      link: "https://github.com/Azul-Ferreyra/EscanerPuerto"
    },
    {
      name: "KEYLOGGER",
      description: "Proyecto de ciberseguridad con python.",
      tech: "Python",
      link: "https://github.com/Azul-Ferreyra/KEYLOGGER"
    },

    {
      name: "InmueblesBogota",
      description: "Análisis de inmuebles de Bogotá.",
      tech: "Jupyter Notebook",
      link: "https://github.com/Azul-Ferreyra/InmueblesBogota"
    },

  ];

  return (
    <section id="proyectos" className="bg-[#181A20] py-20 font-mono border-t-2 border-[#39FF14]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center mb-8">
          <div className="text-[#00ffe7] text-sm select-none mb-2">$ ls ~/repos/</div>
          <h2 className="text-2xl font-bold text-[#39FF14] mb-2">Proyectos en GitHub</h2>
          <p className="text-base text-[#baffc9] max-w-2xl mx-auto">
            Selección de proyectos destacados en ciberseguridad, data science y desarrollo, publicados en mi perfil de GitHub.
          </p>
        </div>
        <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#181A20] border border-[#39FF14] rounded-lg p-5 flex flex-col shadow-[0_0_12px_#39FF1440] font-mono transition-all duration-200"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="mb-2 text-[#00ffe7] text-xs select-none">
                $ cd ~/repos/{project.name}
              </div>
              <div className="mb-1 text-[#39FF14] text-lg font-semibold">
                {project.name}
              </div>
              <div className="mb-2 text-[#baffc9] text-sm flex-grow">
                {project.description}
              </div>
              {project.tech && (
                <div className="mb-3 text-[#00ffe7] text-xs">
                  [{project.tech}]
                </div>
              )}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#39FF14] hover:text-[#00ffe7] text-sm border border-[#39FF14] rounded px-3 py-1 transition-colors duration-200 mt-auto"
              >
                <Github size={16} />
                Ver 
                <ExternalLink size={14} className="opacity-70" />
              </a>
            </div>
          ))}
        </div>
         {/* Link to GitHub profile */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/Azul-Ferreyra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base text-[#00ffe7] hover:text-[#39FF14] font-mono underline transition-colors"
            >
              <Github size={18} />
              Ver más en GitHub
            </a>
          </div>
      </div>
    </section>
  );
}

export default Proyectos;

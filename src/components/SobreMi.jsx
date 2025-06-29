// src/components/SobreMi.jsx
import { BookOpen, CheckCircle2 } from 'lucide-react'; // Import icons
import Typewriter from './Typewriter';

function SobreMi() {
  // Aptitudes con nivel (0-100)
  const skills = [
    { name: 'SIEM: Splunk - Wazuh - Snort - ', level: 80 },
    { name: 'SOAR / Threat Intelligence: The Hive - CaseBender - Cortex - MISP - OpenCTI', level: 85 },
    { name: 'Análisis Forense / Respuesta a Incidentes: YARA - CyberChef - Autopsy  ', level: 70 },
    { name: 'EDR / Seguridad de Endpoints: AppLocker - Wazuh como XDR  ', level: 75 },
    { name: 'Cloud / Infraestructura: AWS (entornos de prueba) - Docker / Docker Compose - Squid Proxy  ', level: 70 },
    { name: 'Cifrado / Seguridad de datos: OpenSSL / RSA - Full Disk Encryption - DLP / IRM ', level: 65 },
    { name: 'Lenguajes y tecnologías: HTML / CSS / Python / .NET / SQL Server ', level: 55 },
  ];

  const courses = [
    "Certificación en Ciberseguridad Defensiva | Udemy",
    "Certificación en Network Hacking | EducacionIT",
    "Certificación en Data Science| CoderHouse",
    "Certificación en Python para el analisis de datos | EducacionIT",
    "Certificación en Microsoft Azure Data Fundamentals| EducacionIT",
    "Certificación en Introduccion a Redes| EducacionIT",
    "Certificación en Data Analytics| CoderHouse",
    "Certificación en Ciberseguridad| CoderHouse"
  ];

  // Certificados
  const certImages = [
    "https://media.discordapp.net/attachments/1359956417636860098/1360671252758659092/Certificado-Data-Science-EducacionIT.png?ex=67fbf75a&is=67faa5da&hm=39454a23e436243e92d48e446d5d0e6947a80addb9518e3eb8674c339f3f5e6c&=&format=webp&quality=lossless&width=1036&height=800",
    "https://media.discordapp.net/attachments/1359956417636860098/1360671253144408145/Certificado-Introduccion-al-mundo-web-EducacionIT.png?ex=67fbf75a&is=67faa5da&hm=47f4896e62393fe36328b3db9856413e3b520dd617513ad87caa82fb286d1a3d&=&format=webp&quality=lossless&width=1036&height=800",
    "https://media.discordapp.net/attachments/1359956417636860098/1360671253618229309/Certificado-Introduccion-a-Redes-EducacionIT.png?ex=67fbf75a&is=67faa5da&hm=e86902ef8ffb36fcb34ef1dcb537d6f0a6ca49556cc3d834c958573be047f1a4&=&format=webp&quality=lossless&width=1036&height=800",
    "https://media.discordapp.net/attachments/1359956417636860098/1360671254096511046/Certificado-Microsoft-Azure-Data-Fundamentals-DP-900T00-A-EducacionIT.png?ex=67fbf75b&is=67faa5db&hm=8ce7786775e32442bdf06c725b0a660b05652ee7d7d535a6eb941f633e90833e&=&format=webp&quality=lossless&width=1036&height=800",
    "https://media.discordapp.net/attachments/1359956417636860098/1360671325584363721/Certificado-Power-BI-avanzado-EducacionIT.png?ex=67fbf76c&is=67faa5ec&hm=ec61c84435e15a6800f175bf2b1725c8b8e0ac2e78b64f0b38bae4cdba2477a8&=&format=webp&quality=lossless&width=1036&height=800",
    "https://media.discordapp.net/attachments/1359956417636860098/1360671326020436149/Certificado-Protocolo-HTTPS-EducacionIT.png?ex=67fbf76c&is=67faa5ec&hm=21c2a5c3eca5baae5e031f27a8f197b204bfcd8221796e1d7fa6d594ed8e7cdf&=&format=webp&quality=lossless&width=1036&height=800",
    "https://media.discordapp.net/attachments/1359956417636860098/1360671326486134985/Certificado-Python-para-Analisis-de-Datos-EducacionIT.png?ex=67fbf76c&is=67faa5ec&hm=9c82991a3e1e430b2b30b06f26d5eca1fc047ec7d5704ce0ba485db9975d4b56&=&format=webp&quality=lossless&width=1036&height=800",
    "https://media.discordapp.net/attachments/1359956417636860098/1360671326922346696/Certificado-Storytelling-EducacionIT.png?ex=67fbf76c&is=67faa5ec&hm=734ee511af44b171f8c21033aeedd95c20a92b84c4b61133a6bc3a84543a6bfd&=&format=webp&quality=lossless&width=1036&height=800",
    "https://media.discordapp.net/attachments/1359956417636860098/1360671591100584067/data.png?ex=67fbf7ab&is=67faa62b&hm=6d36f296585c68cc64abc9e9d2d6804d9ebe9385a658b4a5d69b5a11e094517d&=&format=webp&quality=lossless&width=1234&height=800",
    "https://media.discordapp.net/attachments/1359956417636860098/1360671591859621908/DATASCIENCE.png?ex=67fbf7ab&is=67faa62b&hm=988b9da9805ac287745e51a1a1c64693b8f22696282dc227fba48522488e67de&=&format=webp&quality=lossless&width=1234&height=800",
    "https://media.discordapp.net/attachments/1359956417636860098/1360671592245628938/prevencion.jpg?ex=67fbf7ab&is=67faa62b&hm=0d88941fc0d41bb521a0c1729f8ce6e39ba5895dcafd80fc7b849d38e320770d&=&format=webp&width=1076&height=800",
    "https://media.discordapp.net/attachments/1359956417636860098/1360671592765456495/Seguridad-en-Redes.png?ex=67fbf7ab&is=67faa62b&hm=fc5ebc945fb77b5cb7f05a635bf884b49edfc0691cb87f64a7ce639c4471a988&=&format=webp&quality=lossless&width=1036&height=800"
  ];

  return (
    <section id="sobre-mi" className="bg-[#181A20] py-20 font-mono border-b-2 border-[#39FF14]">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* About Me Text */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-12">
          <div className="w-full md:w-2/3 space-y-4 bg-[#23272e] border border-[#39FF14] rounded-lg p-8 shadow-[0_0_12px_#39FF1440]">
            <div className="text-[#00ffe7] text-sm mb-2 select-none">
              <Typewriter
                texts={["$ whoami"]}
                speed={70}
                eraseSpeed={20}
                delay={900}
                className="font-mono"
                cursorClass="text-[#39FF14]"
              />
            </div>
            <h2 className="text-2xl font-bold text-[#39FF14] mb-3">Sobre mí</h2>
            <p className="text-base text-[#baffc9] leading-relaxed">
            Me especializo en la construcción de entornos SOC (Security Operations Center), con experiencia hands-on en AWS donde diseño e integro soluciones utilizando herramientas SIEM y SOAR para el monitoreo y respuesta a incidentes.

Actualmente, estoy en proceso de formación activa para convertirme en Analista SOC 1, complementando mis habilidades técnicas con una sólida base teórica.

Mi compromiso con el campo se extiende a mi rol en una empresa tecnológica en Miami, donde contribuyo en el área de Aseguramiento de Calidad (QA), validando el correcto funcionamiento de herramientas orientadas al entorno SOC. Además, me enorgullece colaborar con XSec, una comunidad de ciberseguridad, donde creo y comparto contenido exclusivo de Blue Team, fomentando el aprendizaje colectivo.

Valoro profundamente la colaboración y el aprendizaje continuo, siempre buscando nuevos desafíos que me permitan seguir creciendo. Resido en España y estoy abierta a nuevas oportunidades que me permitan aplicar y expandir mis conocimientos en la defensa y operación de ciberseguridad.
            </p>
            <p className="text-base text-[#baffc9] leading-relaxed">
              
            </p>
          </div>
        </div>


        {/* Aptitudes with Animation */}
        <div id="aptitudes" className="space-y-6 scroll-mt-20 pt-8">
          <div className="bg-[#23272e] border border-[#39FF14] rounded-lg p-8 shadow-[0_0_12px_#39FF1440]">
            <h2 className="text-2xl font-bold text-[#39FF14] text-center mb-4">Aptitudes</h2>
            <p className="text-base text-[#baffc9] text-center max-w-2xl mx-auto mb-6">
              Tecnologías y lenguajes con los que tengo experiencia y sigo aprendiendo:
            </p>
            <div className="flex flex-col gap-5 max-w-lg mx-auto pt-2">
              {skills.map((skill, index) => (
                <div key={skill.name} className="w-full">
                  <div className="flex justify-between mb-1">
                    <span className="text-[#00ffe7] font-mono text-sm">{skill.name}</span>
                    <span className="text-[#baffc9] font-mono text-xs">{skill.level}%</span>
                  </div>
                  <div className="w-full h-4 bg-[#181A20] rounded-full border border-[#00ffe7] overflow-hidden shadow-[0_0_8px_#00ffe755]">
                    <div
                      className="h-full bg-gradient-to-r from-[#39FF14] to-[#00ffe7] transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cursos Realizados */}
        <div className="bg-[#23272e] border border-[#39FF14] rounded-lg p-8 shadow-[0_0_12px_#39FF1440] space-y-5">
          <h2 className="text-2xl font-bold text-[#39FF14] flex items-center gap-2.5 mb-4">
            <BookOpen className="text-[#00ffe7]" size={22} strokeWidth={2}/>
            Cursos Realizados
          </h2>
          <ul className="list-none space-y-3 pl-1">
            {courses.map((curso, index) => (
              <li key={index} className="flex items-start text-base text-[#baffc9]">
                <CheckCircle2 className="h-5 w-5 text-[#00ffe7] mr-3 mt-1 flex-shrink-0" strokeWidth={2}/>
                {curso}
              </li>
            ))}
          </ul>
        </div>

        {/* Carrusel de Certificados */}

      </div>
    </section>
  );
}

export default SobreMi;

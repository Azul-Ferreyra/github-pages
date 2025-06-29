// src/components/Hero.jsx
import { useEffect, useState } from 'react';
import { ArrowDown, Briefcase, MessageSquare } from 'lucide-react'; // Import icons
import Typewriter from './Typewriter';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // ... (scrollToSection remains the same) ...
   const scrollToSection = (sectionId) => {
     const section = document.getElementById(sectionId);
     if (section) {
       const yOffset = -70;
       const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
       window.scrollTo({ top: y, behavior: 'smooth' });
     }
   };

  // Define animation classes based on visibility state
  const textContainerClasses = `text-center md:text-left max-w-2xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;
  const imageContainerClasses = `flex-shrink-0 transition-all duration-[1200ms] ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-10 scale-90'}`;
  const scrollIndicatorClasses = `absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white transition-opacity duration-1000 delay-700 ${isVisible ? 'opacity-50 hover:opacity-100' : 'opacity-0'}`;

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[#181A20] text-[#39FF14] border-b-4 border-[#39FF14] shadow-[0_0_32px_#39FF14aa]"
    >
      {/* Fondo minimalista con líneas flotantes */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
          style={{ minHeight: "100vh" }}
        >
          {/* Líneas diagonales */}
          <g className="animate-[floatLines_18s_linear_infinite]">
            <line x1="0" y1="0" x2="1440" y2="900" stroke="#00ffe7" strokeWidth="1.2" opacity="0.08" />
            <line x1="0" y1="900" x2="1440" y2="0" stroke="#39FF14" strokeWidth="1.2" opacity="0.08" />
            <line x1="0" y1="300" x2="1440" y2="1200" stroke="#00ffe7" strokeWidth="1.2" opacity="0.06" />
            <line x1="0" y1="600" x2="1440" y2="1500" stroke="#39FF14" strokeWidth="1.2" opacity="0.06" />
            <line x1="360" y1="0" x2="1800" y2="900" stroke="#00ffe7" strokeWidth="1.2" opacity="0.05" />
            <line x1="1080" y1="0" x2="2520" y2="900" stroke="#39FF14" strokeWidth="1.2" opacity="0.05" />
          </g>
          {/* Líneas verticales */}
          <g className="animate-[floatLines2_22s_linear_infinite]">
            <line x1="240" y1="0" x2="240" y2="900" stroke="#00ffe7" strokeWidth="1" opacity="0.07" />
            <line x1="720" y1="0" x2="720" y2="900" stroke="#39FF14" strokeWidth="1" opacity="0.07" />
            <line x1="1200" y1="0" x2="1200" y2="900" stroke="#00ffe7" strokeWidth="1" opacity="0.07" />
          </g>
        </svg>
      </div>
      <style>{`
        @keyframes floatLines {
          0% { transform: translateY(0px);}
          100% { transform: translateY(-30px);}
        }
        @keyframes floatLines2 {
          0% { transform: translateY(0px);}
          100% { transform: translateY(40px);}
        }
      `}</style>

      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">

        {/* Text content with animations */}
        <div className={textContainerClasses}>
          {/* Added a subtitle/role */}
           <span className="inline-block bg-[#23272e] text-[#00ffe7] text-sm font-semibold px-4 py-1 rounded-full mb-4 animate-terminal-glow animate-flicker shadow-lg border border-[#00ffe7]">
           Valencia, Spain
           </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight text-[#39FF14]">
            Azul Ferreyra 
          </h1>
          <h2 className="text-lg sm:text-xl font-medium mb-4 text-[#00ffe7] min-h-[2.5em]">
            <Typewriter
              texts={[
                "SOC Analyst",
                "Ciberseguridad Defensiva",
                "Threat Detection & Response",
                "Splunk",
                "Blue Team Enthusiast"
              ]}
              speed={55}
              eraseSpeed={25}
              delay={1100}
              className="font-mono"
              cursorClass="text-[#39FF14]"
            />
          </h2>
          <p className="text-base sm:text-lg text-[#baffc9] mb-8 max-w-xl mx-auto md:mx-0">
          Apasionada por la ciberseguridad y en formación constante como analista SOC. Me especializo en detección de amenazas, gestión de alertas y automatización de respuesta a incidentes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() => scrollToSection('proyectos')}
              className="flex items-center gap-2 px-6 py-3 bg-[#181A20] text-[#39FF14] font-semibold rounded-md border-2 border-[#39FF14] shadow-lg hover:bg-[#23272e] hover:text-[#00ffe7] hover:border-[#00ffe7] transition-all duration-300 ease-in-out transform hover:-translate-y-1 animate-flicker"
            >
              <Briefcase size={18} /> Ver proyectos
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="flex items-center gap-2 px-6 py-3 bg-transparent text-[#00ffe7] font-medium rounded-md border-2 border-[#00ffe7] hover:bg-[#23272e] hover:text-[#39FF14] hover:border-[#39FF14] transition-all duration-300 ease-in-out animate-flicker"
            >
               <MessageSquare size={18} /> Contactar
            </button>
          </div>
        </div>

        {/* Image container with animations */}
         <div className={imageContainerClasses}>
           <div className="relative group">
             <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition duration-1000 group-hover:duration-300 animate-tilt"></div>
             <img
               src="/github-pages/rostro.png"
               alt="Azul Ferreyra"
               className="relative w-48 h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-white shadow-xl"
               width="256"
               height="256"
               loading="eager"
            />
           </div>
         </div>

      </div>

      {/* Scroll indicator */}
      <div className={scrollIndicatorClasses}>
        <span className="text-xs mb-1 uppercase tracking-wider">Scroll</span>
        <ArrowDown className="w-5 h-5 animate-bounce" strokeWidth={1.5}/>
      </div>

      {/* Tilt animation CSS is now in index.css */}
    </section>
  );
}

export default Hero;

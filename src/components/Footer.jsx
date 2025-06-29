// src/components/Footer.jsx
import { Linkedin, Instagram, Github, Link as LinkIcon } from 'lucide-react'; // Import icons

function Footer() {
  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/anzur/", Icon: Linkedin },
    { name: "Instagram", href: "https://www.instagram.com/anzur.log/", Icon: Instagram },
    { name: "GitHub", href: "https://github.com/Azul-Ferreyra", Icon: Github },
    { name: "Linktree", href: "https://linktr.ee/Anzur.log", Icon: LinkIcon } // Use Lucide's Link icon
  ];

  return (
    <footer id="contacto" className="bg-[#181A20] text-[#39FF14] pt-16 pb-8 border-t-4 border-[#39FF14] shadow-[0_-2px_24px_#39FF1455]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold mb-6 text-[#39FF14] flex items-center justify-center gap-2">
          Contáctame
        </h2>
        <p className="text-base mb-10 text-[#baffc9] max-w-xl mx-auto">
          Siempre abierta a nuevas oportunidades y colaboraciones. Puedes contactarme a través de mis redes profesionales <p className="text-base mb-10 text-[#baffc9] max-w-xl mx-auto">
  o escribime directamente a <a href="mailto:info.anzur@gmail.com" className="underline hover:text-[#39FF14]">info.anzur@gmail.com</a>
</p>
        </p>
     

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#39FF14] hover:text-[#baffc9] transition-colors duration-200"
              aria-label={`Visita mi perfil de ${link.name}`}
            >
              <link.Icon size={26} strokeWidth={1.5} />
            </a>
          ))}
        </div>

        <div className="border-t border-[#39FF14] pt-8 mt-8 text-sm text-[#baffc9]">
          <p>© {new Date().getFullYear()} Azul Ferreyra  . Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

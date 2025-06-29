import React, { useState } from "react";

// Lista de videos con tags asociados
const videos = [
  {
    src: "https://img.youtube.com/vi/GxQLXRPoJJw/hqdefault.jpg",
    alt: "Análisis de Amenazas",
    tags: ["Threat Analysis","SIEM","cybersecurity"],
    videoUrl: "https://www.youtube.com/watch?v=GxQLXRPoJJw", 
  },
  {
    src:"/github-pages/YARA.png", 
    alt: "YARA Detección de Amenazas",
    tags: ["Threat Analysis", "cybersecurity"],
    videoUrl: "https://www.instagram.com/p/DGYjRrcspbQ/", 
  },
  {
    src: "https://img.youtube.com/vi/_PviIBCptSg/hqdefault.jpg", 
    alt: "SOC OPEN SOURCE 1",
    tags: ["SOAR", "cybersecurity", "open source"],
    videoUrl: "https://www.youtube.com/watch?v=_PviIBCptSg", 
  },
  {
    src: "https://img.youtube.com/vi/-jTuFOJ1nJE/hqdefault.jpg",  
    alt: "MISP",
    tags: ["threat analysis", "Cybersecurity", "Open Source"],
    videoUrl: "https://www.youtube.com/watch?v=-jTuFOJ1nJE", 
  },
  {
    src:"/github-pages/SOC.png", 
    alt: "SOC Training",
    tags: ["SIEM", "Cybersecurity"],
    videoUrl: "https://www.instagram.com/p/DFqXyPos-pG/", 
  },
  {
    src:"/github-pages/ATAQUE.png", 
    alt: "Explotación y escalada de privilegios / Pentesting",
    tags: ["Pentesting", "Cybersecurity"],
    videoUrl: "https://www.instagram.com/p/DBNfox7iqTA/", 
  },
  {
    src:"/github-pages/NMAP.png", 
    alt: "NMAP Escaneo Señuelo",
    tags: ["Network Security", "Cybersecurity","Pentesting"],
    videoUrl: "https://www.instagram.com/p/DA0iTcXA7pJ/", 
  },
  {
    src:"/github-pages/SNORT.png", 
    alt: "Evasión de SNORT",
    tags: ["Network Security", "Cybersecurity", "Pentesting"],
    videoUrl: "https://www.instagram.com/p/DA0VP2EAMmj/", 
  },
  {
    src:"/github-pages/THEHIVE.png", 
    alt: "Entorno AWS / THE HIVE integracion con SPLUNK ",
    tags: ["SOAR", "Cybersecurity", "Cloud"],
    videoUrl: "https://www.instagram.com/p/C_GpewJgqin/", 
  },
  {
    src:"/github-pages/NESSUS.png", 
    alt: "Seguridad con NESSUS",
    tags: ["Cybersecurity", "Vulnerability"],
    videoUrl: "https://www.instagram.com/p/C_GPQ94tlO4/", 
  },
  {
    src:"/github-pages/SOAR.png",  
    alt: "SPLUNK SOAR",
    tags: ["SOAR", "Cybersecurity"],
    videoUrl: "https://www.instagram.com/p/C_F4uSxAEQN/", 
  },
  {
    src:"/github-pages/SPLUNK.png",  
    alt: "Entorno AWS / Splunk",
    tags: ["SIEM", "Cybersecurity", "Cloud"],
    videoUrl: "https://www.instagram.com/p/C_F3_AXAS6i/", 
  },
  {
    src:"/github-pages/WAZUH.png", 
    alt: "WAZUH",
    tags: ["SIEM", "Cybersecurity", "Open Source"],
    videoUrl: "https://www.instagram.com/p/C_AmtAlA_QC/",
  },
  {
    src:"/github-pages/APP.png", 
    alt: "AppLocker Control de Ejecución en Aplicaciones",
    tags: ["Cybersecurity", "Vulnerability"],
    videoUrl: "https://www.instagram.com/p/C_AikJpATFG/", 
  },
  {
    src:"/github-pages/EDR.png", 
    alt: "EDR",
    tags: ["Cybersecurity", "Endpoint Security"],
    videoUrl: "https://www.instagram.com/p/C-2j44NNqa4/", 
  },
  {
    src: "/github-pages/SQUID.png", 
    alt: "Entorno AWS / Squid para HTTP y HTTPS",
    tags: ["Cybersecurity", "Network Security", "Cloud"],
    videoUrl: "https://www.instagram.com/p/C-0lvJ0g9Kr/", 
  },
  {
    src:"/github-pages/AUTOPSY.png", 
    alt: "Autopsy",
    tags: ["Cybersecurity", "Digital Forensics"],
    videoUrl: "https://www.instagram.com/p/C-Yoh36AjDs/", 
  },
  {
    src:"/github-pages/IRM.png",  
    alt: "Prevencion Fuga de Datos Sensibles IRM ",
    tags: ["Cybersecurity", "Data Protection"],
    videoUrl: "https://www.instagram.com/p/C-Yjb1kARjr/", 
  },
  {
    src:"/github-pages/DLP.png", 
    alt: "DLP Reforzar la Protección de Datos Sensibles",
    tags: ["Cybersecurity", "Data Protection"],
    videoUrl: "https://www.instagram.com/p/C-VgDkstOM0/", 
  },
  {
    src:"/github-pages/RSA.png", 
    alt: "Par de Claves RSA con OpenSSL",
    tags: ["Cybersecurity", "Cryptography"],
    videoUrl: "https://www.instagram.com/p/C9Znu5TvIcv/", 
  },
  {
    src:"/github-pages/CASEBENDER.png", 
    alt: "CaseBender",
    tags: ["Cybersecurity", "SOAR" ],
    videoUrl: "https://www.instagram.com/p/C9Znu5TvIcv/", 
  },
  {
    src: "https://img.youtube.com/vi/wqsEG562ozI/hqdefault.jpg", 
    alt: "OpenCTI",
    tags: ["Threat Analysis","cybersecurity"],
    videoUrl: "https://www.youtube.com/watch?v=wqsEG562ozI", 
  },
  {
    src: "https://img.youtube.com/vi/y5C0zOiZZ8s/hqdefault.jpg", 
    alt: "Día 3 convertirme en Analista SOC 1",
    tags: ["network security","open source","cybersecurity"],
    videoUrl: "https://www.youtube.com/watch?v=y5C0zOiZZ8s", 
  },
  {
    src: "https://img.youtube.com/vi/meuy21cqUeI/hqdefault.jpg",
    alt: "SOC implementation on AWS",
    tags: ["cybersecurity", "cloud", "network security"],
    videoUrl: "https://www.youtube.com/watch?v=meuy21cqUeI",
  },
  {
    src: "https://img.youtube.com/vi/hpVGiKcqPT4/hqdefault.jpg",
    alt: "Database deployment on AWS",
    tags: ["cloud", "cybersecurity", "data protection"],
    videoUrl: "https://www.youtube.com/watch?v=hpVGiKcqPT4",
  },
  {
    src: "https://img.youtube.com/vi/2aDXGRq3Jgk/hqdefault.jpg",
    alt: "pfSense perimeter firewall on AWS",
    tags: ["cloud", "network security", "cybersecurity"],
    videoUrl: "https://www.youtube.com/watch?v=2aDXGRq3Jgk",
  },
  {
    src: "https://img.youtube.com/vi/dMjzTlk6ED0/hqdefault.jpg",
    alt: "Load balancer deployment on AWS",
    tags: ["cloud", "network security", "cybersecurity"],
    videoUrl: "https://www.youtube.com/watch?v=dMjzTlk6ED0",
  },
  // Agrega más videos aquí...
];

function uniqueTags(videos) {
  // Devuelve un array de tags únicos
  return [
    ...new Set(videos.flatMap((video) => video.tags.map((t) => t.toLowerCase()))),
  ];
}

export default function GaleriaVideos() {
  const [busqueda, setBusqueda] = useState("");
  const tagsDisponibles = uniqueTags(videos);

  // Filtra por tag (case-insensitive, permite buscar por substring)
  const videosFiltrados = videos.filter((video) =>
    busqueda.trim() === ""
      ? true
      : video.tags.some((tag) =>
          tag.toLowerCase().includes(busqueda.trim().toLowerCase())
        )
  );

  return (
    <section id="galeria-videos" className="mt-12">
      <h2 className="text-2xl mb-6 text-[#39FF14] text-center">Galería de Videos</h2>
      <div className="flex flex-col items-center mb-8">
        <input
          type="text"
          placeholder="Buscar por tag (ej: siem, soar, ciberseguridad)..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="px-4 py-2 rounded bg-[#23272e] border border-[#00ffe7] text-[#baffc9] w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-[#39FF14] mb-3"
        />
        <div className="flex flex-wrap gap-2 justify-center">
          {tagsDisponibles.map((tag) => (
            <button
              key={tag}
              onClick={() => setBusqueda(tag)}
              className={`px-3 py-1 rounded-full border text-xs font-mono transition-colors ${
                busqueda.toLowerCase() === tag
                  ? "bg-[#00ffe7] text-[#181A20] border-[#39FF14]"
                  : "bg-[#23272e] text-[#00ffe7] border-[#00ffe7] hover:bg-[#181A20]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {videosFiltrados.length === 0 ? (
          <div className="col-span-full text-center text-[#baffc9]">
            No se encontraron videos para esa búsqueda.
          </div>
        ) : (
          videosFiltrados.map((video, idx) => (
            <div
              key={idx}
              className="bg-[#23272e] border border-[#00ffe7] rounded-lg p-4 flex flex-col items-center shadow-[0_0_12px_#39FF1440]"
            >
              <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={video.src}
                  alt={video.alt}
                  className="max-h-56 object-cover mb-3 rounded shadow-lg cursor-pointer"
                  loading="lazy"
                />
              </a>
              <div className="text-[#baffc9] text-sm text-center mb-2">{video.alt}</div>
              <div className="flex flex-wrap gap-1 justify-center">
                {video.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full bg-[#181A20] text-[#00ffe7] text-xs border border-[#00ffe7] font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

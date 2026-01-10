import './Experience.css'

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experiencia & Trayectoria</h2>

        <div className="experience-content">
          <div className="experience-text">
            <p>
              Autodidacta, resiliente, comunicativa y apasionada por la ciberseguridad son cualidades que me definen.
              He trabajado en la implementación y gestión de entornos seguros, incluyendo:
            </p>

            <ul className="experience-list">
              <li>Configuración y administración de firewalls</li>
              <li>Despliegue de WAF y balanceadores de carga</li>
              <li>Segmentación de redes y subredes en entornos cloud</li>
              <li>Integración y operación de SIEM</li>
              <li>Acceso remoto seguro sin exposición de puertos</li>
            </ul>

            <div className="experience-internship">
              <h3>Prácticas Profesionales</h3>
              <p>
                Realicé prácticas en una empresa donde me encargué del control de calidad (QA)
                para una herramienta SOAR. Durante esta experiencia adquirí conocimientos sólidos en
                metodologías SCRUM/Agile, contribuyendo al desarrollo y testing de soluciones de ciberseguridad.
              </p>
            </div>

            <div className="experience-current">
              <h3>Desarrollo Actual</h3>
              <p>
                Actualmente me encuentro desarrollando un producto SaaS basado en AWS como parte de la competición
                "Using Amazon Bedrock with AWS Free Tier for the 10,000 AIdeas Competition". El proyecto está
                diseñado para resolver problemas reales en entornos de pequeñas y medianas empresas, combinando
                automatización, seguridad y servicios cloud escalables. Independientemente del resultado de la
                competición, el desarrollo continuará como parte de mi portfolio profesional y de mi crecimiento
                como ingeniera en Cloud y DevSecOps.
              </p>
            </div>
          </div>

          <div className="location-info">
            <div className="location-card">
              <h3>🇦🇷 Argentina</h3>
              <p>Origen y base actual</p>
            </div>

            <div className="location-card target">
              <h3>🇪🇸 España</h3>
              <p>Destino profesional</p>
              <p className="location-subtitle">
                En búsqueda activa de oportunidades laborales, incluyendo precontrato de trabajo
              </p>
            </div>

            <div className="opportunities">
              <h4>Abierta a oportunidades en:</h4>
              <div className="opportunity-tags">
                <span>DevSecOps</span>
                <span>Cloud Security</span>
                <span>Ingeniería de Seguridad</span>
                <span>Consultoría</span>
                <span>Charlas Técnicas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
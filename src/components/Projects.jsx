import './Projects.css'

function Projects() {
  const githubRepos = [
    {
      name: 'Infraestructura como código en AWS',
      description: 'Laboratorio SOC con Terraform en AWS - Preparado para KavaCon Paraguay. Despliegue automatizado de infraestructura de seguridad con roles diferenciados.',
      tech: ['Terraform', 'AWS', 'SOC', 'Wazuh', 'Nginx'],
      url: 'https://github.com/Azul-Ferreyra/Infraestructura-como-c-digo-en-AWS.git'
    },
    {
      name: 'SOC Local',
      description: 'Casebender, MISP e IntelOwl. Configuración Docker Compose para desplegar un entorno de Centro de Operaciones de Seguridad local, ligero y modular.',
      tech: ['Docker', 'Casebender', 'MISP', 'IntelOwl', 'SOC'],
      url: 'https://github.com/Azul-Ferreyra/Casebender-.git'
    },
    {
      name: 'Machine Learning para la Detección de Phishing',
      description: 'Clasificador de URLs usando Machine Learning. Modelo predictivo que analiza la estructura sintáctica de las URLs para identificar patrones maliciosos y prevenir ataques de phishing.',
      tech: ['Python', 'Machine Learning', 'Jupyter'],
      url: 'https://github.com/Azul-Ferreyra/URL.git'
    }
  ]

  const youtubeVideos = [
    {
      title: 'CaseBender Review: Innovación en Ciberseguridad',
      description: 'Análisis detallado y colaboración exclusiva. Explora la herramienta que está revolucionando el sector y aprende a dominarla conmigo.',
      thumbnail: '/CASEBENDER.png',
      url: 'https://www.linkedin.com/posts/anzur_soc-it-softwareengineering-activity-7320039550708273153-PC--?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8fNxEB96rDLFy-94E_X7HYm1sL8BYuOfk',
      duration: 'Colaboración'
    },
    {
      title: 'Conectanda con Japón: Mis inicios en el mundo Tech',
      description: 'Cómo el aprendizaje constante rompe fronteras. Mi historia personal de crecimiento en tecnología.',
      thumbnail: '/JAPON.png',
      url: 'https://youtu.be/nCImZtrGZWg?si=HHbfwiz4Nq686UXj',
      duration: 'Entrevista'
    },
    {
      title: 'KavaCon Paraguay - Infraestructura como Código con Terraform',
      description: 'Charla técnica en KavaCon Paraguay sobre despliegue de SOC en AWS usando Terraform',
      thumbnail: '/KAVACON.png',
      url: 'https://www.youtube.com/live/CWywWZAhbCs?si=CMAmAbvJ87C3fid5',
      duration: 'Conferencia'
    },
    {
      title: 'Infraestructura Cloud: Desplegando un SOC en AWS desde cero',
      description: 'Resolución detallada de una prueba técnica para el mundo real. Diagramación de red y despliegue de arquitectura de seguridad en la nube para monitoreo de incidentes.',
      thumbnail: '/AWS.png',
      url: 'https://youtu.be/meuy21cqUeI?si=5nMRED7pyUu5vt2t',
      duration: 'Demo Técnica'
    },
    {
      title: 'Construyendo mi propio SOC: MISP, Cortex y The Hive desde cero',
      description: 'Comparto mi proceso de aprendizaje y despliegue de una arquitectura de seguridad real. Un proyecto nacido de la curiosidad técnica y el deseo de dominar las herramientas que mueven a los equipos de Blue Team hoy.',
      thumbnail: '/SOC.png',
      url: 'https://youtu.be/_PviIBCptSg?si=ZdQSIDrGn7TUbznV',
      duration: 'Tutorial'
    },
    {
      title: 'Integración de SIEM y Gestión de Incidentes: Splunk + TheHive',
      description: 'Cómo conectar la potencia de Splunk con la estructura de casos de TheHive. Un recorrido técnico por la arquitectura de seguridad, desde la recolección de eventos hasta la resolución ágil de incidentes.',
      thumbnail: '/SPLUNK.png',
      url: 'https://youtu.be/uML2aeuBMLM?si=r_--PleeUyVlSKoq',
      duration: 'Demo Técnica'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Proyectos & Contenido</h2>

        <div className="projects-section">
          <h3>📁 Repositorios en GitHub</h3>
          <div className="github-grid">
            {githubRepos.map((repo, index) => (
              <div key={index} className="github-card">
                <div className="github-header">
                  <span className="github-icon">📦</span>
                  <h4>{repo.name}</h4>
                </div>
                <p>{repo.description}</p>
                <div className="tech-stack">
                  {repo.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={repo.url} target="_blank" rel="noopener noreferrer" className="github-link">
                  Ver en GitHub →
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="projects-section">
          <h3>🎥 Contenido Destacado</h3>
          <div className="youtube-grid">
            {youtubeVideos.map((video, index) => (
              <div key={index} className="youtube-card">
                <a href={video.url} target="_blank" rel="noopener noreferrer" className="video-link">
                  <div className="video-thumbnail">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/480x360/232f3e/ffffff?text=Video+Thumbnail'
                      }}
                    />
                    <div className="video-duration">{video.duration}</div>
                  </div>
                  <div className="video-info">
                    <h4>{video.title}</h4>
                    <p>{video.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
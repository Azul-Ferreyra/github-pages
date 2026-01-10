import './Services.css'

function Services() {
  const services = [
    {
      icon: '☁️',
      title: 'Cloud & DevSecOps',
      description: 'Implementación y gestión de entornos seguros en la nube'
    },
    {
      icon: '🔒',
      title: 'Seguridad en la Nube',
      description: 'Configuración de firewalls, WAF, balanceadores de carga y segmentación de redes'
    },
    {
      icon: '🛡️',
      title: 'SOC Operations',
      description: 'Integración y operación de SIEM, monitoreo continuo de seguridad'
    },
    {
      icon: '🔧',
      title: 'IaC & Automation',
      description: 'Infraestructura como Código con Terraform y automatización CI/CD'
    },
    {
      icon: '🎤',
      title: 'Consultoría & Charlas',
      description: 'Speaker en conferencias y mentoría para desarrolladores emergentes'
    },
    {
      icon: '📚',
      title: 'Contenido Educativo',
      description: 'Compartiendo mi viaje de aprendizaje autodidacta en AWS y DevSecOps'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Mis Servicios</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
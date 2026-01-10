import './Content.css'

function Content() {
  return (
    <section id="content" className="content">
      <div className="container">
        <h2 className="section-title">Mi Contenido Educativo</h2>

        <div className="content-hero">
          <div className="content-image">
            <div className="aws-cloud-icon">☁️</div>
          </div>

          <div className="content-text">
            <h3>Enfoque Profesional</h3>
            <p>
              Mi enfoque combina la curiosidad del aprendizaje autodidacta en AWS con la rigurosidad de la práctica real.
              Esta trayectoria me permitió llevar mis proyectos al escenario como Speaker en KavaCon Paraguay, donde
              presenté un despliegue de infraestructura automatizada, y colaborar activamente en comunidades como XSec,
              impulsando el conocimiento técnico en ciberseguridad para el mundo hispanohablante.
            </p>
          </div>
        </div>

        <div className="content-description">
          <div className="content-card">
            <h4>🎯 Mi Enfoque</h4>
            <p>
              Diseño y desarrollo infraestructura segura bajo una filosofía DevSecOps. Mi objetivo es simplificar el camino hacia la ciberseguridad defensiva, integrando protección automatizada desde la base del despliegue.
            </p>
          </div>

          <div className="content-card">
            <h4>📈 Curva de Aprendizaje</h4>
            <p>
              Comparto mi contenido mostrando errores y aprendizajes reales, con una curva de aprendizaje
              que no es lineal pero sí constante, ofreciendo un enfoque cercano y práctico para quienes
              comienzan en el mundo de la tecnología.
            </p>
          </div>

          <div className="content-card">
            <h4>🤝 Comunidad</h4>
            <p>
              Creando un espacio donde la comunidad me acompaña, me motiva a seguir aprendiendo y,
              al mismo tiempo, aprende conmigo. Es un aprendizaje mutuo que conecta y empodera a
              otros desarrolladores emergentes.
            </p>
          </div>
        </div>

        <div className="content-cta">
          <p>
            ¿Quieres acompañarme en este viaje? Sígueme en mis redes sociales y plataformas
            donde comparto contenido técnico sobre AWS, DevSecOps y ciberseguridad.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Content
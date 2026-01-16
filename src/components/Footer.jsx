import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Anzur</h3>
            <p>Cloud & DevSecOps Engineer</p>
            <p>Especializado en AWS, IaC con Terraform, CI/CD y ciberseguridad.</p>
          </div>

          <div className="footer-section">
            <h4>Explora</h4>
            <div className="social-links">
              <a href="/blog#logs">Los Logs (Blog)</a>
              <a href="/espacio-mantis#eventos">Radar de Eventos</a>
              <a href="/espacio-mantis#cultura-tecnologica">Comunidades Activas</a>
              <a href="/espacio-mantis#becas">Oportunidades &amp; Becas</a>
              <a href="/espacio-mantis#noticias">Mantis Intelligence</a>
              <a href="/#videos">Contenido Destacado</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Mujeres en Tech</h4>
            <div className="social-links">
              <a href="/espacio-mantis#faq">FAQ de Carreras</a>
              <a href="/espacio-mantis#becas">Becas Santander</a>
              <a href="/espacio-mantis#becas">Recursos IA</a>
              <a href="/espacio-mantis#becas">Mentorías</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Conecta</h4>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/anzur/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://www.youtube.com/@Anzur-log" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
              <a href="https://www.instagram.com/anzur.log/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://github.com/Azul-Ferreyra" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
            <p>
              <a href="/#contact">info.anzur@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Anzur. Todos los derechos reservados.</p>
            <p className="footer-location">Argentina 🇦🇷 | España 🇪🇸</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
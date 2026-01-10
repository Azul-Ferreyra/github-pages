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
            <h4>Conecta Conmigo</h4>
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
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <p>
              <a href="mailto:info.anzur@gmail.com">info.anzur@gmail.com</a>
            </p>
            <p>Argentina 🇦🇷 | España 🇪🇸</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Anzur. Todos los derechos reservados.</p>
            <p>Comprometidos con la excelencia en DevSecOps</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
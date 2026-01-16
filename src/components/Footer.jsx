import { Link } from 'react-router-dom'
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
              <Link to={{ pathname: '/blog', hash: '#logs' }}>Los Logs (Blog)</Link>
              <Link to={{ pathname: '/espacio-mantis', hash: '#eventos' }}>Radar de Eventos</Link>
              <Link to={{ pathname: '/espacio-mantis', hash: '#cultura-tecnologica' }}>
                Comunidades Activas
              </Link>
              <Link to={{ pathname: '/espacio-mantis', hash: '#becas' }}>
                Oportunidades &amp; Becas
              </Link>
              <Link to={{ pathname: '/espacio-mantis', hash: '#noticias' }}>
                Mantis Intelligence
              </Link>
              <Link to={{ pathname: '/', hash: '#videos' }}>Contenido Destacado</Link>
            </div>
          </div>

          <div className="footer-section">
            <h4>Mujeres en Tech</h4>
            <div className="social-links">
              <Link to={{ pathname: '/espacio-mantis', hash: '#faq' }}>FAQ de Carreras</Link>
              <Link to={{ pathname: '/espacio-mantis', hash: '#becas' }}>Becas Santander</Link>
              <Link to={{ pathname: '/espacio-mantis', hash: '#becas' }}>Recursos IA</Link>
              <Link to={{ pathname: '/espacio-mantis', hash: '#becas' }}>Mentorías</Link>
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
              <Link to={{ pathname: '/', hash: '#contact' }}>info.anzur@gmail.com</Link>
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
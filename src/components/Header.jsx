import './Header.css'

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <span className="logo">Anzur</span>
        </div>
        <ul className="nav-links">
          <li><a href="#services">Servicios</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#content">Contenido</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
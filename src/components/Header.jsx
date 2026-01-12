import { useState } from 'react'
import './Header.css'

function Header() {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen(!open)
  const closeMenu = () => setOpen(false)

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Anzur logo"
            className="logo-img"
          />
          <span className="logo-text">Anzur</span>
        </div>

        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-label="Abrir menú"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${open ? 'show' : ''}`}>
          <li><a href="#services" onClick={closeMenu}>Servicios</a></li>
          <li><a href="#experience" onClick={closeMenu}>Experiencia</a></li>
          <li><a href="#content" onClick={closeMenu}>Contenido</a></li>
          <li><a href="#projects" onClick={closeMenu}>Proyectos</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
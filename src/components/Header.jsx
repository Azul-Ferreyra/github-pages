import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen(!open)
  const closeMenu = () => setOpen(false)

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/#inicio" className="nav-brand" onClick={closeMenu}>
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Anzur logo"
            className="logo-img"
          />
          <span className="logo-text">Anzur</span>
        </Link>

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
          <li><Link to="/#services" onClick={closeMenu}>Servicios</Link></li>
          <li><Link to="/#experience" onClick={closeMenu}>Experiencia</Link></li>
          <li><Link to="/#content" onClick={closeMenu}>Contenido</Link></li>
          <li><Link to="/#projects" onClick={closeMenu}>Proyectos</Link></li>
          <li><Link to="/espacio-mantis" onClick={closeMenu}>Espacio Mantis</Link></li>
          <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
          <li><Link to="/#contact" onClick={closeMenu}>Contacto</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
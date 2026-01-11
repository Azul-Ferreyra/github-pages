import { useState, useEffect } from 'react'
import './Hero.css'

function Hero() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      if (scrolled > 50) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="profile-image">
            <img src={`${import.meta.env.BASE_URL}rostro.png`} alt="Azul Ferreyra - Anzur" />
          </div>

          <div className="hero-text">
            <h1>Cloud & DevSecOps Engineer</h1>
            <p className="hero-subtitle">
              Autodidacta • Resiliente • Comunicativa • Apasionada por la Ciberseguridad
            </p>
            <div className="hero-badges">
              <span className="badge">AWS</span>
              <span className="badge">Terraform</span>
              <span className="badge">Kubernetes</span>
              <span className="badge">CI/CD</span>
              <span className="badge">SOC</span>
            </div>
          </div>
        </div>

        <div className={`scroll-indicator ${!isVisible ? 'hidden' : ''}`}>
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <div className="scroll-text">Scroll</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
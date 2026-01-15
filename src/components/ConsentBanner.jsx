import { useState, useEffect } from 'react'
import './ConsentBanner.css'

function ConsentBanner() {
  const [showConsent, setShowConsent] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  useEffect(() => {
    // Verificar si ya se tomó una decisión
    const consent = localStorage.getItem('cookie-consent')
    const analytics = localStorage.getItem('analytics-enabled')

    if (!consent) {
      // Mostrar banner si no hay consentimiento
      setShowConsent(true)
    } else if (analytics === 'true') {
      setAnalyticsEnabled(true)
      // Aquí podrías inicializar Google Analytics si no se hizo antes
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    localStorage.setItem('analytics-enabled', 'true')
    setAnalyticsEnabled(true)
    setShowConsent(false)

    // Inicializar Google Analytics si aún no está inicializado
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      })
    }
  }

  const rejectAll = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    localStorage.setItem('analytics-enabled', 'false')
    setAnalyticsEnabled(false)
    setShowConsent(false)

    // Desactivar Google Analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      })
    }
  }

  const acceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary-only')
    localStorage.setItem('analytics-enabled', 'false')
    setAnalyticsEnabled(false)
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="cookie-consent">
      <div className="cookie-consent-content">
        <div className="cookie-consent-text">
          <h4>🍪 Cookies y Privacidad</h4>
          <p>
            Utilizamos cookies para mejorar tu experiencia y analizar el tráfico de nuestro sitio web.
            Puedes aceptar todas las cookies o solo las necesarias para el funcionamiento básico.
          </p>
          <p className="cookie-consent-details">
            <strong>Google Analytics:</strong> Nos ayuda a entender cómo interactúas con nuestro sitio
            para mejorar nuestros servicios. No recopilamos información personal identificable.
          </p>
        </div>

        <div className="cookie-consent-buttons">
          <button
            onClick={rejectAll}
            className="cookie-btn cookie-btn-secondary"
          >
            Rechazar todo
          </button>
          <button
            onClick={acceptNecessary}
            className="cookie-btn cookie-btn-outline"
          >
            Solo necesarias
          </button>
          <button
            onClick={acceptAll}
            className="cookie-btn cookie-btn-primary"
          >
            Aceptar todo
          </button>
        </div>

        <div className="cookie-consent-links">
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
            Política de Privacidad
          </a>
          <span>•</span>
          <a href="/cookie-policy" target="_blank" rel="noopener noreferrer">
            Política de Cookies
          </a>
        </div>
      </div>
    </div>
  )
}

export default ConsentBanner

import { useEffect, Component } from 'react'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ConsentBanner from './components/ConsentBanner'
import HomePage from './pages/HomePage'
import EspacioMantis from './pages/EspacioMantis'
import BlogTecnico from './pages/BlogTecnico'
import { initGA, trackPageView } from './analytics'

// Error Boundary para capturar errores de React
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // Log del error (en producción enviar a servicio de monitoreo)
    console.error('Error capturado por ErrorBoundary:', error, errorInfo)

    // Enviar a servicio de error reporting (si está configurado)
    if (process.env.NODE_ENV === 'production' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.toString(),
        fatal: false
      })
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-content">
            <h2>🚨 Algo salió mal</h2>
            <p>Lo sentimos, ha ocurrido un error inesperado.</p>
            <button
              onClick={() => window.location.reload()}
              className="error-reload-btn"
            >
              Recargar página
            </button>
            {process.env.NODE_ENV === 'development' && (
              <details className="error-details">
                <summary>Detalles técnicos (desarrollo)</summary>
                <pre>{this.state.error?.toString()}</pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

function Layout() {
  const location = useLocation()

  useEffect(() => {
    // Configuración de seguridad global
    const handleGlobalError = (event) => {
      // Prevenir logging de errores sensibles en producción
      if (process.env.NODE_ENV === 'production') {
        // Filtrar errores que no queremos loguear
        const sensitiveErrors = [
          'Script error',
          'NetworkError',
          'SecurityError'
        ]

        if (sensitiveErrors.some(error => event.message.includes(error))) {
          event.preventDefault()
          return false
        }
      }

      // Log de errores no sensibles
      console.error('Error global:', event.error)
    }

    const handleUnhandledRejection = (event) => {
      // Manejar promesas rechazadas no manejadas
      console.error('Promesa rechazada no manejada:', event.reason)

      // Prevenir que aparezca en consola de producción para errores menores
      if (process.env.NODE_ENV === 'production') {
        event.preventDefault()
      }
    }

    // Configurar CSP violation handler
    const handleCSPViolation = (event) => {
      console.warn('CSP Violation:', {
        violatedDirective: event.violatedDirective,
        blockedURI: event.blockedURI,
        sourceFile: event.sourceFile,
        lineNumber: event.lineNumber,
      })

      // En producción, enviar a servicio de monitoreo
      if (process.env.NODE_ENV === 'production' && window.gtag) {
        window.gtag('event', 'csp_violation', {
          violated_directive: event.violatedDirective,
          blocked_uri: event.blockedURI,
        })
      }
    }

    // Agregar event listeners
    window.addEventListener('error', handleGlobalError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)
    document.addEventListener('securitypolicyviolation', handleCSPViolation)

    // Inicializar Google Analytics
    initGA()

    // Limpieza
    return () => {
      window.removeEventListener('error', handleGlobalError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
      document.removeEventListener('securitypolicyviolation', handleCSPViolation)
    }
  }, [])

  // Tracking automático de rutas para SPA
  useEffect(() => {
    trackPageView(location.pathname + location.search + location.hash)
  }, [location])

  // Scroll a anclas y reinicio de scroll en cambios de ruta
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '')
      window.setTimeout(() => {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 0)
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location])

  return (
    <ErrorBoundary>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
        <ConsentBanner />
      </div>
    </ErrorBoundary>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="espacio-mantis" element={<EspacioMantis />} />
        <Route path="blog" element={<BlogTecnico />} />
      </Route>
    </Routes>
  )
}

export default App
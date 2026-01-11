// Google Analytics 4 Configuration
import ReactGA from 'react-ga4'

// Google Analytics 4 Measurement ID
// Solo funciona con variable de entorno configurada
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

// Inicializar Google Analytics
export const initGA = () => {
  if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    ReactGA.initialize(GA_MEASUREMENT_ID, {
      // Configuración adicional si es necesaria
      gtagOptions: {
        // Configuración personalizada
        custom_map: {
          // Mapeos personalizados si los necesitas
        }
      }
    })
    console.log('Google Analytics inicializado')
  } else {
    console.warn('Google Analytics no inicializado: Measurement ID no configurado')
  }
}

// Track page views para SPA
export const trackPageView = (path) => {
  if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    ReactGA.send({
      hitType: 'pageview',
      page: path
    })
  }
}

// Track events personalizados
export const trackEvent = (category, action, label = null, value = null) => {
  if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    ReactGA.event({
      category: category,
      action: action,
      label: label,
      value: value
    })
  }
}

// Track conversiones específicas
export const trackConversion = (eventName, parameters = {}) => {
  if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    ReactGA.event(eventName, parameters)
  }
}

// Hook personalizado para tracking automático de rutas
export const usePageTracking = () => {
  ReactGA.send('pageview')
}

// Exportar ReactGA por si necesitas acceso directo
export { ReactGA }
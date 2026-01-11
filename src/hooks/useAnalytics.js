// Hook personalizado para Google Analytics
import { useCallback } from 'react'
import { trackEvent, trackConversion } from '../analytics'

export const useAnalytics = () => {
  // Track clics en botones
  const trackButtonClick = useCallback((buttonName, section = 'unknown') => {
    trackEvent('engagement', 'button_click', `${section}_${buttonName}`)
  }, [])

  // Track clics en enlaces externos
  const trackExternalLink = useCallback((linkName, url) => {
    trackEvent('engagement', 'external_link_click', linkName, url)
  }, [])

  // Track envío de formularios
  const trackFormSubmit = useCallback((formName, success = true) => {
    trackEvent('engagement', 'form_submit', formName, success ? 1 : 0)
    if (success) {
      trackConversion('form_submit_success', {
        form_name: formName
      })
    }
  }, [])

  // Track navegación por secciones
  const trackSectionView = useCallback((sectionName) => {
    trackEvent('engagement', 'section_view', sectionName)
  }, [])

  // Track interacciones con proyectos/videos
  const trackProjectInteraction = useCallback((projectName, action = 'view') => {
    trackEvent('engagement', 'project_interaction', `${projectName}_${action}`)
  }, [])

  // Track scroll profundo
  const trackScrollDepth = useCallback((percentage) => {
    trackEvent('engagement', 'scroll_depth', `scroll_${percentage}%`)
  }, [])

  // Track tiempo en página
  const trackTimeOnPage = useCallback((seconds) => {
    trackEvent('engagement', 'time_on_page', 'duration', seconds)
  }, [])

  return {
    trackButtonClick,
    trackExternalLink,
    trackFormSubmit,
    trackSectionView,
    trackProjectInteraction,
    trackScrollDepth,
    trackTimeOnPage
  }
}
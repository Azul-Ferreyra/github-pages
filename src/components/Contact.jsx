import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'
import { useAnalytics } from '../hooks/useAnalytics'

function Contact() {
  const { trackFormSubmit } = useAnalytics()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('')
  const [errors, setErrors] = useState({})

  // Rate limiting básico
  const [lastSubmitTime, setLastSubmitTime] = useState(0)
  const SUBMIT_COOLDOWN = 30000 // 30 segundos entre envíos

  // Función de sanitización
  const sanitizeInput = (input) => {
    if (!input || typeof input !== 'string') return ''

    return input
      .trim()
      .replace(/[<>]/g, '') // Remover < >
      .replace(/javascript:/gi, '') // Remover javascript:
      .replace(/on\w+\s*=/gi, '') // Remover event handlers
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remover scripts
      .substring(0, 1000) // Limitar longitud
  }

  // Validación de email robusta
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return emailRegex.test(email) && email.length <= 254
  }

  // Validación completa del formulario
  const validateForm = () => {
    const newErrors = {}

    // Validar nombre
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    } else if (formData.name.length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres'
    } else if (formData.name.length > 100) {
      newErrors.name = 'El nombre no puede exceder 100 caracteres'
    }

    // Validar email
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Ingresa un email válido'
    }

    // Validar asunto
    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es requerido'
    } else if (formData.subject.length < 5) {
      newErrors.subject = 'El asunto debe tener al menos 5 caracteres'
    } else if (formData.subject.length > 200) {
      newErrors.subject = 'El asunto no puede exceder 200 caracteres'
    }

    // Validar mensaje
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido'
    } else if (formData.message.length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres'
    } else if (formData.message.length > 5000) {
      newErrors.message = 'El mensaje no puede exceder 5000 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    // Solo sanitizar caracteres peligrosos básicos, mantener espacios
    const basicSanitizedValue = value.replace(/[<>]/g, '')

    setFormData({
      ...formData,
      [name]: basicSanitizedValue
    })

    // Limpiar error del campo específico
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Rate limiting
    const now = Date.now()
    if (now - lastSubmitTime < SUBMIT_COOLDOWN) {
      setStatus(`Por favor espera ${Math.ceil((SUBMIT_COOLDOWN - (now - lastSubmitTime)) / 1000)} segundos antes de enviar otro mensaje.`)
      return
    }

    // Validar formulario
    if (!validateForm()) {
      setStatus('Por favor corrige los errores en el formulario.')
      return
    }

    setIsLoading(true)
    setStatus('')
    setLastSubmitTime(now)

    try {
      // Configuración de EmailJS desde variables de entorno (requeridas)
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      // Verificar que todas las credenciales estén configuradas; si faltan, usar fallback inmediato
      if (!serviceId || !templateId || !publicKey) {
        setStatus('EmailJS no está configurado. Abriendo tu cliente de correo…')
        const safeSubject = encodeURIComponent(formData.subject.replace(/[<>]/g, ''))
        const safeBody = encodeURIComponent(`Nombre: ${formData.name.replace(/[<>]/g, '')}\nEmail: ${formData.email.replace(/[<>]/g, '')}\n\nMensaje:\n${formData.message.replace(/[<>]/g, '')}`)
        window.location.href = `mailto:info.anzur@gmail.com?subject=${safeSubject}&body=${safeBody}`
        return
      }

      // Sanitizar datos finales antes de enviar (solo caracteres peligrosos)
      const templateParams = {
        from_name: formData.name.replace(/[<>]/g, ''),
        from_email: formData.email.replace(/[<>]/g, ''),
        user_subject: formData.subject.replace(/[<>]/g, ''),
        message: formData.message.replace(/[<>]/g, ''),
        reply_to: formData.email.replace(/[<>]/g, ''),
        to_email: 'info.anzur@gmail.com'
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      setStatus('Mensaje enviado exitosamente! 🎉')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      setErrors({})

      // Track successful form submission
      trackFormSubmit('contact_form', true)
    } catch (error) {
      console.error('Error al enviar email:', error)

      // Determinar tipo de error para mejor UX
      let errorMessage = 'Error al enviar mensaje. '

      if (error.text?.includes('rate limit')) {
        errorMessage += 'Has enviado demasiados mensajes. Inténtalo más tarde.'
      } else if (error.text?.includes('invalid')) {
        errorMessage += 'Datos inválidos. Verifica tu información.'
      } else {
        errorMessage += 'Por favor, intenta de nuevo o usa el fallback.'
      }

      setStatus(errorMessage)

      // Fallback seguro: abrir cliente de email solo con datos sanitizados
      setTimeout(() => {
        const safeSubject = encodeURIComponent(formData.subject.replace(/[<>]/g, ''))
        const safeBody = encodeURIComponent(`Nombre: ${formData.name.replace(/[<>]/g, '')}\nEmail: ${formData.email.replace(/[<>]/g, '')}\n\nMensaje:\n${formData.message.replace(/[<>]/g, '')}`)
        window.location.href = `mailto:info.anzur@gmail.com?subject=${safeSubject}&body=${safeBody}`
      }, 3000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contacto</h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Hablemos</h3>
            <p>
              ¿Interesado en mis servicios? ¿Quieres colaborar en un proyecto?
              ¿Tienes preguntas sobre DevSecOps o AWS?
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:info.anzur@gmail">info.anzur@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">🔗</span>
                <div>
                  <strong>LinkedIn</strong>
                  <a href="https://www.linkedin.com/in/anzur/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/anzur
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📺</span>
                <div>
                  <strong>YouTube</strong>
                  <a href="https://www.youtube.com/@Anzur-log" target="_blank" rel="noopener noreferrer">
                    youtube.com/@Anzur-log
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📷</span>
                <div>
                  <strong>Instagram</strong>
                  <a href="https://www.instagram.com/anzur.log/" target="_blank" rel="noopener noreferrer">
                    instagram.com/anzur.log
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">🐱</span>
                <div>
                  <strong>GitHub</strong>
                  <a href="https://github.com/Azul-Ferreyra" target="_blank" rel="noopener noreferrer">
                    github.com/Azul-Ferreyra
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength="100"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength="254"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  maxLength="200"
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  maxLength="5000"
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              {status && (
                <div className={`status-message ${status.includes('exitosamente') ? 'success' : 'error'}`}>
                  {status}
                </div>
              )}

              <button type="submit" className="submit-btn" disabled={isLoading}>
                {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
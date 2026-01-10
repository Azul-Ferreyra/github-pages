/**
 * Configuración de Seguridad - Anzur Portfolio
 * Este archivo contiene configuraciones de seguridad generales
 */

// Configuración de seguridad para inputs
export const SECURITY_CONFIG = {
  // Límites de input
  MAX_INPUT_LENGTH: 1000,
  MAX_EMAIL_LENGTH: 254,
  MAX_SUBJECT_LENGTH: 200,
  MAX_MESSAGE_LENGTH: 5000,

  // Rate limiting
  SUBMIT_COOLDOWN_MS: 30000, // 30 segundos

  // Validación de email (RFC 5322 compliant)
  EMAIL_REGEX: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,

  // Caracteres peligrosos a filtrar
  DANGEROUS_CHARS: /[<>]/g,
  JAVASCRIPT_PATTERN: /javascript:/gi,
  EVENT_HANDLER_PATTERN: /on\w+\s*=/gi,
  SCRIPT_TAG_PATTERN: /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
}

// Función de sanitización general
export const sanitizeInput = (input) => {
  if (!input || typeof input !== 'string') return ''

  return input
    .trim()
    .replace(SECURITY_CONFIG.DANGEROUS_CHARS, '')
    .replace(SECURITY_CONFIG.JAVASCRIPT_PATTERN, '')
    .replace(SECURITY_CONFIG.EVENT_HANDLER_PATTERN, '')
    .replace(SECURITY_CONFIG.SCRIPT_TAG_PATTERN, '')
    .substring(0, SECURITY_CONFIG.MAX_INPUT_LENGTH)
}

// Función de validación de email segura
export const validateEmail = (email) => {
  if (!email || typeof email !== 'string') return false

  const sanitized = sanitizeInput(email)
  return SECURITY_CONFIG.EMAIL_REGEX.test(sanitized) &&
         sanitized.length <= SECURITY_CONFIG.MAX_EMAIL_LENGTH
}

// Función para detectar intentos de ataque
export const detectMaliciousInput = (input) => {
  if (!input || typeof input !== 'string') return false

  const patterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
    /eval\(/i,
    /Function\(/i,
    /alert\(/i,
    /document\./i,
    /window\./i,
  ]

  return patterns.some(pattern => pattern.test(input))
}

// Rate limiting helper
export const checkRateLimit = (lastSubmitTime, cooldown = SECURITY_CONFIG.SUBMIT_COOLDOWN_MS) => {
  const now = Date.now()
  return {
    allowed: now - lastSubmitTime >= cooldown,
    remainingTime: Math.max(0, cooldown - (now - lastSubmitTime))
  }
}

// Generar nonce para CSP (si es necesario en el futuro)
export const generateNonce = () => {
  const array = new Uint8Array(16)
  crypto.getRandomValues(array)
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
}

export default SECURITY_CONFIG
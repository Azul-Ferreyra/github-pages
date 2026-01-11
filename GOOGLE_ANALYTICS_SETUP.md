# 📊 Configuración de Google Analytics 4

## 🚀 Google Analytics ya está integrado en tu sitio web

Tu portfolio ya tiene **Google Analytics 4** completamente configurado y listo para usar. Solo necesitas configurar tu **Measurement ID** para empezar a recibir datos.

---

## 📋 PASOS PARA CONFIGURAR GOOGLE ANALYTICS

### **1. Crear cuenta en Google Analytics**
1. Ve a [analytics.google.com](https://analytics.google.com)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en **"Comenzar medición"**
4. Selecciona **"Web"** como plataforma

### **2. Configurar tu propiedad web**
1. **Nombre de la propiedad**: `Anzur Portfolio` o el nombre que prefieras
2. **Zona horaria**: `Argentina (GMT-3)` o tu zona horaria
3. **Moneda**: `ARS - Peso argentino` o tu moneda preferida

### **3. Configurar el flujo de datos**
1. **URL del sitio web**: `https://azul-ferreyra.github.io/github-pages/`
2. **Nombre del flujo**: `Portfolio Web` o similar

### **4. Obtener tu Measurement ID**
Después de crear el flujo de datos, verás tu **Measurement ID** que comienza con `G-` (ejemplo: `G-XXXXXXXXXX`)

---

## ⚙️ CONFIGURAR TU MEASUREMENT ID

### **Opción 1: Editar directamente en el código (Recomendado para empezar)**

1. Abre el archivo `src/analytics.js`
2. Busca esta línea:
   ```javascript
   const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'
   ```
3. Reemplaza `'G-XXXXXXXXXX'` con tu Measurement ID real:
   ```javascript
   const GA_MEASUREMENT_ID = 'G-ABC123DEF4'
   ```

### **Opción 2: Usar variables de entorno (Para producción)**

1. Crea un archivo `.env.local` (no se sube a Git):
   ```
   VITE_GA_MEASUREMENT_ID=G-ABC123DEF4
   ```

2. Modifica `src/analytics.js` para usar la variable:
   ```javascript
   const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'
   ```

---

## 📊 QUÉ SE ESTÁ RASTREANDO

### **Eventos Automáticos:**
- ✅ **Páginas vistas** (pageviews)
- ✅ **Navegación SPA** (cambios de ruta)
- ✅ **Envío de formularios** (contact form)
- ✅ **Consentimiento de cookies**

### **Métricas Disponibles:**
- 👥 **Usuarios únicos**
- 👁️ **Páginas vistas**
- ⏱️ **Tiempo en página**
- 📍 **Ubicación geográfica**
- 💻 **Dispositivos y navegadores**
- 🔗 **Fuentes de tráfico**
- 🎯 **Comportamiento de usuarios**

---

## 🍪 CONSENTIMIENTO DE COOKIES

### **Banner de Cookies Integrado:**
- ✅ **Aparece automáticamente** en la primera visita
- ✅ **Tres opciones**: Aceptar todo, Solo necesarias, Rechazar todo
- ✅ **Cumple con GDPR** y regulaciones de privacidad
- ✅ **Recordar preferencias** del usuario

### **Opciones del Banner:**
1. **"Aceptar todo"**: Activa Google Analytics + cookies necesarias
2. **"Solo necesarias"**: Solo cookies técnicas, sin analytics
3. **"Rechazar todo"**: Sin cookies de seguimiento

---

## 🛠️ PERSONALIZACIÓN AVANZADA

### **Agregar más eventos de tracking:**

```javascript
import { useAnalytics } from './hooks/useAnalytics'

function MiComponente() {
  const { trackButtonClick, trackProjectInteraction } = useAnalytics()

  const handleClick = () => {
    trackButtonClick('descargar_cv', 'hero_section')
  }

  const handleProjectView = () => {
    trackProjectInteraction('portfolio_project', 'view')
  }

  return (
    <button onClick={handleClick}>Descargar CV</button>
  )
}
```

### **Eventos disponibles:**
- `trackButtonClick(buttonName, section)`
- `trackExternalLink(linkName, url)`
- `trackFormSubmit(formName, success)`
- `trackSectionView(sectionName)`
- `trackProjectInteraction(projectName, action)`
- `trackScrollDepth(percentage)`
- `trackTimeOnPage(seconds)`

---

## 🔍 VERIFICAR QUE FUNCIONA

### **Método 1: Google Analytics Real-Time**
1. Ve a Google Analytics
2. **Reports** → **Realtime**
3. Visita tu sitio web
4. Deberías verte como usuario activo

### **Método 2: Consola del navegador**
1. Abre DevTools (F12)
2. Ve a la pestaña **Network**
3. Busca requests a `googletagmanager.com` o `google-analytics.com`
4. Si aparecen, GA está funcionando

### **Método 3: Extension de Chrome**
Instala **"Google Analytics Debugger"** para ver eventos en tiempo real.

---

## 📈 DASHBOARD RECOMENDADO

### **Crear informes personalizados:**
1. **Exploratory Reports** → **Blank Report**
2. **Dimensiones**: Página, Fuente de tráfico, Dispositivo
3. **Métricas**: Usuarios, Sesiones, Tasa de rebote
4. **Guardar como**: "Portfolio Performance"

### **Objetivos recomendados:**
- 📧 **Envío de formulario de contacto**
- 👁️ **Visualización de proyectos**
- ⏱️ **Tiempo en página > 2 minutos**
- 📱 **Visitas desde móvil**

---

## 🚨 SOLUCIÓN DE PROBLEMAS

### **GA no funciona:**
1. ✅ Verificar que el Measurement ID es correcto
2. ✅ Revisar que no hay bloqueadores de anuncios
3. ✅ Verificar que el usuario aceptó cookies
4. ✅ Comprobar en modo incógnito

### **Datos no aparecen:**
- **Real-Time**: Aparecen inmediatamente
- **Reports estándar**: Pueden tardar 24-48 horas
- **Audiencia**: Necesitan varios usuarios para datos significativos

---

## 🔒 PRIVACIDAD Y SEGURIDAD

### **Medidas implementadas:**
- ✅ **Consentimiento explícito** antes de tracking
- ✅ **Anonimización de IP** automática
- ✅ **No se comparte data** con terceros
- ✅ **Cookies de sesión** (no persistentes)
- ✅ **Opt-out fácil** para usuarios

### **Compliance:**
- ✅ **GDPR Ready**
- ✅ **CCPA Compliant**
- ✅ **Cookies Policy** integrada
- ✅ **Privacy Policy** disponible

---

## 📞 SOPORTE

Si tienes problemas con Google Analytics:

1. **Verifica tu Measurement ID** es correcto
2. **Revisa la consola** del navegador por errores
3. **Confirma que aceptaste cookies** en el banner
4. **Espera 24 horas** para que aparezcan los primeros datos

---

## 🎯 PRÓXIMOS PASOS

Una vez configurado tu Measurement ID:

1. ✅ **Visita tu sitio** y acepta las cookies
2. ✅ **Genera algo de tráfico** (visitas, interacciones)
3. ✅ **Revisa Google Analytics** en 24 horas
4. ✅ **Configura objetivos** importantes para tu negocio
5. ✅ **Crea dashboards** personalizados

---

**¡Tu portfolio ahora tiene analytics profesional! 📊**

**Recuerda:** Los datos empezarán a aparecer una vez que configures tu Measurement ID real.
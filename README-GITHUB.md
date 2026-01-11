# 🚀 Anzur - Portfolio DevSecOps

> Página web profesional de **Azul Ferreyra (Anzur)** - Cloud & DevSecOps Engineer especializada en AWS, IaC con Terraform, CI/CD y ciberseguridad.

[![Deploy to GitHub Pages](https://github.com/Azul-Ferreyra/github-pages/actions/workflows/deploy.yml/badge.svg)](https://github.com/Azul-Ferreyra/github-pages/actions/workflows/deploy.yml)

## 🌐 Demo en Vivo

[👀 Ver Portfolio en Vivo](https://Azul-Ferreyra.github.io/github-pages)

## 📋 Características

### 🎨 **Diseño Profesional**
- **Paleta AWS**: Colores inspirados en Amazon Web Services
- **Responsive**: Optimizado para móvil, tablet y desktop
- **Moderno**: Animaciones sutiles y efectos elegantes

### 🛡️ **Seguridad Avanzada**
- **CSP (Content Security Policy)**: Protección contra XSS
- **Sanitización**: Validación robusta de inputs
- **Rate Limiting**: Prevención de spam (30 seg entre envíos)
- **HTTPS Ready**: Preparado para SSL

### 📧 **Formulario de Contacto**
- **EmailJS**: Envío automático de emails
- **Validación**: Campos requeridos con feedback visual
- **Fallback**: Cliente de email como respaldo

### 🎥 **Contenido Multimedia**
- **Proyectos GitHub**: 5 repositorios destacados
- **Videos YouTube**: Contenido técnico en plataformas
- **Imágenes Optimizadas**: Thumbnails personalizadas

## 🛠️ Tecnologías Utilizadas

- **React 19** - Framework frontend moderno
- **Vite** - Build tool ultrarrápido
- **CSS Modules** - Estilos modulares y escalables
- **EmailJS** - Servicio de envío de emails
- **GitHub Pages** - Hosting gratuito

## 🚀 Despliegue Automático

### **Método Recomendado: GitHub Actions (Automático)**

1. **Sube tu código** al repositorio `github-pages`
2. **Ve a Settings** → **Pages**
3. **Source**: Selecciona "GitHub Actions"
4. **¡Listo!** Cada push a `main` despliega automáticamente

### **Workflow de GitHub Actions Incluido**
```yaml
name: 🚀 Deploy to GitHub Pages
on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    - run: npm ci
    - run: npm run build
    - uses: actions/configure-pages@v4
    - uses: actions/deploy-pages@v4
      with:
        folder: ./dist
```

### **Deploy Manual (Opcional)**
```bash
# Solo si quieres deploy manual
npm run build
npm run deploy  # Sube la carpeta dist a gh-pages branch
```

## 📁 Estructura del Proyecto

```
github-pages/
├── dist/                 # Build de producción (GitHub Pages)
├── src/
│   ├── components/       # Componentes React
│   │   ├── Hero.jsx     # Sección principal con terminal
│   │   ├── Services.jsx # Servicios DevSecOps
│   │   ├── Experience.jsx # Trayectoria profesional
│   │   ├── Content.jsx  # Contenido educativo
│   │   ├── Projects.jsx # Proyectos y videos
│   │   └── Contact.jsx  # Formulario de contacto
│   ├── App.jsx          # Componente principal
│   └── index.css        # Estilos globales
├── public/              # Archivos estáticos
│   ├── favicon.svg      # Icono de pestaña
│   ├── icono.ico        # Favicon alternativo
│   └── *.png            # Imágenes de proyectos
└── package.json         # Dependencias y scripts
```

## 🎨 Personalización

### **Colores (Variables CSS)**
```css
:root {
  --aws-orange: #ff9900;      /* Acentos y títulos */
  --aws-blue: #232f3e;        /* Fondos principales */
  --aws-white: #ffffff;       /* Texto y fondos claros */
  --aws-gray-light: #eaeded;  /* Texto secundario */
}
```

### **Contenido**
- Edita los componentes en `src/components/` para cambiar textos
- Actualiza imágenes en `public/` para nuevos thumbnails
- Modifica estilos en archivos `.css` correspondientes

## 🔧 Configuración de EmailJS

### **1. Crear cuenta gratuita**
1. Ve a [emailjs.com](https://emailjs.com)
2. Regístrate con tu email
3. Verifica tu cuenta

### **2. Configurar Gmail**
1. **Email Services** → Add New Service → Gmail
2. Conecta tu cuenta de Gmail
3. Autoriza los permisos

### **3. Crear Template**
1. **Email Templates** → Create New Template
2. Configura asunto y contenido
3. Usa variables: `{{from_name}}`, `{{from_email}}`, etc.

### **4. Obtener credenciales**
- **Service ID**: De Email Services
- **Template ID**: De Email Templates
- **Public Key**: De Account → General

### **5. Configurar en código**
Actualiza `src/components/Contact.jsx`:
```javascript
const serviceId = 'tu_service_id'
const templateId = 'tu_template_id'
const publicKey = 'tu_public_key'
```

### **Variables de Entorno (Opcional)**
Si prefieres usar variables de entorno en lugar de hardcodear:

```bash
# Crea .env.local (NO subir a Git)
EMAILJS_SERVICE_ID=tu_service_id
EMAILJS_TEMPLATE_ID=tu_template_id
EMAILJS_PUBLIC_KEY=tu_clave_publica
```

**Nota:** Por simplicidad, las credenciales están hardcodeadas en el código actual.

## 📊 SEO y Performance

- ✅ **Meta tags** optimizados
- ✅ **Open Graph** para redes sociales
- ✅ **Robots.txt** para crawlers
- ✅ **Gzip compression** automático
- ✅ **Code splitting** inteligente
- ✅ **Lazy loading** de componentes

## 📊 Google Analytics 4

**✅ Google Analytics está ACTIVADO y funcionando** con consentimiento de cookies y tracking automático.

### **Estado Actual:**
- ✅ **Measurement ID**: `G-J7V8SQCXNJ` (configurado)
- ✅ **Tracking automático** de páginas y navegación SPA
- ✅ **Eventos personalizados** (formularios, clics, interacciones)
- ✅ **Consentimiento GDPR** con banner de cookies
- ✅ **Anonimización de IP** automática
- ✅ **Opt-out fácil** para usuarios

### **¿Qué datos recibirás?**
- 👥 **Usuarios únicos** y sesiones en tiempo real
- 👁️ **Páginas vistas** por sección
- 📧 **Conversiones** de formularios de contacto
- 📍 **Ubicación geográfica** de visitantes
- 💻 **Dispositivos y navegadores**
- ⏱️ **Tiempo en página** y comportamiento

📖 **Guía completa de configuración:** Ver `GOOGLE_ANALYTICS_SETUP.md`

## 🤝 Contribución

¿Quieres mejorar este portfolio?

1. **Fork** el repositorio
2. **Crea** una rama (`git checkout -b feature/nueva-funcion`)
3. **Commit** cambios (`git commit -am 'Agrega nueva función'`)
4. **Push** (`git push origin feature/nueva-funcion`)
5. **Pull Request** 🎉

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- **AWS** por inspirar el diseño
- **React & Vite** por las herramientas
- **Comunidad Open Source** por los recursos
- **EmailJS** por el servicio de emails

---

## 📞 Contacto

**Azul Ferreyra (Anzur)**  
🌐 [Portfolio Web](https://Azul-Ferreyra.github.io/github-pages)  
💼 [LinkedIn](https://www.linkedin.com/in/anzur/)  
📧 info.anzur@gmail.com

---

**⭐ Si te gusta este proyecto, dale una estrella en GitHub!**
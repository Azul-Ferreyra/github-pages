# Anzur - Portfolio DevSecOps

Página web profesional para **Azul Ferreyra (Anzur)**, Cloud & DevSecOps Engineer especializada en AWS, IaC con Terraform, CI/CD y Kubernetes.

## 🚀 Características

- **Diseño inspirado en AWS**: Colores y estilo que reflejan la especialización en servicios de Amazon Web Services
- **Foto de Perfil**: Imagen profesional a la izquierda que humaniza la página
- **Layout Limpio**: Título prominente centrado con badges de tecnologías
- **Indicador de Scroll Inteligente**: Mouse animado con texto "Scroll" que desaparece al hacer scroll
- **Favicon Personalizado**: Icono personalizado (.ico) para máxima compatibilidad
- **Responsive Design**: Optimizado para desktop y dispositivos móviles
- **🔒 Seguridad Avanzada**: CSP, sanitización XSS, rate limiting, validación robusta
- **Error Boundary**: Manejo seguro de errores con interfaz amigable
- **Secciones principales**:
  - Hero con foto de perfil, título principal y badges de tecnologías
  - Servicios DevSecOps (Cloud, Seguridad, IaC, etc.)
  - Experiencia profesional y trayectoria (prácticas en EEUU, KavaCon, búsqueda activa)
  - Contenido educativo autodidacta en AWS
  - Proyectos (repositorios GitHub + contenido destacado: 6 videos YouTube con thumbnails personalizadas, posts LinkedIn, demos técnicas, colaboraciones)
  - Información de contacto completa
  - Footer con redes sociales y copyright

## 🛠️ Tecnologías Utilizadas

- **React 19** - Framework frontend
- **Vite** - Build tool y dev server
- **CSS Modules** - Estilos modulares
- **ESLint** - Linting de código

## 📦 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de producción
npm run preview
```

## 🌐 Despliegue en GitHub Pages

La aplicación está configurada para desplegarse automáticamente en GitHub Pages en la URL:
`https://Azul-Ferreyra.github.io/github-pages`

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx      # Navegación principal
│   ├── Hero.jsx        # Sección principal con efecto terminal
│   ├── Services.jsx    # Servicios ofrecidos
│   ├── Experience.jsx  # Experiencia profesional
│   ├── Content.jsx     # Contenido educativo
│   ├── Projects.jsx    # Repos GitHub y videos YouTube
│   └── Contact.jsx     # Información de contacto
├── App.jsx             # Componente principal
├── App.css             # Estilos globales
└── index.css           # Reset y estilos base
```

## 🎨 Diseño

El diseño utiliza la paleta de colores de AWS:
- **Azul principal**: `#232f3e`
- **Naranja AWS**: `#ff9900`
- **Grises**: `#f3f3f3`, `#eaeded`
- **Texto**: `#16191f`, `#687078`

## 📞 Contacto

- **Email**: info.anzur@gmail.com
- **LinkedIn**: [Anzur](https://www.linkedin.com/in/anzur/)
- **YouTube**: [@Anzur-log](https://www.youtube.com/@Anzur-log)
- **Instagram**: [@anzur.log](https://www.instagram.com/anzur.log/)
- **GitHub**: [Azul-Ferreyra](https://github.com/Azul-Ferreyra)

## 📧 Formulario de Contacto

El formulario de contacto está configurado con **EmailJS** para enviar emails automáticamente a `info.anzur@gmail.com`.

### ✅ Características:
- **Envío automático** de emails
- **Validación robusta** de campos requeridos
- **Sanitización automática** de inputs (XSS protection)
- **Rate limiting** (30 segundos entre envíos)
- **Validación de email** RFC compliant
- **Mensajes de estado** detallados (éxito/error)
- **Responsive** para móviles y desktop
- **Fallback seguro**: Si falla, abre cliente de email con datos sanitizados

### 🔒 Medidas de Seguridad Implementadas:

#### **1. Sanitización de Input:**
- Remoción automática de caracteres peligrosos (`<>`, `javascript:`, event handlers)
- Eliminación de scripts embebidos
- Limitación de longitud máxima por campo

#### **2. Validación Avanzada:**
- **Email**: Regex RFC compliant + límite de 254 caracteres
- **Nombre**: 2-100 caracteres
- **Asunto**: 5-200 caracteres
- **Mensaje**: 10-5000 caracteres
- **Validación en tiempo real** con feedback visual

#### **3. Rate Limiting:**
- **Cooldown de 30 segundos** entre envíos
- **Prevención de spam** y abuso
- **Mensaje claro** de tiempo de espera

#### **4. Manejo de Errores Seguro:**
- **Mensajes específicos** según tipo de error
- **Fallback automático** con datos sanitizados
- **Logging seguro** sin exponer datos sensibles

#### **5. Protección XSS:**
- **React sanitization** automática
- **Input filtering** adicional
- **Content Security Policy** implícita

### 🔧 Configuración actual:
- **Service ID**: `service_joj64s6`
- **Template ID**: `template_jcrvrau`
- **Public Key**: `hcAqGD0w-zKNCY5Dh`
- **Destino**: `info.anzur@gmail.com`

### 📨 Cómo funciona:
1. Usuario llena el formulario
2. EmailJS procesa y envía email a través de Gmail
3. Recibes el email en `info.anzur@gmail.com`
4. Usuario ve mensaje de confirmación

**¿Necesitas cambiar la configuración?** Actualiza las credenciales en `src/components/Contact.jsx`.

## 📝 Personalización

Para personalizar el contenido:
1. Edita los datos en cada componente según tus necesidades
2. Actualiza las URLs de repositorios y videos en `Projects.jsx`
3. Modifica la información de contacto en `Contact.jsx`
4. Ajusta colores y estilos en los archivos CSS correspondientes

---

**Desarrollado con ❤️ por Anzur (Azul Ferreyra)**
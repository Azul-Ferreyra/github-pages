import { useState } from 'react'
import './Blog.css'

const posts = [
  {
    title: 'Zero Trust en la nube: pasos prácticos',
    date: 'Ene 2026',
    tags: ['Cloud', 'Seguridad', 'Zero Trust'],
    summary: 'Checklist accionable para endurecer identidades, redes y datos en AWS sin fricción para los equipos.',
    content: [
      'Empieza por identidades: MFA obligatorio, roles mínimos y rotación de credenciales. Separa cuentas por ambientes y usa SCP para bloquear acciones peligrosas por defecto.',
      'Red: todo privado por defecto, acceso solo vía VPN/SSO y con proxies de salida controlados. Usa Security Groups restrictivos y WAF para exponer mínimos públicos.',
      'Datos: cifrado en tránsito y en reposo, claves gestionadas, rotación y acceso por rol. Registra y alerta: CloudTrail + GuardDuty + Config + Security Hub.'
    ]
  },
  {
    title: 'Playbooks SOC listos para usar',
    date: 'Dic 2025',
    tags: ['SOC', 'Automatización', 'IR'],
    summary: 'Runbooks para phishing, ransomware y abuso de credenciales con foco en rapidez y trazabilidad.',
    content: [
      'Phishing: aislar endpoint, revocar sesiones, reset de credenciales, buscar IOC en SIEM, bloquear dominio/IP y notificar al usuario.',
      'Ransomware: aislar activos, snapshots si aplica, bloquear C2 en firewall/EDR, inventariar afectación, restaurar desde backups verificados.',
      'Credenciales abusadas: forzar logout global, rotar claves/API, revisar accesos recientes, aplicar política de MFA reforzada y alertar patrones anómalos.'
    ]
  },
  {
    title: 'Hardening de pipelines CI/CD',
    date: 'Nov 2025',
    tags: ['DevSecOps', 'CI/CD', 'K8s'],
    summary: 'Cómo proteger secretos, firmas y despliegues en pipelines multiambiente sin romper el flujo de delivery.',
    content: [
      'Secretos fuera del repo: usa vaults o secretos del runner; nunca en variables de entorno planas ni en el código.',
      'Firmas y artefactos: firma imágenes y paquetes, verifica en deploy. Escanea dependencias y contenedores en cada build.',
      'Menos permisos: runners y tokens con scope mínimo, separación por ambiente, approval manual para prod y registro de auditoría.'
    ]
  }
]

function Blog() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2 className="section-title">Blog & Notas</h2>
        <p className="blog-subtitle">
          Guías cortas y accionables sobre cloud, DevSecOps y operaciones de seguridad.
        </p>

        <div className="blog-grid">
          {posts.map((post, index) => (
            <article key={index} className="blog-card">
              <div className="blog-meta">
                <span className="blog-date">{post.date}</span>
                <div className="blog-tags">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="blog-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>

              {openIndex === index && (
                <div className="blog-content">
                  {post.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}

              <button className="blog-link" onClick={() => toggle(index)}>
                {openIndex === index ? 'Cerrar' : 'Leer en la página'}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog

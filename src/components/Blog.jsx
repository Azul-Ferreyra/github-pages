import './Blog.css'

function Blog() {
  const posts = [
    {
      title: 'Zero Trust en la nube: pasos prácticos',
      date: 'Ene 2026',
      tags: ['Cloud', 'Seguridad', 'Zero Trust'],
      description: 'Checklist accionable para endurecer identidades, redes y datos en AWS sin fricción para los equipos.',
      link: '#contact'
    },
    {
      title: 'Playbooks SOC listos para usar',
      date: 'Dic 2025',
      tags: ['SOC', 'Automatización', 'IR'],
      description: 'Playbooks y runbooks para phishing, ransomware y abuso de credenciales con foco en rapidez y trazabilidad.',
      link: '#contact'
    },
    {
      title: 'Hardening de pipelines CI/CD',
      date: 'Nov 2025',
      tags: ['DevSecOps', 'CI/CD', 'K8s'],
      description: 'Cómo proteger secretos, firmas y despliegues en pipelines multiambiente sin romper el flujo de delivery.',
      link: '#contact'
    }
  ]

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
              <p>{post.description}</p>
              <a
                className="blog-link"
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Leer más →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog

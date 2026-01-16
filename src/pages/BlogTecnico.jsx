import { useState } from 'react'
import defaultBlogImage from '../assets/images/blog/default.svg'
import './BlogTecnico.css'

const markdownFiles = import.meta.glob('../content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
})

const parseFrontmatter = (raw) => {
  const trimmed = raw.trim()
  if (!trimmed.startsWith('---')) {
    return { data: {}, content: raw }
  }

  const endIndex = trimmed.indexOf('\n---')
  if (endIndex === -1) {
    return { data: {}, content: raw }
  }

  const frontmatterBlock = trimmed.slice(3, endIndex).trim()
  const content = trimmed.slice(endIndex + 4).trim()
  const data = frontmatterBlock.split('\n').reduce((acc, line) => {
    const [key, ...rest] = line.split(':')
    if (!key) return acc
    const rawValue = rest.join(':').trim()
    const normalizedValue = rawValue.replace(/^["']|["']$/g, '')
    acc[key.trim()] = normalizedValue
    return acc
  }, {})

  return { data, content }
}

const normalizeTags = (value) =>
  value
    ? value.split(',').map((tag) => tag.trim()).filter(Boolean)
    : []

const getExcerpt = (content) => {
  const line = content.split('\n').find((row) => row.trim().length > 0)
  return line ? line.replace(/^#+\s*/, '') : ''
}

const splitContent = (content) =>
  content
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)

const formatDate = (value) => {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}

const articles = Object.entries(markdownFiles).map(([path, raw]) => {
  const { data, content } = parseFrontmatter(raw)
  const fallbackTitle = path.split('/').pop()?.replace('.md', '') ?? 'Articulo'
  return {
    id: path,
    title: data.title || fallbackTitle,
    date: formatDate(data.date),
    image: data.image || '',
    tags: normalizeTags(data.tags),
    summary: data.summary || getExcerpt(content),
    sortDate: data.date || '',
    content: splitContent(content)
  }
})
  .sort((a, b) => (a.sortDate < b.sortDate ? 1 : -1))

const blogImages = import.meta.glob('../assets/images/blog/*', {
  eager: true,
  import: 'default'
})

const resolveBlogImage = (value) => {
  if (!value) return defaultBlogImage
  if (value.startsWith('http') || value.startsWith('/')) {
    return value
  }
  const filename = value.split('/').pop()
  if (!filename) return defaultBlogImage
  const match = Object.keys(blogImages).find((key) => key.endsWith(`/${filename}`))
  return match ? blogImages[match] : defaultBlogImage
}

function BlogTecnico() {
  const asset = (filename) => `${import.meta.env.BASE_URL}${filename}`
  const [openId, setOpenId] = useState(null)

  const toggleArticle = (id) => {
    setOpenId(openId === id ? null : id)
  }

  const openArticle = articles.find((article) => article.id === openId)
  const visibleArticles = openArticle
    ? [openArticle, ...articles.filter((article) => article.id !== openId)]
    : articles

  return (
    <main id="logs" className="blog-tecnico-page">
      <section className="blog-author">
        <div className="container">
          <div className="blog-author-grid">
            <div className="blog-author-photo">
              <img src={asset('mujeres.png')} alt="Foto de la autora" />
            </div>
            <div className="blog-author-text">
              <h2>Los Logs de una Ingeniera</h2>
              <p>
                Mi registro personal de retos, servicios de AWS y soluciones encontradas en el camino. Un diario técnico
                donde documento el proceso de construir y asegurar la nube, un log a la vez.
              </p>
              <blockquote className="blog-author-note">
                Este es un espacio de documentación técnica, no publicitario. Cada herramienta o servicio que analizo ha
                sido elegido bajo criterios de arquitectura para solucionar problemas reales en mis proyectos. Aquí
                comparto por qué los elegí, cómo los implementé y qué resultados obtuve, basándome exclusivamente en mi
                experiencia técnica.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <div className="blog-author-divider"></div>

      <section className="blog-tecnico-grid">
        <div className="container">
          <div className="blog-tecnico-cards">
            {visibleArticles.map((article) => (
              <article
                key={article.id}
                className={`blog-tecnico-card${openId === article.id ? ' is-open' : ''}`}
              >
                <div className="blog-tecnico-media">
                  <img src={resolveBlogImage(article.image)} alt={article.title} loading="lazy" />
                </div>
                <div className="blog-tecnico-meta">
                  <span>{article.date}</span>
                  <div className="blog-tecnico-tags">
                    {article.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                </div>
                <h2>
                  <span className="blog-log-icon">&gt;_</span>
                  {article.title}
                </h2>
                <p className="blog-tecnico-summary">{article.summary}</p>
                <div className="blog-tecnico-content">
                  <div className="blog-tecnico-content-inner">
                    {article.content.map((block, i) => (
                      <p key={i}>{block}</p>
                    ))}
                  </div>
                </div>
                <button
                  className="blog-tecnico-button"
                  type="button"
                  onClick={() => toggleArticle(article.id)}
                >
                  {openId === article.id ? 'Leer menos' : 'Leer articulo'}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default BlogTecnico

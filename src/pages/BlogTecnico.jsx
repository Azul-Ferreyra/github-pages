import './BlogTecnico.css'

const markdownFiles = import.meta.glob('../content/blog/*.md', {
  eager: true,
  as: 'raw'
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
    acc[key.trim()] = rest.join(':').trim()
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

const formatDate = (value) => {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  const iso = date.toISOString().replace(/\.\d{3}Z$/, 'Z')
  const [day, time] = iso.split('T')
  return `${day} T ${time}`
}

const articles = Object.entries(markdownFiles).map(([path, raw]) => {
  const { data, content } = parseFrontmatter(raw)
  const fallbackTitle = path.split('/').pop()?.replace('.md', '') ?? 'Articulo'
  return {
    title: data.title || fallbackTitle,
    date: formatDate(data.date),
    image: data.image || '',
    tags: normalizeTags(data.tags),
    summary: data.summary || getExcerpt(content),
    sortDate: data.date || ''
  }
})
  .sort((a, b) => (a.sortDate < b.sortDate ? 1 : -1))

const resolveImageSrc = (value, asset) => {
  if (!value) return ''
  if (value.startsWith('http') || value.startsWith('/')) {
    return value
  }
  return asset(value)
}

function BlogTecnico() {
  const asset = (filename) => `${import.meta.env.BASE_URL}${filename}`

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
            </div>
          </div>
        </div>
      </section>

      <div className="blog-author-divider"></div>

      <section className="blog-tecnico-grid">
        <div className="container">
          <div className="blog-tecnico-cards">
            {articles.map((article, index) => (
              <article key={index} className="blog-tecnico-card">
                {article.image ? (
                  <div className="blog-tecnico-media">
                    <img src={resolveImageSrc(article.image, asset)} alt={article.title} />
                  </div>
                ) : (
                  <div className="blog-tecnico-media blog-tecnico-media--fallback"></div>
                )}
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
                <p>{article.summary}</p>
                <button className="blog-tecnico-button">Leer articulo</button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default BlogTecnico

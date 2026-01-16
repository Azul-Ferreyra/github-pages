import { useEffect, useRef } from 'react'

function MantisFeed() {
  const scriptRef = useRef(null)

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://widget.tagembed.com/embed.min.js"]'
    )

    if (!existingScript) {
      const script = document.createElement('script')
      script.src = 'https://widget.tagembed.com/embed.min.js'
      script.async = true
      script.defer = true
      document.body.appendChild(script)
      scriptRef.current = script
    }

    return () => {
      if (scriptRef.current?.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current)
        scriptRef.current = null
      }
    }
  }, [])

  return (
    <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">
      <h2 className="text-2xl font-semibold text-slate-900">
        Actualidad Tech &amp; Estrategia
      </h2>
      <p className="mt-2 text-slate-600">
        Un espacio dedicado a compartir noticias y recursos clave para el dominio tecnico y el liderazgo femenino.
      </p>
      <div className="mt-6 min-h-[600px]">
        <div
          className="tagembed-widget"
          style={{ width: '100%', height: '600px', minHeight: '600px', overflow: 'auto' }}
          data-widget-id="314012"
          data-website="1"
          data-font="Open Sans"
          data-font-family="Open Sans"
        ></div>
      </div>
    </section>
  )
}

export default MantisFeed

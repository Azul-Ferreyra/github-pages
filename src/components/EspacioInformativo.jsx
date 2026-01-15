import { useEffect, useRef, useState } from 'react'

function EspacioInformativo() {
  const scriptRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://widget.tagembed.com/embed.min.js"]'
    )

    if (existingScript) {
      setIsLoaded(true)
      return undefined
    }

    const script = document.createElement('script')
    script.src = 'https://widget.tagembed.com/embed.min.js'
    script.async = true
    script.defer = true
    script.onload = () => setIsLoaded(true)
    script.onerror = () => setIsLoaded(false)
    document.body.appendChild(script)
    scriptRef.current = script

    return () => {
      if (scriptRef.current?.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current)
        scriptRef.current = null
      }
    }
  }, [])

  return (
    <section
      className="bg-slate-50 rounded-2xl shadow-md p-6 md:p-10"
      style={{ minHeight: '800px', height: 'auto', overflow: 'visible' }}
    >
      <h2 className="font-bold tracking-tight text-slate-900 text-center" style={{ fontSize: '2.2rem' }}>
        Actualidad Tech &amp; Estrategia
      </h2>
      <p className="mt-2 text-center" style={{ color: '#64748b' }}>
        Noticias y tendencias globales seleccionadas para el liderazgo técnico. Curaduría exclusiva de fuentes oficiales
        y líderes en tecnología para asegurar información veraz y de alto impacto.
      </p>
      <div className="mt-6" style={{ minHeight: '800px', height: 'auto', overflow: 'visible' }}>
        {!isLoaded && (
          <div className="flex items-center justify-center text-slate-500 py-6">
            Conectando con el radar de noticias...
          </div>
        )}
        <div
          className="tagembed-widget"
          style={{ width: '100%', height: 'auto', minHeight: '800px', overflow: 'visible' }}
          data-widget-id="314012"
          data-website="1"
          data-height="auto"
        ></div>
      </div>
    </section>
  )
}

export default EspacioInformativo

import { useState } from 'react'
import './EspacioMantis.css'
import EspacioInformativo from '../components/EspacioInformativo'

function EspacioMantis() {
  const asset = (filename) => `${import.meta.env.BASE_URL}${filename}`
  const [openFaq, setOpenFaq] = useState(null)
  const [openOpportunity, setOpenOpportunity] = useState(null)

  const opportunities = [
    {
      title: 'Inteligencia Artificial Generativa',
      org: 'Amazon + Global Women In Tech',
      type: 'Curso Gratis',
      summary:
        'Amazon + Global Women In Tech te invita a inscribirte en dos cursos GRATUITOS de capacitación Gen AI de Amazon Web Services (AWS). Regístrese para obtener una cuenta de AWS Skill Builder para comenzar hoy mismo.',
      url: 'https://women-in-tech.org/education/'
    },
    {
      title: 'Girls Go STEM',
      org: 'Comunidad del Instituto Europeo de Innovación y Tecnología',
      type: 'Educación Gratis',
      summary:
        'Girls Go STEM es una iniciativa educativa liderada por la Comunidad del Instituto Europeo de Innovación y Tecnología. Nuestra misión es dotar a estudiantes, especialmente a mujeres jóvenes, de habilidades digitales y emprendedoras y preparándolas para futuras carreras profesionales. Girls Go STEM empodera a la próxima generación ofreciendo educación digital gratuita, promoviendo la igualdad de oportunidades.',
      url: 'https://eit-girlsgostem.eu/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=sc'
    },
    {
      title: 'Laboratoria',
      org: 'Laboratoria',
      type: 'Comunidad',
      summary:
        'Millones de mujeres talentosas en America Latina estan listas para reinsertarse o avanzar en sus carreras, justo cuando la inteligencia artificial esta redefiniendo el mundo laboral y el exito depende menos de los titulos y mas de la fluidez digital, la adaptabilidad y las habilidades humanas. En Laboratoria abrimos caminos para que mas mujeres accedan a oportunidades laborales de calidad y, al hacerlo, puedan crecer con autonomia, confianza y proposito.',
      url: '#'
    },
    {
      title: 'Tecnolochicas',
      org: 'Fundacion Televisa',
      type: 'Beca',
      summary:
        'Tecnolochicas es un programa de Fundacion Televisa enfocado en inspirar y formar a mujeres jovenes de entre 12 y 17 anos en las bases de la programacion y las ciencias computacionales. Su objetivo es ampliar aspiraciones profesionales, fortalecer la confianza y desarrollar habilidades clave para mejorar su empleabilidad futura. Incluye la oportunidad de Gana tu Beca junto a aliados que impulsan un futuro mas inclusivo.',
      url: 'https://tecnolochicas.mx/'
    },
    {
      title: 'Santander Open Academy',
      org: 'Banco Santander',
      type: 'Beca',
      summary:
        'Santander Open Academy es la iniciativa sin animo de lucro de Banco Santander para ayudarte a obtener la formacion que necesitas. Apoya el desarrollo de competencias profesionales para mejorar la empleabilidad con cursos subvencionados al 100%, contenidos gratuitos y becas de universidades e instituciones lideres.',
      url: 'https://www.santanderopenacademy.com/es/scholarships.html'
    },
    {
      title: 'Women Techmakers',
      org: 'Technovation',
      type: 'Comunidad',
      summary:
        'Women Techmakers es un ecosistema de profesionales comprometidos que abogan por una mayor diversidad de género en la tecnología de todo el mundo. A través de la comunidad, visibilidad y recursos.',
      url: 'https://www.technovation.org/women-techmakers/'
    }
  ]

  const faqs = [
    {
      question: '¿Cómo puedo comenzar mi camino en Cloud Computing?',
      answer:
        'Empieza con fundamentos de redes, sistemas y seguridad. Luego elige una plataforma (AWS es una gran base), sigue rutas introductorias y practica con laboratorios gratuitos.'
    },
    {
      question: '¿Existen comunidades de mujeres en tecnología que me recomiendes?',
      answer:
        'Sí. Puedes buscar Women in Tech, AWS User Groups locales, Girl Code, PyLadies o comunidades en tu ciudad enfocadas en mentoría y networking.'
    },
    {
      question: '¿Qué certificaciones de AWS son las mejores para empezar?',
      answer:
        'AWS Certified Cloud Practitioner es el mejor punto de partida. Después, Solutions Architect - Associate es una opción sólida para construir base técnica.'
    },
    {
      question: '¿Hay programas de mentoría específicos para nosotras?',
      answer:
        'Muchas comunidades ofrecen mentorías para mujeres en tecnología. Revisa programas de Women in Tech, Technovation y grupos locales con foco en desarrollo profesional.'
    }
  ]

  const cultureEvents = [
    { name: 'Ekoparty', label: 'EKO', url: 'https://ekoparty.org/' },
    { name: 'Nerdearla', label: 'NERD', url: 'https://nerdear.la/' },
    { name: 'RootedCON', label: 'ROOT', url: 'https://www.rootedcon.com/' }
  ]

  const cultureCommunities = [
    { name: 'XSec', label: 'XSEC', url: '#' },
    { name: 'ElviSec', label: 'ELV', url: '#' },
    { name: 'Sysarmy', label: 'SYS', url: '#' }
  ]

  const freeResources = [
    { name: 'Nasseros', label: 'N', category: 'Redes/Hardware', url: '#' },
    { name: 'Soy Dalto', label: 'SD', category: 'Programación', url: '#' },
    { name: 'Platzi', label: 'P', category: 'Educación General Tech', url: '#' },
    { name: 'Ariel DevOps', label: 'AD', category: 'Cloud/DevOps', url: '#' },
    { name: 'TodoCode', label: 'TC', category: 'Programación/Lógica', url: '#' },
    { name: 'S4viSinFiltro', label: 'S4', category: 'Hacking/Seguridad', url: '#' },
    { name: 'Maxi Programa', label: 'MP', category: 'Desarrollo .NET/Lógica', url: '#' },
    { name: 'DragonJAR', label: 'DJ', category: 'Hacking/Seguridad', url: '#' }
  ]

  return (
    <main className="mantis-page">
      <section className="mantis-hero">
        <div className="container">
          <div className="mantis-hero-content">
            <div className="mantis-hero-text">
              <h1>Espacio Mantis</h1>
              <p className="mantis-vision">
                Espacio Mantis nace de la voluntad de aportar un grano de arena al crecimiento profesional femenino
                en el sector IT. Mi objetivo es que este rincón sirva como un puente directo hacia eventos, charlas
                online y noticias tecnológicas, facilitando que más mujeres accedan a la información necesaria para
                integrarse y permanecer en el mundo digital con seguridad y dominio técnico.
              </p>
            </div>
            <div className="mantis-hero-image">
              <img src={asset('mujer.jpeg')} alt="Equipo Espacio Mantis" />
            </div>
          </div>
        </div>
      </section>

      <section id="eventos" className="mantis-calendar py-20">
        <div className="container">
          <div className="mantis-calendar-grid">
            <div className="mantis-calendar-embed">
              <div className="mantis-calendar-header">
                <h2 className="section-title">Oportunidades &amp; Eventos</h2>
                <p className="mantis-calendar-note">
                  Una selección de webinars, mentorías y encuentros de diversas comunidades tech. No soy la organizadora
                  de estos eventos; mi objetivo es centralizar y acercar contenido de valor para que no te pierdas nada
                  de lo que sucede en el ecosistema tecnológico.
                </p>
              </div>
              <div className="calendar-frame">
                <iframe
                  title="Calendario Espacio Mantis"
                  src="https://calendar.google.com/calendar/embed?src=aW5mby5hbnp1ckBnbWFpbC5jb20&mode=MONTH&showTitle=0&showNav=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mantis-culture">
        <div className="container">
          <h2 className="mantis-culture-title">Cultura Tecnológica</h2>
          <p className="mantis-culture-subtitle">
            Mientras que los eventos son las grandes citas anuales, estos colectivos mantienen viva la llama del
            conocimiento con webinars y mentorías durante todo el año.
          </p>
          <div className="mantis-culture-row">
            <h3 className="mantis-culture-row-title">Grandes Encuentros</h3>
            <div className="mantis-culture-grid">
              {cultureEvents.map((group) => (
                <a
                  key={group.name}
                  className="mantis-culture-item"
                  href={group.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="mantis-culture-logo" aria-hidden="true">
                    {group.label}
                  </span>
                  <span className="mantis-culture-name">{group.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="mantis-culture-row">
            <h3 className="mantis-culture-row-title">Comunidades Activas</h3>
            <div className="mantis-culture-grid">
              {cultureCommunities.map((group) => (
                <a
                  key={group.name}
                  className="mantis-culture-item"
                  href={group.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="mantis-culture-logo" aria-hidden="true">
                    {group.label}
                  </span>
                  <span className="mantis-culture-name">{group.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="becas" className="mantis-opportunities">
        <div className="container">
          <h2 className="mantis-opportunities-title">Oportunidades &amp; Becas Tech para Mujeres</h2>
          <p className="mantis-opportunities-subtitle">
            Recopilación de programas, becas y formación técnica diseñada para potenciar el talento femenino en la
            industria.
          </p>
          <div
            className="mantis-opportunities-carousel"
            onMouseLeave={() => setOpenOpportunity(null)}
          >
            <div className="mantis-opportunities-track">
              {[...opportunities, ...opportunities].map((item, index) => {
                const baseIndex = index % opportunities.length
                const isOpen = openOpportunity === baseIndex
                const isDuplicate = index >= opportunities.length
                return (
                  <article
                    key={`${item.title}-${index}`}
                    className={`mantis-opportunity-card ${isOpen ? 'is-open' : ''} ${
                      isDuplicate ? 'is-duplicate' : ''
                    }`}
                  >
                    <div className="mantis-opportunity-body">
                      <div className="mantis-opportunity-header">
                        <span className="mantis-opportunity-badge">{item.type}</span>
                      </div>
                      <h3 className="mantis-opportunity-title">{item.title}</h3>
                      <p className="mantis-opportunity-org">{item.org}</p>
                      <p className="mantis-opportunity-summary">{item.summary}</p>
                    </div>
                    <div className="mantis-opportunity-footer">
                      <button
                        type="button"
                        className="mantis-opportunity-toggle"
                        onClick={() => setOpenOpportunity(isOpen ? null : baseIndex)}
                        aria-expanded={isOpen}
                      >
                        {isOpen ? 'Ver menos' : 'Ver más'}
                      </button>
                      <div className={`mantis-opportunity-expand ${isOpen ? 'is-open' : ''}`}>
                        <a
                          className="mantis-opportunity-cta"
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Ir a la oportunidad
                        </a>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="noticias" className="mantis-news py-20">
        <div className="container">
          <div className="max-w-[1200px] mx-auto">
            <EspacioInformativo />
          </div>
        </div>
      </section>

      <section className="mantis-resources">
        <div className="container">
          <h2 className="mantis-resources-title">Recursos y Formación Gratuita</h2>
          <p className="mantis-resources-subtitle">
            Directorio compacto de mentores, canales y comunidades para potenciar tu formación técnica.
          </p>
          <div className="mantis-resources-grid">
            {freeResources.map((resource) => (
              <a
                key={resource.name}
                className="mantis-resources-card"
                href={resource.url}
                target="_blank"
                rel="noreferrer"
              >
                <span className="mantis-resources-logo" aria-hidden="true">
                  {resource.label}
                </span>
                <span className="mantis-resources-name">{resource.name}</span>
                <span className="mantis-resources-badge">{resource.category}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mantis-faq">
        <div className="container">
          <h2 className="mantis-faq-title">Preguntas Frecuentes</h2>
          <div className="mantis-faq-list">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index
              return (
                <div key={item.question} className="mantis-faq-item">
                  <button
                    type="button"
                    className="mantis-faq-question"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span>{item.question}</span>
                    <span className="mantis-faq-icon">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && <p className="mantis-faq-answer">{item.answer}</p>}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default EspacioMantis

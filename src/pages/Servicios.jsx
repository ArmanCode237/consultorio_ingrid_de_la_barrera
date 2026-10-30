export default function Servicios() {
  const serviciosList = [
    {
      titulo: 'Neuropsicología:',
      descripcion:
        'Evaluación e intervención en alteraciones de las funciones psicológicas superiores: atención, memoria, lenguaje, funciones ejecutivas, velocidad de procesamiento, razonamiento, habilidades académicas y coeficiente intelectual.',
      align: 'right',
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5">
          <path d="M9.5 4A3.5 3.5 0 0 0 6 7.5c0 .6.15 1.15.4 1.65A3.5 3.5 0 0 0 5 12c0 1.4.8 2.6 2 3.15V17a3 3 0 0 0 3 3h1V4H9.5z" />
          <path d="M14.5 4A3.5 3.5 0 0 1 18 7.5c0 .6-.15 1.15.4 1.65A3.5 3.5 0 0 1 19 12c0 1.4-.8 2.6-2 3.15V17a3 3 0 0 1-3 3h-1V4h1.5z" />
        </svg>
      ),
    },
    {
      titulo: 'Lenguaje:',
      descripcion:
        'Enfoque comunicativo-integral, tomando en cuenta el nivel comunicativo, las necesidades y los intereses de cada persona. Áreas: pragmática, semántica, sintaxis, comprensión y expresión.',
      align: 'left',
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5">
          <path d="M2 12s3-5 6.5-5c1.8 0 3.5 1.2 3.5 1.2S13.7 7 15.5 7C19 7 22 12 22 12s-3 6-10 6-10-6-10-6z" />
          <path d="M2 12c4 1.5 8 1.5 10 1.5s6 0 10-1.5" />
        </svg>
      ),
    },
    {
      titulo: 'Habla:',
      descripcion:
        'Terapia miofuncional y oromotora dirigida a favorecer el equilibrio y funcionamiento de la musculatura orofacial y patrones adecuados para la articulación. Terapia de voz y para la fluidez verbal (disfluencias).',
      align: 'right',
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5">
          <circle cx="9" cy="10" r="3" />
          <path d="M4 20c0-3 2.2-5 5-5s5 2 5 5" />
          <path d="M15 6h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2l-2 2V6z" />
        </svg>
      ),
    },
    {
      titulo: 'Aprendizaje:',
      descripcion:
        'Intervención en procesos de lectura, escritura, cálculo, comprensión, razonamiento y estrategias de aprendizaje mediante actividades lúdicas y funcionales.',
      align: 'left',
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
    },
    {
      titulo: 'Área emocional:',
      descripcion:
        'Intervención dirigida a favorecer la regulación de emociones y el autoestima mediante estrategias terapéuticas acordes con las necesidades de cada persona.',
      align: 'right',
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5">
          <path d="M12 20.5s-7-4.35-7-10a4.2 4.2 0 0 1 7-3.1 4.2 4.2 0 0 1 7 3.1c0 5.65-7 10-7 10z" />
        </svg>
      ),
    },
  ];

  const pilares = [
    {
      img: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80',
      titulo: 'Juego y aprendizaje:',
      texto: 'actividades lúdicas y significativas.',
    },
    {
      img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80',
      titulo: 'Trabajo individual y grupal:',
      texto: 'desarrollo individual y generalización de habilidades.',
    },
    {
      img: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80',
      titulo: 'Acompañamiento familiar:',
      texto: 'orientación a padres y cuidadores.',
    },
  ];

  return (
    <main>
      {/* HERO SERVICIOS */}
      <section className="page-hero bg-teal">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1 className="page-hero-title">Servicios</h1>
          </div>
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
              alt="Servicios de Neuropsicología y Educación Especial"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* LISTA DE SERVICIOS HORIZONTALES */}
      <section className="services-list-section container">
        {serviciosList.map((item, idx) => (
          <div
            key={idx}
            className={`service-strip-card ${
              item.align === 'left' ? 'icon-left' : 'icon-right'
            }`}
          >
            <div className="service-strip-text">
              <h3>{item.titulo}</h3>
              <p>{item.descripcion}</p>
            </div>
            <div className="service-strip-circle">{item.icon}</div>
          </div>
        ))}
      </section>

      {/* NUESTRO MODELO DE TRABAJO */}
      <section className="work-model-section container">
        <h2 className="section-heading-blue">Nuestro Modelo de Trabajo</h2>

        <div className="work-model-diagram">
          {/* Paso 1 */}
          <div className="model-step step-1">
            <span className="step-badge">1</span>
            <div className="step-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5">
                <path d="M9.5 4A3.5 3.5 0 0 0 6 7.5c0 .6.15 1.15.4 1.65A3.5 3.5 0 0 0 5 12c0 1.4.8 2.6 2 3.15V17a3 3 0 0 0 3 3h1V4H9.5z" />
                <path d="M14.5 4A3.5 3.5 0 0 1 18 7.5c0 .6-.15 1.15.4 1.65A3.5 3.5 0 0 1 19 12c0 1.4-.8 2.6-2 3.15V17a3 3 0 0 1-3 3h-1V4h1.5z" />
              </svg>
            </div>
            <h4>Evaluación integral</h4>
            <span className="step-subtitle">
              6 sesiones de evaluación + 1 de entrega de resultados.
            </span>
            <p>
              Se conocen fortalezas y áreas de oportunidad, se determinan
              necesidades cognitivas, tipo de intervención, frecuencia y
              objetivos específicos. Se realiza el plan terapéutico
              personalizado.
            </p>
          </div>

          {/* Paso 2 */}
          <div className="model-step step-2">
            <span className="step-badge">2</span>
            <div className="step-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5">
                <circle cx="9" cy="12" r="3" />
                <circle cx="16" cy="9" r="2.5" />
                <path d="M9 7v2m0 6v2m-5-5h2m6 0h2" />
              </svg>
            </div>
            <h4>Intervención</h4>
            <span className="step-subtitle">1 o 2 sesiones por semana.</span>
            <p>
              Se implementa el programa diseñado específicamente para el
              paciente. Cada sesión tiene una duración aproximada de 50 minutos.
            </p>
          </div>

          {/* Paso 3 */}
          <div className="model-step step-3">
            <span className="step-badge">3</span>
            <div className="step-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <polyline points="8 12 11 15 16 9" />
              </svg>
            </div>
            <h4>Reevaluación</h4>
            <span className="step-subtitle">Cada 6 meses.</span>
            <p>
              Se revisan avances y necesidades actuales para ajustar el programa
              terapéutico.
            </p>
          </div>
        </div>
      </section>

      {/* NUESTROS PILARES */}
      <section className="pilares-cards-section container">
        <h2 className="section-heading-blue">Nuestros Pilares</h2>
        <div className="pilares-photo-grid">
          {pilares.map((p, idx) => (
            <article key={idx} className="pilar-photo-card">
              <img src={p.img} alt={p.titulo} />
              <div className="pilar-photo-body">
                <p>
                  <strong>{p.titulo}</strong> {p.texto}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MODALIDADES: INDIVIDUAL, GRUPAL Y FAMILIAR */}
      <section className="modalidades-section container">
        <div className="modalidades-grid">
          <div className="modalidades-title">
            <h2>
              Individual,<br />
              grupal y<br />
              familiar
            </h2>
          </div>
          <div className="modalidades-content">
            <p>
              <strong>Sesiones individuales:</strong> trabajo personalizado y
              objetivos específicos.
            </p>
            <p>
              <strong>Sesiones grupales:</strong> práctica, interacción y
              generalización de habilidades.
            </p>
            <p>
              <strong>Familia:</strong> orientación para favorecer la
              continuidad del proceso fuera de las sesiones.
            </p>
            <p className="modalidades-highlight">
              Nuestro objetivo final es que las habilidades puedan utilizarse en
              situaciones escolares, familiares y sociales.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
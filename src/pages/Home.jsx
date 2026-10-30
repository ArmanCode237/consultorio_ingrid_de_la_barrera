import { Link } from 'react-router-dom';

export default function Home() {
  const childSituations = [
    'Se distrae fácilmente y le cuesta terminar actividades.',
    'Tiene dificultades para aprender a leer o escribir.',
    'Comprende las instrucciones, pero le cuesta llevarlas a cabo.',
    'Tiene dificultades para expresarse o comprender el lenguaje.',
    'Presenta dificultades para pronunciar algunos sonidos.',
    'Tiene problemas para organizarse o administrar su tiempo.',
    'Su rendimiento escolar no corresponde con lo que parece poder hacer.',
    'Se frustra fácilmente ante las actividades escolares.',
    'Tiene dificultades para relacionarse o adaptarse a diferentes contextos.',
    'Necesita apoyo para desarrollar mayor autonomía.',
  ];

  const familySituations = [
    'Olvida conversaciones, citas o información que acaba de recibir como repetir preguntas o contar lo mismo varias veces.',
    'Hace pausas frecuentes o pierde el hilo de una conversación.',
    'Tiene problemas para concentrarse, seguir una conversación o realizar actividades que antes hacía con facilidad.',
    'Tiene problemas para organizar actividades, administrar dinero, planificar, resolver problemas o seguir varios pasos.',
    'Confunde fechas o días de la semana.',
    'Está apático, irritable, ansioso o con pérdida de interés en actividades.',
    'Necesita ayuda para actividades instrumentales (cocinar, bañarse, vestirse) que previamente realizaba de manera independiente.',
  ];

  return (
    <main>
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1>
              Neuropsicología y Educación Especial para favorecer el desarrollo
              integral del ser humano.
            </h1>
            <p>
              Un espacio terapéutico especializado en neuropsicología, lenguaje,
              lectoescritura, psicomotricidad y audición, donde cada
              intervención se diseña de acuerdo con las necesidades de cada
              persona.
            </p>
          </div>
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
              alt="Terapia infantil de lenguaje y neuropsicología"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* 2. BOTONES DE ACCIÓN PRINCIPALES */}
      <section className="cta-strip">
        <div className="container cta-buttons-wrapper">
          <Link to="/agendar" className="btn-pill-lg btn-yellow">
            Agendar Cita
          </Link>
          <Link to="/servicios" className="btn-pill-lg btn-cyan">
            Nuestros Servicios
          </Link>
        </div>
      </section>

      {/* 3. BARRA DE PILARES / EXPERIENCIA */}
      <section className="pillars-bar">
        <div className="container pillars-grid">
          <div className="pillar-item">
            <svg className="pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="9" />
              <polyline points="12 7 12 12 15 15" />
            </svg>
            <span className="pillar-text">
              15+ años de<br />experiencia
            </span>
          </div>

          <div className="pillar-item">
            <svg className="pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="8" r="4" />
              <path d="M5 20c0-3.8 3.1-7 7-7s7 3.2 7 7" />
            </svg>
            <span className="pillar-text">
              Atención<br />individualizada
            </span>
          </div>

          <div className="pillar-item">
            <svg className="pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="9" cy="7" r="3" />
              <circle cx="16" cy="9" r="2.5" />
              <path d="M3 19c0-3 2.7-5.5 6-5.5s6 2.5 6 5.5" />
              <path d="M14 19c0-2.2 2-4 4.5-4s4.5 1.8 4.5 4" />
            </svg>
            <span className="pillar-text">
              Trabajo con<br />familias
            </span>
          </div>

          <div className="pillar-item">
            <svg className="pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <polyline points="8 12 11 15 16 9" />
            </svg>
            <span className="pillar-text">
              Evaluación y<br />seguimiento
            </span>
          </div>
        </div>
      </section>

      {/* 4. ¿EN QUÉ PODEMOS AYUDARTE? */}
      <section className="help-section">
        <div className="container">
          <h2 className="section-title-teal">¿En qué podemos ayudarte?</h2>

          <div className="cards-grid">
            {/* Tarjeta 1 */}
            <article className="service-card">
              <div className="card-icon-circle bg-teal">
                <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M7 3v7a3 3 0 0 0 6 0V3" />
                  <line x1="10" y1="3" x2="10" y2="21" />
                  <path d="M17 3v18" />
                  <path d="M17 3c2 0 3 2 3 5s-1 4-3 4" />
                </svg>
              </div>
              <h3 className="text-teal">
                Problemas de alimentación de origen sensorial
              </h3>
              <p>Procesos motores y motricidad orofacial.</p>
            </article>

            {/* Tarjeta 2 */}
            <article className="service-card">
              <div className="card-icon-circle bg-blue">
                <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M9.5 4A3.5 3.5 0 0 0 6 7.5c0 .6.15 1.15.4 1.65A3.5 3.5 0 0 0 5 12c0 1.4.8 2.6 2 3.15V17a3 3 0 0 0 3 3h1V4H9.5z" />
                  <path d="M14.5 4A3.5 3.5 0 0 1 18 7.5c0 .6-.15 1.15-.4 1.65A3.5 3.5 0 0 1 19 12c0 1.4-.8 2.6-2 3.15V17a3 3 0 0 1-3 3h-1V4h1.5z" />
                </svg>
              </div>
              <h3 className="text-blue">Desarrollo neuropsicológico</h3>
              <p>
                Evaluación e intervención en procesos cognitivos relacionados
                con el desarrollo.
              </p>
            </article>

            {/* Tarjeta 3 */}
            <article className="service-card">
              <div className="card-icon-circle bg-coral">
                <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 20.5s-7-4.35-7-10a4.2 4.2 0 0 1 7-3.1 4.2 4.2 0 0 1 7 3.1c0 5.65-7 10-7 10z" />
                </svg>
              </div>
              <h3 className="text-coral">Área emocional</h3>
              <p>
                Dificultades en la regulación de emociones y conductas que
                pueden interferir con la vida escolar y la adaptación.
              </p>
            </article>

            {/* Tarjeta 4 */}
            <article className="service-card">
              <div className="card-icon-circle bg-yellow">
                <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="9" r="3" />
                  <circle cx="6.5" cy="11" r="2.2" />
                  <circle cx="17.5" cy="11" r="2.2" />
                  <path d="M7 19c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5" />
                  <path d="M2.5 19c0-1.8 1.5-3.2 3.5-3.2" />
                  <path d="M21.5 19c0-1.8-1.5-3.2-3.5-3.2" />
                </svg>
              </div>
              <h3 className="text-yellow">Relaciones familiares y sociales</h3>
              <p>
                Intervenciones personalizadas y espacios para favorecer la
                generalización de habilidades.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 5. BANNER DE ESTADÍSTICAS */}
      <section className="stats-banner">
        <div className="container stats-grid">
          <div className="stat-box">
            <span className="stat-highlight">+25 200</span>
            <span className="stat-subtext">casos atendidos.</span>
          </div>
          <div className="stat-box">
            <span className="stat-highlight">Experiencia con familias</span>
            <span className="stat-subtext">angloparlantes</span>
          </div>
        </div>
      </section>

      {/* 6. SECCIONES: ¿ES PARA MI HIJO? / ¿ES PARA MI FAMILIAR? */}
      <section className="situations-wrapper">
        <div className="container">
          {/* Bloque 1: ¿Es para mi hijo? */}
          <div className="situation-row">
            <div>
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80"
                alt="Atención neuropsicológica para niños"
                className="situation-image"
              />
            </div>
            <div className="situation-text">
              <h2>
                ¿Es para<br />mi hijo?
              </h2>
              <h4>Has notado alguna de estas situaciones</h4>
              <ul className="situation-list">
                {childSituations.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bloque 2: ¿Es para mi familiar? */}
          <div className="situation-row reverse">
            <div className="situation-text">
              <h2>
                ¿Es para mi<br />familiar?
              </h2>
              <h4>Has notado alguna de estas situaciones:</h4>
              <ul className="situation-list">
                {familySituations.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=800&q=80"
                alt="Acompañamiento terapéutico para adultos y familiares"
                className="situation-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. LLAMADO A LA ACCIÓN FINAL */}
      <section className="bottom-cta">
        <div className="container">
          <h3>
            Si alguna de estas situaciones te resulta familiar, podemos comenzar
            con una valoración integral.
          </h3>
          <Link to="/agendar" className="btn-pill-lg btn-darkblue">
            Agendar Valoración
          </Link>
        </div>

        {/* Marca de agua decorativa de cerebro */}
        <svg className="watermark-brain" viewBox="0 0 200 160" fill="none">
          <path
            d="M45 95C25 95 18 75 28 58C24 40 40 25 58 28C68 14 95 14 108 28C125 16 150 22 158 40C175 48 176 72 162 85C168 102 152 120 132 118C122 132 98 134 86 120L70 148"
            stroke="#3c5499"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </section>
    </main>
  );
}
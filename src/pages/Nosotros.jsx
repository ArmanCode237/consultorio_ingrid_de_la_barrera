export default function Nosotros() {
  const equipo = [
    {
      nombre: 'Mtra. Ingrid De la Barrera',
      foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      align: 'left',
      dot1: 'bg-yellow',
      dot2: 'bg-blue',
      credenciales: [
        'Licenciada en Comunicación Humana por la Universidad de las Américas CDMX (cédula 7318136)',
        'Maestra en Diagnóstico y Rehabilitación Neuropsicológica por la Benemérita Universidad Autónoma de Puebla (cédula 12038917)',
      ],
      parrafos: [
        'Cuenta con una estancia académica en Ourense, España, así como formación continua mediante cursos, talleres y congresos nacionales e internacionales relacionados con Neuropsicología y Comunicación Humana.',
        'Cuenta con más de 15 años de experiencia en el campo clínico, pedagógico y educativo, incluyendo experiencia en inclusión educativa en diversos colegios.',
        'Actualmente combina la supervisión profesional con la práctica clínica, especializándose en Neuropsicología, Lenguaje, Habla y Aprendizaje.',
      ],
      idiomas:
        'Idiomas: Español (lengua materna), Inglés (C1), Alemán (B2), Francés (B2)',
    },
    {
      nombre: 'Romina Sáenz',
      foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
      align: 'right',
      dot1: 'bg-cyan-dot',
      dot2: 'bg-teal',
      credenciales: [
        'Licenciada en Psicología por la Universidad Anáhuac Mayab (cédula 14954090)',
        'Actualmente estudia una maestría en Psicología Clínica para Adultos en la Universidad Autónoma de Yucatán.',
      ],
      parrafos: [
        'Cuenta con experiencia profesional en la práctica privada trabajando con población infantil con trastornos del neurodesarrollo y dificultades para el aprendizaje, implementando planes de intervención que buscan mayor funcionalidad e independencia.',
        'Ha participado en investigaciones con la Asociación Mexicana de Neuropsicología para la normalización de pruebas neuropsicológicas en población mexicana, de igual forma, ha tomado cursos de preparación para la aplicación e interpretación de diversas baterías neuropsicológicas para el diagnóstico y detección temprana en población infantil.',
      ],
      idiomas: 'Idiomas: Español (lengua materna), Inglés (B2)',
    },
    {
      nombre: 'María Fernanda Vieyra',
      foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
      align: 'left',
      dot1: 'bg-cyan-dot',
      dot2: 'bg-yellow',
      credenciales: [
        'Licenciada en Psicopedagogía por la Universidad Anáhuac Mayab, donde también cursó el Máster en Innovación Social.',
      ],
      parrafos: [
        'Cuenta con experiencia en el ámbito educativo y psicopedagógico, trabajando con población infantil, adolescente y adulta. Ha participado en proyectos educativos relacionados con educación inclusiva y ajustes razonables, así como en el acompañamiento a personas con discapacidad intelectual, favoreciendo su inclusión y desarrollo personal y social.',
        'Actualmente brinda acompañamiento psicopedagógico y académico, desarrollando estrategias de aprendizaje personalizadas. Su trabajo comprende áreas como lectoescritura, comprensión lectora, matemáticas, razonamiento, hábitos y técnicas de estudio y funciones ejecutivas.',
      ],
      idiomas: 'Idiomas: Español (lengua materna), Inglés (C1)',
    },
  ];

  const practicaItems = [
    'Persona',
    'Habilidades',
    'Dificultades',
    'Contexto',
    'Demandas del entorno.',
  ];

  return (
    <main>
      {/* HERO SOBRE NOSOTROS */}
      <section className="page-hero bg-coral">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1 className="page-hero-title">Sobre nosotros</h1>
            <p>
              Un equipo interdisciplinario comprometido con el desarrollo
              integral de cada persona.
            </p>
          </div>
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
              alt="Equipo de Neuropsicología"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* PERFILES DEL EQUIPO */}
      <section className="team-section container">
        {equipo.map((miembro, idx) => (
          <div
            key={idx}
            className={`team-member-row ${
              miembro.align === 'right' ? 'reverse' : ''
            }`}
          >
            <div className="team-photo-col">
              <div className="team-avatar-wrapper">
                <span className={`avatar-dot dot-top ${miembro.dot1}`} />
                <img
                  src={miembro.foto}
                  alt={miembro.nombre}
                  className="team-avatar"
                />
                <span className={`avatar-dot dot-bottom ${miembro.dot2}`} />
              </div>
            </div>

            <div className="team-info-col">
              <h2>{miembro.nombre}</h2>
              <ul className="team-credentials">
                {miembro.credenciales.map((cred, i) => (
                  <li key={i}>•{cred}</li>
                ))}
              </ul>
              {miembro.parrafos.map((p, i) => (
                <p key={i} className="team-bio-p">
                  {p}
                </p>
              ))}
              <p className="team-languages">{miembro.idiomas}</p>
            </div>
          </div>
        ))}
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="mision-vision-section container">
        <div className="mv-wrapper">
          <div className="mv-circle mision-circle">
            <h3>Misión</h3>
            <p>
              Brindar una atención integral y personalizada que favorezca el
              desarrollo, bienestar y participación de personas con dificultades
              en áreas como atención, lenguaje, habla, memoria, emociones y
              otras áreas clave de su desarrollo.
            </p>
          </div>

          <div className="mv-circle vision-circle">
            <h3>Visión</h3>
            <p>
              Ser un centro de referencia en atención neuropsicológica y de
              educación especial a nivel nacional.
            </p>
          </div>
        </div>
      </section>

      {/* BANNER DE VALORES */}
      <section className="valores-banner bg-coral">
        <div className="container valores-cloud">
          <span className="valor-item v1">Optimismo</span>
          <span className="valor-item v2">Esperanza</span>
          <span className="valor-item v3">Seguridad</span>
          <span className="valor-item v4">Confianza</span>
        </div>
      </section>

      {/* ENFOQUE TEÓRICO Y EN LA PRÁCTICA */}
      <section className="enfoque-section container">
        <div className="enfoque-grid">
          <div className="enfoque-teorico">
            <h2>Enfoque Teórico</h2>
            <p>
              El trabajo está fundamentado en la escuela Histórico-Cultural
              rusa, desarrollada a partir de los aportes de Vigotsky y ampliada
              posteriormente por Luria, Leontiev, Galperin y Tsvetkova, a través
              de la teoría de la actividad.
            </p>
            <p>
              Este enfoque considera que el desarrollo psicológico se construye
              en interacción con el entorno cultural y social.
            </p>
          </div>

          <div className="enfoque-practica">
            <h2>En la práctica:</h2>
            <ul className="practica-list">
              {practicaItems.map((item, idx) => (
                <li key={idx}>
                  <span>{item}</span>
                  {idx < practicaItems.length - 1 && (
                    <span className="plus-sign">+</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
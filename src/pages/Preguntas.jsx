import { Link } from 'react-router-dom';

export default function Preguntas() {
  const testimonios = [
    {
      caso: 'Caso 1',
      texto:
        'Nuestra experiencia en la terapia ha sido sumamente positiva. Al inicio teníamos inquietud sobre cómo se adaptaría, pero desde el primer día encontramos un espacio de gran calidez, respeto y seguridad, y siempre entra con entusiasmo. Hemos visto avances importantes, especialmente en una pronunciación más clara de palabras y en aprender a esperar para expresar lo que necesita, lo que también nos ha ayudado en casa. ¡La recomendamos totalmente!',
    },
    {
      caso: 'Caso 2',
      texto:
        'Un agradecimiento de todo corazón a la Lic. Ingrid De la Barrera y a su equipo por los resultados de la valoración. Gracias a su profesionalismo, hoy tenemos el diagnóstico certero que tanto buscábamos para ayudar a mi hija. Excelente trato, paciencia e instalaciones. 100% recomendada por su entrega y gran ética profesional.',
    },
    {
      caso: 'Caso 3',
      texto:
        'Agradezco grandemente el profesionalismo y calidez de la Mtra. Ingrid De la Barrera y su equipo en el proceso de evaluación diagnóstica de mi hijo. Desde la primera entrevista nos sentimos escuchados y comprendidos, y el informe final nos dio una guía clara sobre cómo apoyarlo en casa y en la escuela. Sin duda un espacio confiable y humano.',
    },
    {
      caso: 'Caso 4',
      texto:
        'Mi hijo ha avanzado muchísimo desde que inició sus sesiones de lenguaje y aprendizaje. Antes se frustraba al no poder comunicarse o seguir el ritmo escolar, pero ahora participa con mayor seguridad y entusiasmo. El trato hacia él y la retroalimentación que nos brindan cada sesión han marcado una gran diferencia.',
    },
    {
      caso: 'Caso 5',
      texto:
        'Excelente atención en el área de estimulación cognitiva y neuropsicología. Nos explicaron con mucha claridad cada etapa de la valoración y los objetivos del plan de intervención. Se nota la preparación y vocación de todo el equipo terapéutico.',
    },
    {
      caso: 'Caso 6',
      texto:
        'Llegamos buscando apoyo en terapia de lenguaje y encontramos un acompañamiento integral. Las estrategias que nos comparten al finalizar cada sesión nos han permitido reforzar en casa todo lo que trabaja en consulta. Estamos muy agradecidos con sus avances.',
    },
    {
      caso: 'Caso 7',
      texto:
        'Nuestra experiencia con la terapeuta ha sido excelente; su metodología lúdica hace que mi hijo disfrute cada sesión mientras desarrolla habilidades de atención, organización y regulación emocional. Hemos notado cambios muy favorables tanto en casa como en el colegio.',
    },
    {
      caso: 'Caso 8',
      texto:
        'Muy recomendable. La valoración neuropsicológica fue muy completa y detallada, permitiéndonos entender las fortalezas y áreas de oportunidad de nuestra hija para trabajar en conjunto con su escuela.',
    },
    {
      caso: 'Caso 9',
      texto:
        'El acompañamiento familiar y la calidez humana distinguen a este centro. Nos han guiado paso a paso con mucha empatía y profesionalismo, logrando avances constantes en la autonomía y comunicación de nuestro hijo.',
    },
  ];

  return (
    <main>
      {/* HERO PREGUNTAS FRECUENTES */}
      <section className="page-hero bg-yellow">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1 className="page-hero-title">
              Preguntas<br />Frecuentes
            </h1>
          </div>
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
              alt="Preguntas frecuentes"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* BLOQUE 1: DURACIÓN, COSTOS Y FORMAS DE PAGO */}
      <section className="faq-section container">
        <div className="faq-row">
          <div className="faq-questions-col">
            <div className="faq-item">
              <h3>¿Cuánto dura una sesión?</h3>
              <p>
                50 minutos de terapia y 10 minutos de retroalimentación con
                padres o cuidadores.
              </p>
            </div>

            <div className="faq-item">
              <h3>¿Qué costo tiene?</h3>
              <p>
                •Sesiones de entrevista inicial y valoración: $1060 MXN cada
                una. IVA incluido.
              </p>
              <p>
                •Sesiones de intervención terapéutica: $800 MXN cada una. IVA
                incluido.
              </p>
            </div>

            <div className="faq-item">
              <h3>¿Cuáles son las formas de pago?</h3>
              <p>Paypal, transferencia interbancaria y efectivo.</p>
            </div>
          </div>

          <div className="faq-decor-col">
            <div className="circle-cluster">
              <span className="c-main-yellow" />
              <span className="c-sub-blue" />
              <span className="c-sub-teal" />
              <span className="c-sub-coral" />
            </div>
          </div>
        </div>

        {/* POLÍTICAS DE CANCELACIÓN Y REPROGRAMACIÓN */}
        <div className="faq-policies-intro">
          <h3>¿Cuáles son las políticas de cancelación y reprogramación?</h3>
          <p>
            Nuestros horarios de atención son únicamente con cita previa.
            Contamos con espacios limitados y organizamos cuidadosamente la
            agenda para brindar una atención puntual, personalizada y de
            calidad. Debido a que su tiempo y el nuestro son valiosos,
            compartimos nuestra política de confirmación, cancelación,
            reprogramación y ausencias.
          </p>
          <p>
            Estas medidas nos permiten mantener una atención eficiente, respetar
            el tiempo de todos los pacientes y asegurar disponibilidad a quienes
            más lo necesitan.
          </p>
        </div>

        <div className="policies-grid-wrapper">
          <div className="policies-center-dot" />
          <div className="policies-grid">
            <div className="policy-card">
              <h4>CONFIRMACIÓN OBLIGATORIA:</h4>
              <p>
                Para asegurar su espacio, todas las citas deberán pagarse con
                anticipación y confirmarse con un mínimo de 24 horas de
                anticipación. Una vez enviado el mensaje de confirmación, será
                necesario responder dentro de las próximas 5 horas. De no
                recibirse confirmación dentro de este plazo, la cita será
                cancelada automáticamente y el horario podrá asignarse a otro
                paciente.
              </p>
            </div>

            <div className="policy-card">
              <h4>REPROGRAMACIÓN O CANCELACIÓN:</h4>
              <p>
                Si necesita cancelar o reprogramar su cita, le pedimos hacerlo
                con al menos 24 horas de anticipación. Los cambios realizados
                con menos de 24 horas generan un cargo del 50% del costo de la
                consulta, el cual deberá cubrirse antes de agendar una nueva
                cita.
              </p>
            </div>

            <div className="policy-card">
              <h4>AUSENCIAS (&quot;NO SHOW&quot;):</h4>
              <p>
                Cuando un paciente no se presenta a su cita agendada sin previo
                aviso, ya que el espacio y el terapeuta fueron reservados para
                esa sesión, deberá cubrirse el 100% del costo de la consulta no
                asistida.
              </p>
            </div>

            <div className="policy-card">
              <h4>RETARDOS:</h4>
              <p>
                Contamos con un tiempo de tolerancia de 15 minutos. Pasado este
                lapso, no será posible brindar la sesión y se aplicará el mismo
                criterio de ausencia sin aviso. Esto busca respetar el tiempo de
                los demás pacientes y mantener la puntualidad en la agenda.
              </p>
            </div>
          </div>
        </div>

        {/* BLOQUE 2: MODALIDAD, FRECUENCIA Y VALORACIÓN */}
        <div className="faq-row reverse">
          <div className="faq-decor-col">
            <div className="circle-cluster">
              <span className="c-main-yellow" />
              <span className="c-sub-blue" />
              <span className="c-sub-teal" />
              <span className="c-sub-coral" />
            </div>
          </div>

          <div className="faq-questions-col">
            <div className="faq-item">
              <h3>¿Las sesiones son únicamente presenciales?</h3>
              <p>
                Las sesiones de valoración sí. Las entrevistas iniciales y las
                sesiones de intervención terapéutica pueden realizarse en línea
                (por plataformas de zoom o meet).
              </p>
            </div>

            <div className="faq-item">
              <h3>¿Con qué frecuencia se realizan las terapias?</h3>
              <p>
                La frecuencia se determina de acuerdo con las necesidades de
                cada persona, el programa puede contemplar 1-2 sesiones
                semanales.
              </p>
            </div>

            <div className="faq-item">
              <h3>¿Primero tengo que realizar una valoración?</h3>
              <p>
                Cuando se requiere determinar necesidades específicas de
                intervención, se realiza una valoración integral antes de
                diseñar el programa terapéutico.
              </p>
            </div>
          </div>
        </div>

        {/* BLOQUE 3: SESIONES INDIVIDUALES, PADRES Y AVANCES */}
        <div className="faq-bottom-questions">
          <div className="faq-item">
            <h3>¿Las sesiones son individuales?</h3>
            <p>
              Sí. También pueden utilizarse sesiones grupales cuando son
              adecuadas para favorecer la generalización de habilidades.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Trabajan con padres?</h3>
            <p>
              Sí. El acompañamiento y orientación a padres forma parte del
              modelo de trabajo.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Cada cuánto se revisan los avances?</h3>
            <p>
              Se propone una reevaluación aproximadamente cada seis meses para
              valorar avances y realizar ajustes al programa.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="testimonios-section container">
        <h2 className="section-heading-blue">Testimonios</h2>
        <div className="testimonios-list">
          {testimonios.map((t, idx) => (
            <article key={idx} className="testimonio-card">
              <h5>{t.caso}</h5>
              <p>{t.texto}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bottom-cta">
        <div className="container">
          <h3>
            Si quieres empezar con tu sesión,<br />
            podemos comenzar con tu valoración.
          </h3>
          <Link to="/agendar" className="btn-pill-lg btn-darkblue">
            Agendar Valoración
          </Link>
        </div>
      </section>
    </main>
  );
}
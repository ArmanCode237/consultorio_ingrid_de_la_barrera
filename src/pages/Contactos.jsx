import { Link } from 'react-router-dom';

export default function Contactos() {
  return (
    <main>
      {/* HERO CONTÁCTANOS */}
      <section className="page-hero bg-blue">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1 className="page-hero-title">Contáctanos</h1>
          </div>
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
              alt="Contáctanos"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* HORARIOS Y REDES DE CONTACTO */}
      <section className="contact-body-section container">
        <div className="horarios-block">
          <h2>Horarios</h2>
          <p>Lunes a Viernes - 10:00 AM a 8:00 PM</p>
          <p>Sábados - 9:00 AM a 2:00 PM</p>
          <p className="previa-cita">Solo con previa cita.</p>
        </div>

        <div className="contact-channels-block">
          <h2>
            Contactanos a<br />
            traves de...
          </h2>

          <ul className="contact-channels-list">
            <li>
              <a href="https://wa.me/" target="_blank" rel="noreferrer">
                <span className="channel-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </span>
                <span>WhatsApp</span>
              </a>
            </li>

            <li>
              <a href="mailto:contacto@ingriddelabarrera.com">
                <span className="channel-icon dark-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                </span>
                <span>Correo</span>
              </a>
            </li>

            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <span className="channel-icon dark-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff">
                    <path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </span>
                <span>Facebook</span>
              </a>
            </li>

            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <span className="channel-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </span>
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bottom-cta">
        <div className="container">
          <h3>Agenda tu valoracion para comenzar...</h3>
          <Link to="/agendar" className="btn-pill-lg btn-darkblue">
            Agendar Valoración
          </Link>
        </div>
      </section>
    </main>
  );
}
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Columna 1: Sello circular */}
        <div className="footer-seal">
          <svg width="130" height="130" viewBox="0 0 140 140" fill="none">
            <defs>
              <path
                id="circlePath"
                d="M 70, 70 m -54, 0 a 54,54 0 1,1 108,0 a 54,54 0 1,1 -108,0"
              />
            </defs>
            <text fill="#ffffff" fontSize="6.5" fontWeight="600" letterSpacing="1.1">
              <textPath href="#circlePath" startOffset="5%">
                NEUROPSICOLOGÍA Y EDUCACIÓN ESPECIAL
              </textPath>
            </text>
            {/* Ícono de cerebro lineal central */}
            <path
              d="M52 72C44 72 40 65 43 58C41 51 47 45 54 46C58 40 68 40 73 45C79 40 89 42 92 49C98 52 99 61 94 66C96 73 90 80 82 79C79 84 70 85 66 80L60 92"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="62" cy="58" r="2" fill="#ffffff" />
            <circle cx="76" cy="56" r="2" fill="#ffffff" />
            <circle cx="70" cy="68" r="2" fill="#ffffff" />
            <path d="M62 58L76 56L70 68Z" stroke="#ffffff" strokeWidth="1.2" />
          </svg>
        </div>

        {/* Columna 2: Conoce más sobre */}
        <div className="footer-col">
          <h4>Conoce más sobre:</h4>
          <ul className="footer-links">
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/nosotros">A quiénes ayudamos</Link></li>
            <li><Link to="/servicios">Estimulación cognitiva</Link></li>
            <li><Link to="/servicios">Taller de emociones</Link></li>
            <li><Link to="/servicios">Terapia de alimentación</Link></li>
          </ul>
        </div>

        {/* Columna 3: Información y redes */}
        <div className="footer-col">
          <h4>Información:</h4>
          <ul className="social-list">
            <li>
              <span>💬</span>
              <a href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp</a>
            </li>
            <li>
              <span>✉️</span>
              <a href="mailto:contacto@ingriddelabarrera.com">Correo</a>
            </li>
            <li>
              <span>📘</span>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            </li>
            <li>
              <span>📸</span>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            </li>
          </ul>
        </div>

        {/* Columna 4: Botón Agendar + Ubicación */}
        <div className="footer-cta-col">
          <Link to="/agendar" className="btn-footer-agendar">
            Agendar
          </Link>
          <p className="footer-address">
            Ubicación: Calle 1E diagonal no. 256 col. Fracc del Norte, CP 97120
            Mérida, Yucatán, México
          </p>
        </div>
      </div>
    </footer>
  );
}
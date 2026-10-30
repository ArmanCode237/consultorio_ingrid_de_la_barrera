import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Nosotros from './pages/Nosotros';
import Preguntas from './pages/Preguntas';
import Contactos from './pages/Contactos';
import AgendarCita from './pages/AgendarCita';
import './animations.css';

function ScrollAndAnimateController() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Selectores que se animarán al entrar en pantalla
    const fadeUpSelectors = [
      '.pillar-item',
      '.service-card',
      '.stat-box',
      '.situation-row',
      '.pilar-photo-card',
      '.modalidades-grid',
      '.team-member-row',
      '.valor-item',
      '.enfoque-grid > div',
      '.faq-item',
      '.policy-card',
      '.testimonio-card',
      '.horarios-block',
      '.contact-channels-block',
      '.bottom-cta h3',
      '.bottom-cta .btn-pill-lg',
    ];

    const zoomSelectors = ['.model-step', '.mv-circle', '.agendar-card'];
    const leftSelectors = ['.service-strip-card.icon-right'];
    const rightSelectors = ['.service-strip-card.icon-left'];

    const assignClass = (selectors, className) => {
      document.querySelectorAll(selectors.join(',')).forEach((el) => {
        el.classList.add(className);
      });
    };

    assignClass(fadeUpSelectors, 'reveal-item');
    assignClass(zoomSelectors, 'reveal-zoom');
    assignClass(leftSelectors, 'reveal-left');
    assignClass(rightSelectors, 'reveal-right');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' }
    );

    const allAnimated = document.querySelectorAll(
      '.reveal-item, .reveal-zoom, .reveal-left, .reveal-right'
    );
    allAnimated.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollAndAnimateController />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/preguntas" element={<Preguntas />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/agendar" element={<AgendarCita />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
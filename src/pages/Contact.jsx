import { CalendarDays, Clock3, MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { HeroBanner, PrimaryLink, SocialLinks } from '../components/Layout';
import { address } from '../data/content';
import hero from '../assets/hero-contact.webp';

export default function Contact() {
  return <>
    <HeroBanner color="blue" title="Contáctanos" subtitle="Nos encantará conocerte y ayudarte a dar el primer paso." image={hero} alt="Actividad con familias en una reunión informativa" />
    <section className="contact-section pattern-bg"><div className="container contact-grid"><article className="contact-panel"><div className="contact-panel-icon"><Clock3 size={33} /></div><span className="eyebrow">Te esperamos</span><h2>Horarios</h2><p><strong>Lunes a viernes</strong><span>10:00 a. m. – 8:00 p. m.</span></p><p><strong>Sábados</strong><span>Horario por confirmar</span></p><div className="time-notice"><CheckCircle2 size={18}/> Solo con previa cita</div><p className="contact-small">El horario de sábado figura de forma inconsistente en el diseño original y está pendiente de confirmación.</p></article>
      <article className="contact-panel contact-panel-secondary"><div className="contact-panel-icon green-icon"><CalendarDays size={33}/></div><span className="eyebrow">Hablemos</span><h2>Contáctanos a través de…</h2><SocialLinks dark/><p className="contact-small">Los enlaces a redes, WhatsApp y correo se habilitan al configurar sus datos reales en el proyecto.</p></article></div>
      <div className="container location-panel"><div><span className="eyebrow">Dónde encontrarnos</span><h2>Estamos en Mérida, Yucatán</h2><p><MapPin size={21}/>{address}</p></div><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer" className="pill pill-outline">Ver ubicación <ArrowUpRight size={18}/></a></div>
    </section>
    <section className="contact-callout pattern-bg"><div className="container"><span className="eyebrow">Estamos para acompañarte</span><h2>Agenda tu valoración para comenzar…</h2><p>Cuéntanos qué necesitas y preparemos juntos el siguiente paso.</p><PrimaryLink>Agendar valoración <ArrowUpRight size={20}/></PrimaryLink></div></section>
  </>;
}

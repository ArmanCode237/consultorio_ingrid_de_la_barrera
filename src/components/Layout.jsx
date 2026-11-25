import { useEffect, useState } from 'react';
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';
import { BrainCircuit, Menu, X, ArrowRight, MapPin, Mail, Instagram, Facebook, MessageCircle, Clock3 } from 'lucide-react';
import { address, contact, navigation } from '../data/content';

export function Logo({ inverse = false }) {
  return (
    <Link aria-label="Ingrid de la Barrera - inicio" className={`logo ${inverse ? 'logo-inverse' : ''}`} to="/">
      <span className="logo-line">Ingrid <small>De la</small></span>
      <span className="logo-line logo-last">Barrera</span>
      <span className="logo-subtitle">Neuropsicología y Educación Especial</span>
    </Link>
  );
}

export function PrimaryLink({ children, to = '/agendar', variant = 'blue', className = '' }) {
  return <Link to={to} className={`pill pill-${variant} ${className}`}>{children}</Link>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav id="primary-navigation" className={`navigation ${open ? 'navigation-open' : ''}`} aria-label="Navegación principal">
          {navigation.map(item => <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link ${isActive ? 'nav-active' : ''}`}>{item.label}</NavLink>)}
          <PrimaryLink className="mobile-booking">Agendar cita</PrimaryLink>
        </nav>
        <PrimaryLink className="desktop-booking">Agendar cita <ArrowRight size={16} /></PrimaryLink>
        <button type="button" className="mobile-menu" aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(v => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

export function SocialLinks({ dark = false }) {
  const items = [
    { label: 'WhatsApp', icon: MessageCircle, href: contact.whatsapp ? `https://wa.me/${contact.whatsapp}` : '' },
    { label: 'Correo', icon: Mail, href: contact.email ? `mailto:${contact.email}` : '' },
    { label: 'Facebook', icon: Facebook, href: contact.facebook },
    { label: 'Instagram', icon: Instagram, href: contact.instagram },
  ];
  return <div className={`social-links ${dark ? 'social-dark' : ''}`}>{items.map(({ label, icon: Icon, href }) => href ?
    <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}><Icon size={19} aria-hidden /> {label}</a>
    : <span key={label} className="social-unconfigured" title="Enlace de contacto pendiente de configuración"><Icon size={19} aria-hidden /> {label}</span>
  )}</div>;
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-identity"><div className="footer-emblem"><BrainCircuit size={55} strokeWidth={1.3} /><span>NEUROPSICOLOGÍA Y EDUCACIÓN ESPECIAL</span></div><p>Un espacio para aprender, crecer y desarrollar nuevas posibilidades.</p></div>
        <div className="footer-col"><h3>Conoce más sobre</h3><Link to="/servicios">Servicios</Link><Link to="/nosotros#enfoque">Nuestro enfoque</Link><Link to="/servicios#modelo">Cómo trabajamos</Link><Link to="/nosotros">Sobre nosotros</Link><Link to="/preguntas">Preguntas frecuentes</Link></div>
        <div className="footer-col"><h3>Información</h3><SocialLinks /></div>
        <div className="footer-action"><PrimaryLink variant="cyan">Agendar</PrimaryLink><p><MapPin size={16} aria-hidden />{address}</p><p className="footer-hours"><Clock3 size={15} /> Atención solo con previa cita</p></div>
      </div>
      <div className="footer-bottom container">© {new Date().getFullYear()} Ingrid de la Barrera. Diseño basado en las mesas de trabajo originales.</div>
    </footer>
  );
}

export function HeroBanner({ title, subtitle, image, color = 'cyan', alt = '' }) {
  return <section className={`hero-banner hero-${color}`}><div className="container hero-content">
    <div className="hero-heading"><span className="eyebrow light">Atención integral · Mérida, Yucatán</span><h1>{title}</h1>{subtitle && <p>{subtitle}</p>}</div>
    <div className="hero-media"><img src={image} alt={alt} /></div>
  </div></section>;
}

export function CTASection({ title = 'Si alguna de estas situaciones te resulta familiar, podemos comenzar con una valoración integral.', button = 'Agendar valoración' }) {
  return <section className="cta-section pattern-bg"><div className="container cta-inner"><div className="cta-micro">El primer paso es conocernos</div><h2>{title}</h2><PrimaryLink>{button} <ArrowRight size={20} /></PrimaryLink></div></section>;
}

export default function Layout() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = `${({ '/': 'Inicio', '/servicios': 'Servicios', '/nosotros': 'Nosotros', '/preguntas': 'Preguntas frecuentes', '/contacto': 'Contacto', '/agendar': 'Agendar cita' })[pathname] || 'Página no encontrada'} | Ingrid de la Barrera`;
    if (hash) {
      const timeout = window.setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 60);
      return () => window.clearTimeout(timeout);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);
  return <><Header /><main id="contenido"><Outlet /></main><Footer /></>;
}

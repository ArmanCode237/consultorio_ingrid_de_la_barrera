import { ArrowUpRight, CalendarClock, ClipboardCheck, Clock3, UsersRound } from 'lucide-react';
import { HeroBanner, PrimaryLink, CTASection } from '../components/Layout';
import StrengthsCarousel from '../components/StrengthsCarousel';
import { childSigns, familySigns, strengths } from '../data/content';
import hero from '../assets/hero-home.webp';
import child from '../assets/therapy-child.webp';
import family from '../assets/family-support.webp';

const Stats = () => <section className="stats-band"><div className="container stats-grid">
  {[
    { icon: Clock3, top: '15+ años de', bottom: 'experiencia' },
    { icon: CalendarClock, top: 'Atención', bottom: 'individualizada' },
    { icon: UsersRound, top: 'Trabajo con', bottom: 'familias' },
    { icon: ClipboardCheck, top: 'Evaluación y', bottom: 'seguimiento' },
  ].map(({ icon: Icon, top, bottom }) => <div key={bottom} className="stat"><Icon size={42} strokeWidth={1.25} /><span>{top}<strong>{bottom}</strong></span></div>)}
</div></section>;

function Signs({ title, items, image, alt, flipped = false }) {
  return <section className={`container signs-section ${flipped ? 'signs-flipped' : ''}`}>
    <div className="signs-image"><img src={image} alt={alt} loading="lazy" /></div>
    <div className="signs-copy"><span className="eyebrow">Acompañamiento cercano</span><h2>{title}</h2><ul>{items.map(t => <li key={t}>{t}</li>)}</ul></div>
  </section>;
}

export default function Home() {
  return <>
    <HeroBanner color="cyan" title="Neuropsicología y Educación Especial para favorecer el desarrollo integral del ser humano." subtitle="Un espacio terapéutico para el habla, aprendizaje y regulación emocional, donde cada intervención se diseña de acuerdo con las necesidades de cada persona." image={hero} alt="Espacio terapéutico acogedor con materiales y juguetes para el aprendizaje" />
    <section className="home-actions container"><PrimaryLink variant="yellow">Agendar cita <ArrowUpRight size={22} /></PrimaryLink><PrimaryLink variant="cyan" to="/servicios">Nuestros servicios <ArrowUpRight size={22} /></PrimaryLink></section>
    <Stats />
    <section className="what-we-do pattern-bg"><div className="container"><div className="center-title"><span className="eyebrow">Estamos aquí para ti</span><h2>¿En qué podemos ayudarte?</h2></div><StrengthsCarousel items={strengths} /></div></section>
    <section className="big-numbers"><div className="container big-numbers-inner"><p><strong>+25,200</strong><span>casos atendidos.</span></p><p><strong>Experiencia con familias</strong><span>angloparlantes.</span></p></div></section>
    <div className="pattern-bg signs-background">
      <Signs title="¿Es para mi hijo?" items={childSigns} image={child} alt="Terapeuta realizando una actividad con una niña" />
      <Signs title="¿Es para mi familiar?" items={familySigns} image={family} alt="Acompañamiento emocional y familiar durante una sesión" flipped />
    </div>
    <CTASection />
  </>;
}

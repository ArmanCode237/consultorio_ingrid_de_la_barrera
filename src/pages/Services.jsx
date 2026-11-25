import { ArrowRight, UsersRound, ToyBrick, HandHeart } from 'lucide-react';
import { HeroBanner, CTASection } from '../components/Layout';
import { services, workSteps } from '../data/content';
import hero from '../assets/hero-services.webp';
import play from '../assets/pillar-activities.webp';
import group from '../assets/pillar-individual.webp';
import family from '../assets/pillar-family.webp';

export default function Services() {
  const pillars = [
    { title: 'Aprender jugando', description: 'Actividades lúdicas y significativas.', image: play, icon: ToyBrick, alt: 'Material didáctico y juego guiado' },
    { title: 'Trabajo individual y grupal', description: 'Desarrollo individual y generalización de habilidades.', image: group, icon: UsersRound, alt: 'Actividades de aprendizaje utilizando materiales visuales' },
    { title: 'Acompañamiento familiar', description: 'Orientación a padres y cuidadores.', image: family, icon: HandHeart, alt: 'Niño realizando una actividad de coordinación en sesión' },
  ];
  return <>
    <HeroBanner color="green" title="Servicios" subtitle="Cada persona es única. Nuestro enfoque también." image={hero} alt="Consultorio preparado para valoración y actividades terapéuticas" />
    <section className="container service-list pattern-bg-inner"><div className="section-intro"><span className="eyebrow">Áreas de atención</span><h2>Un acompañamiento que se adapta a ti</h2><p>Atendemos distintas áreas del desarrollo, el aprendizaje y el bienestar emocional a través de un trabajo personalizado.</p></div>
      {services.map(({ title, icon: Icon, text }, i) => <article key={title} className={`service-row ${i % 2 ? 'service-row-reverse' : ''}`}><div className="service-icon"><Icon size={57} strokeWidth={1.25} /></div><div className="service-body"><h3>{title}</h3><p>{text}</p></div></article>)}
    </section>
    <section className="process-section pattern-bg" id="modelo"><div className="container"><div className="center-title"><span className="eyebrow">Nuestro método</span><h2>Nuestro modelo de trabajo</h2><p>Un proceso claro, con objetivos compartidos y seguimiento constante.</p></div>
      <div className="steps-grid">{workSteps.map(({ num, title, accent, description, icon: Icon }, i) => <article className="step-card" key={num}><span className="step-number">{num}</span><Icon size={52} strokeWidth={1.2} /><h3>{title}</h3><strong>{accent}</strong><p>{description}</p>{i<2 && <span className="step-arrow" aria-hidden="true"><ArrowRight /></span>}</article>)}</div>
    </div></section>
    <section className="container pillars-section"><div className="center-title"><span className="eyebrow">Lo que nos guía</span><h2>Nuestros pilares</h2></div><div className="pillars-grid">{pillars.map(({ title, description, image, alt }) => <article className="pillar-card" key={title}><img src={image} alt={alt} loading="lazy" /><div className="pillar-copy"><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>
    <section className="container approaches-section"><div className="approaches-title"><h2>Individual,<br/>grupal y<br/>familiar<span>.</span></h2></div><div className="approaches-copy"><p><strong>Sesiones individuales:</strong> trabajo personalizado y objetivos específicos.</p><p><strong>Sesiones grupales:</strong> práctica, interacción y generalización de habilidades.</p><p><strong>Familia:</strong> orientación para favorecer la continuidad del proceso fuera de las sesiones.</p><p className="highlight">Nuestro objetivo final es que las habilidades puedan utilizarse en situaciones escolares, familiares y sociales.</p></div></section>
    <CTASection title="Encontrar el apoyo adecuado comienza con una valoración integral." />
  </>;
}

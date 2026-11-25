import { useState } from 'react';
import { ChevronDown, MessageSquareQuote, ArrowRight } from 'lucide-react';
import { HeroBanner, CTASection } from '../components/Layout';
import { faqs, policies } from '../data/content';
import testimonials from '../data/testimonials.json';
import hero from '../assets/hero-faq.webp';

function Accordion({ question, answer, index }) {
  const [open, setOpen] = useState(index < 3);
  return <article className={`faq-item ${open ? 'faq-open' : ''}`}>
    <h3><button type="button" aria-expanded={open} onClick={() => setOpen(v => !v)}>{question}<ChevronDown size={20} /></button></h3>
    {open && <div className="faq-answer"><p>{answer}</p></div>}
  </article>;
}

function Testimonial({ item }) {
  const [open, setOpen] = useState(false);
  const long = item.text.length > 260;
  return <article className="testimonial-card"><div className="testimonial-heading"><span className="quote-circle"><MessageSquareQuote size={18} /></span><strong>{item.name}</strong></div><p>{long && !open ? item.text.slice(0, 260).trimEnd() + '…' : item.text}</p>{long && <button type="button" className="text-button" onClick={() => setOpen(v => !v)}>{open ? 'Leer menos' : 'Leer testimonio completo'} <ArrowRight size={14} /></button>}</article>;
}

export default function FAQ() {
  const [allTestimonials, setAllTestimonials] = useState(false);
  return <>
    <HeroBanner color="yellow" title="Preguntas frecuentes" subtitle="Resolvemos tus dudas para que puedas comenzar con confianza." image={hero} alt="Espacio de espera y atención del consultorio" />
    <section className="container faq-section pattern-bg-inner"><div className="section-intro"><span className="eyebrow">Información útil</span><h2>Preguntas frecuentes</h2><p>Conoce cómo son nuestras sesiones, las opciones de atención y los pasos para iniciar.</p></div>
      <div className="faq-layout"><div className="faq-list">{faqs.map((item, i) => <Accordion key={item.question} {...item} index={i} />)}</div><aside className="faq-side"><div className="color-dots"><span/><span/><span/></div><h3>Tu proceso comienza con una conversación.</h3><p>Estamos aquí para escucharte, conocer tus necesidades y orientarte sobre el primer paso.</p><a href="#politicas" className="inline-arrow">Conoce nuestras políticas <ArrowRight size={17} /></a></aside></div>
    </section>
    <section className="policies-section pattern-bg" id="politicas"><div className="container"><div className="center-title"><span className="eyebrow">Antes de tu consulta</span><h2>Políticas de citas</h2><p>La atención es únicamente con cita previa. Estas medidas nos ayudan a respetar el tiempo de todas las personas y a mantener la disponibilidad de nuestros servicios.</p></div><div className="policies-grid">{policies.map((p,i)=><article key={p.title} className="policy-card"><div className="policy-number">0{i+1}</div><h3>{p.title}</h3><p>{p.text}</p></article>)}</div></div></section>
    <section className="container testimonials-section"><div className="center-title"><span className="eyebrow">Historias compartidas</span><h2>Testimonios</h2><p>Experiencias de familias y personas que nos han permitido acompañar su proceso.</p></div><div className="testimonials-grid">{testimonials.slice(0, allTestimonials ? undefined : 6).map((t,i)=><Testimonial key={`${t.name}-${i}`} item={t}/>)}</div>{testimonials.length>6&&<div className="testimonials-more"><button type="button" className="pill pill-outline" onClick={() => setAllTestimonials(v=>!v)}>{allTestimonials ? 'Mostrar menos testimonios' : `Ver los ${testimonials.length} testimonios`} <ArrowRight size={18}/></button></div>}</section>
    <CTASection title="Si quieres empezar con tu sesión, podemos comenzar con tu valoración." />
  </>;
}

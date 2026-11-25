import { HeroBanner, CTASection } from '../components/Layout';
import hero from '../assets/hero-about.webp';
import ingrid from '../assets/ingrid.webp';
import neftali from '../assets/neftali.webp';
import maria from '../assets/maria.webp';

const people = [
  {
    name: 'Mtra. Ingrid de la Barrera', photo: ingrid, alt: 'Retrato de Ingrid de la Barrera',
    credentials: ['Licenciada en Comunicación Humana por la Universidad de las Américas CDMX.', 'Maestra en Diagnóstico y Rehabilitación Neuropsicológica por la Benemérita Universidad Autónoma de Puebla.'],
    bio: ['Cuenta con una estancia académica en CIREN, Cuba, así como formación continua en neuropsicología y comunicación humana.', 'Tiene más de 15 años de experiencia en el campo clínico, pedagógico y educativo, incluyendo experiencia en inclusión educativa.', 'Combina la supervisión profesional con la práctica clínica en neuropsicología, lenguaje, habla y aprendizaje.'],
    languages: 'Español (lengua materna), inglés (C1), alemán (B2), francés (B2).',
  },
  {
    name: 'Neftali Gristell Moo', photo: neftali, alt: 'Retrato de Neftali Gristell Moo',
    credentials: ['Licenciada en Educación Especial en el área Auditiva y Lenguaje por la Escuela Normal de Educación Especial de Calkiní, Campeche.', 'Estudios de maestría en Educación en la IES IBAI.'],
    bio: ['Ha cursado formación sobre la psicoterapia de juego para el manejo de dificultades emocionales en niños.', 'Cuenta con 10 años de experiencia en terapia de lenguaje dentro del ámbito gubernamental y educativo.', 'Tiene conocimientos básicos en enseñanza de Lengua de Señas Mexicana y lectoescritura infantil.'],
    languages: 'Español (lengua materna), inglés (B2).',
  },
  {
    name: 'María Fernanda Vieyra', photo: maria, alt: 'Retrato de María Fernanda Vieyra',
    credentials: ['Licenciada en Psicopedagogía por la Universidad Anáhuac Mayab, donde también cursó el Máster en Innovación Social.'],
    bio: ['Cuenta con experiencia educativa y psicopedagógica con población infantil, adolescente y adulta, incluyendo inclusión educativa y acompañamiento a personas con discapacidad intelectual.', 'Desarrolla estrategias de aprendizaje personalizadas en lectoescritura, comprensión lectora, razonamiento matemático, hábitos de estudio y funciones ejecutivas.'],
    languages: 'Español (lengua materna), inglés (C1).',
  },
];

export default function About() {
  return <>
    <HeroBanner color="coral" title="Sobre nosotros" subtitle="Experiencia clínica, actualización profesional y un tratamiento diseñado para cada persona." image={hero} alt="Consultorio equipado con mesas y sillas para actividades terapéuticas" />
    <section className="team-section pattern-bg"><div className="container"><div className="section-intro center-title"><span className="eyebrow">Un equipo que acompaña</span><h2>Profesionales con vocación y experiencia</h2></div><div className="team-list">
      {people.map((person, i) => <article className={`team-member ${i % 2 ? 'team-reversed' : ''}`} key={person.name}><div className="team-photo-wrap"><div className="team-photo"><img src={person.photo} alt={person.alt} loading="lazy" /></div><span className="team-dot dot-one"/><span className="team-dot dot-two"/></div><div className="team-details"><h3>{person.name}</h3><ul className="credentials">{person.credentials.map(t=><li key={t}>{t}</li>)}</ul>{person.bio.map(t=><p key={t}>{t}</p>)}<p className="languages"><strong>Idiomas:</strong> {person.languages}</p></div></article>)}
    </div></div></section>
    <section className="mission-section pattern-bg"><div className="container mission-grid"><article className="mission-circle mission-red"><h2>Misión</h2><p>Brindar a las familias un espacio terapéutico integral que favorezca el desarrollo, bienestar y participación de personas con dificultades de aprendizaje, atención, lenguaje, habla, aspectos emocionales y otras necesidades del desarrollo.</p></article><article className="mission-circle mission-yellow"><h2>Visión</h2><p>Ser un espacio terapéutico especializado, reconocido por su profesionalismo, calidez y calidad humana.</p></article></div></section>
    <section className="values-band"><div className="container values-grid"><span>Optimismo</span><span>Seguridad</span><span>Esperanza</span><span>Confianza</span></div></section>
    <section className="container approach-theory" id="enfoque"><div><span className="eyebrow">Nuestra mirada</span><h2>Enfoque teórico</h2><p>El trabajo está fundamentado en la escuela histórico-cultural rusa, desarrollada a partir de los aportes de Vigotsky y ampliada posteriormente por Luria, Leontiev, Galperin y Talizina, a través de la teoría de la actividad.</p><p>Este enfoque considera que el desarrollo psicológico se construye en interacción con el entorno cultural y social.</p></div><div className="in-practice"><span className="eyebrow">Una perspectiva integral</span><h2>En la práctica:</h2>{['Persona', 'Habilidades', 'Dificultades', 'Contexto', 'Demandas del entorno'].map((item, i) => <div key={item}>{item}{i<4&&<span>+</span>}</div>)}</div></section>
    <CTASection title="Cada historia es diferente. Estamos aquí para acompañar la tuya." />
  </>;
}

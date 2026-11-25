import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ClipboardCopy, Check, MessageCircle, Mail, CalendarHeart, Info } from 'lucide-react';
import { contact } from '../data/content';

const services = ['Valoración neuropsicológica', 'Lenguaje / habla', 'Psicopedagógica', 'Emocional', 'Terapia', 'No estoy segura/o'];
const audiences = ['Niño/a', 'Adolescente', 'Adulto'];

export default function Booking() {
  const [data, setData] = useState({ service: '', person: '', name: '', phone: '', email: '', reason: '', consent: false });
  const [summary, setSummary] = useState('');
  const [copied, setCopied] = useState(false);
  const update = (key, value) => { setData(prev => ({ ...prev, [key]: value })); setSummary(''); setCopied(false); };
  const submit = e => {
    e.preventDefault();
    const message = [
      'Hola, me gustaría solicitar información para agendar una cita.',
      '',
      `Servicio: ${data.service}`,
      `¿Para quién?: ${data.person}`,
      `Nombre: ${data.name.trim()}`,
      `Teléfono / WhatsApp: ${data.phone.trim()}`,
      `Correo: ${data.email.trim() || 'No proporcionado'}`,
      `Motivo de consulta: ${data.reason.trim() || 'Por comentar'}`,
    ].join('\n');
    setSummary(message);
    setCopied(false);
  };
  async function copySummary() {
    try { await navigator.clipboard.writeText(summary); setCopied(true); }
    catch { const el = document.querySelector('#booking-summary'); el?.focus(); el?.select(); }
  }
  return <section className="booking-page pattern-bg"><div className="booking-container">
    <Link to="/" className="booking-back"><ArrowLeft size={19}/> Volver al inicio</Link>
    <div className="booking-card"><div className="booking-card-header"><div className="booking-icon"><CalendarHeart size={29}/></div><span className="eyebrow">Queremos conocerte</span><h1>Agenda tu cita</h1><p>Completa esta información para preparar tu solicitud de valoración o terapia.</p></div>
      <form onSubmit={submit} className="booking-form">
        <fieldset><legend>¿Qué servicio necesitas? <span>*</span></legend><div className="radio-grid">{services.map(service => <label className={`radio-option ${data.service === service ? 'radio-selected' : ''}`} key={service}><input type="radio" name="service" value={service} required checked={data.service === service} onChange={e => update('service', e.target.value)}/>{service}</label>)}</div></fieldset>
        <fieldset><legend>¿Para quién es la consulta? <span>*</span></legend><div className="radio-grid radio-three">{audiences.map(person => <label className={`radio-option ${data.person === person ? 'radio-selected' : ''}`} key={person}><input type="radio" name="person" value={person} required checked={data.person === person} onChange={e => update('person', e.target.value)}/>{person}</label>)}</div></fieldset>
        <div className="form-field"><label htmlFor="name">Nombre completo <span>*</span></label><input id="name" required maxLength={120} autoComplete="name" placeholder="Tu nombre" value={data.name} onChange={e => update('name', e.target.value)}/></div>
        <div className="form-field"><label htmlFor="phone">Teléfono / WhatsApp <span>*</span></label><input id="phone" type="tel" required minLength={8} maxLength={25} autoComplete="tel" placeholder="Número de contacto" value={data.phone} onChange={e => update('phone', e.target.value)}/></div>
        <div className="form-field"><label htmlFor="email">Correo electrónico <span className="optional">(opcional)</span></label><input id="email" type="email" autoComplete="email" placeholder="correo@ejemplo.com" value={data.email} onChange={e => update('email', e.target.value)}/></div>
        <div className="form-field"><label htmlFor="reason">¿En qué te gustaría trabajar?</label><textarea id="reason" rows={4} maxLength={1500} placeholder="Cuéntanos brevemente qué apoyo estás buscando…" value={data.reason} onChange={e => update('reason', e.target.value)}/></div>
        <label className="consent-field"><input type="checkbox" required checked={data.consent} onChange={e => update('consent', e.target.checked)}/><span>Autorizo utilizar estos datos únicamente para preparar esta solicitud de contacto. <strong>*</strong></span></label>
        <button className="pill pill-blue booking-submit" type="submit">Preparar solicitud <ArrowRight size={19}/></button>
      </form>
      {summary && <div className="booking-result" role="status"><h2><Check size={22}/> Solicitud preparada</h2><p>Tu cita aún <strong>no está agendada</strong>. Copia el mensaje o utiliza uno de los canales configurados para enviarlo y solicitar confirmación.</p><textarea id="booking-summary" className="summary-preview" readOnly rows={9} value={summary} aria-label="Resumen de tu solicitud"/><div className="booking-result-actions"><button type="button" className="pill pill-outline" onClick={copySummary}><ClipboardCopy size={18}/>{copied ? 'Mensaje copiado' : 'Copiar solicitud'}</button>{contact.whatsapp && <a className="pill pill-green" target="_blank" rel="noopener noreferrer" href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(summary)}`}><MessageCircle size={18}/> Enviar por WhatsApp</a>}{contact.email && <a className="pill pill-blue" href={`mailto:${contact.email}?subject=${encodeURIComponent('Solicitud de cita')}&body=${encodeURIComponent(summary)}`}><Mail size={18}/> Enviar por correo</a>}</div></div>}
      <p className="booking-disclaimer"><Info size={16}/> Este formulario prepara tu solicitud; no confirma una cita ni guarda información en un servidor.</p>
    </div>
  </div></section>;
}

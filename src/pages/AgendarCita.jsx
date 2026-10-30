import { useState } from 'react';

export default function AgendarCita() {
  const serviciosOpciones = [
    'Valoración neuropsicológica',
    'Lenguaje-habla',
    'Psicopedagógica',
    'Emocional',
    'Terapia',
    'No estoy segura/o.',
  ];

  const consultaOpciones = ['Niño/a', 'Adolescente', 'Adulto.'];

  const [formData, setFormData] = useState({
    servicio: 'Valoración neuropsicológica',
    paraQuien: 'Niño/a',
    nombre: '',
    telefono: '',
    correo: '',
    motivo: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <main className="agendar-page-wrapper">
      <div className="agendar-card">
        <h1 className="agendar-title">Agenda tu Cita</h1>

        <form onSubmit={handleSubmit} className="agendar-form">
          {/* 1. ¿Qué servicio necesitas? */}
          <div className="agendar-field">
            <label>¿Qué servicio necesitas?</label>
            <div className="agendar-options-box">
              {serviciosOpciones.map((opcion) => (
                <div
                  key={opcion}
                  className={`agendar-option-item ${
                    formData.servicio === opcion ? 'selected' : ''
                  }`}
                  onClick={() => setFormData({ ...formData, servicio: opcion })}
                >
                  {opcion}
                </div>
              ))}
            </div>
          </div>

          {/* 2. ¿Para quién es la consulta? */}
          <div className="agendar-field">
            <label>¿Para quién es la consulta?</label>
            <div className="agendar-options-box">
              {consultaOpciones.map((opcion) => (
                <div
                  key={opcion}
                  className={`agendar-option-item ${
                    formData.paraQuien === opcion ? 'selected' : ''
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, paraQuien: opcion })
                  }
                >
                  {opcion}
                </div>
              ))}
            </div>
          </div>

          {/* 3. Nombre */}
          <div className="agendar-field">
            <label htmlFor="nombre">Nombre.</label>
            <input
              id="nombre"
              type="text"
              required
              className="agendar-input"
              value={formData.nombre}
              onChange={(e) =>
                setFormData({ ...formData, nombre: e.target.value })
              }
            />
          </div>

          {/* 4. Teléfono/WhatsApp */}
          <div className="agendar-field">
            <label htmlFor="telefono">Teléfono/WhatsApp.</label>
            <input
              id="telefono"
              type="tel"
              required
              className="agendar-input"
              value={formData.telefono}
              onChange={(e) =>
                setFormData({ ...formData, telefono: e.target.value })
              }
            />
          </div>

          {/* 5. Correo */}
          <div className="agendar-field">
            <label htmlFor="correo">Correo</label>
            <input
              id="correo"
              type="email"
              required
              className="agendar-input"
              value={formData.correo}
              onChange={(e) =>
                setFormData({ ...formData, correo: e.target.value })
              }
            />
          </div>

          {/* 6. ¿En qué te gustaría trabajar? */}
          <div className="agendar-field">
            <label htmlFor="motivo">¿En que te gustaria trabajar?</label>
            <textarea
              id="motivo"
              rows="4"
              className="agendar-textarea"
              value={formData.motivo}
              onChange={(e) =>
                setFormData({ ...formData, motivo: e.target.value })
              }
            />
          </div>

          <button type="submit" className="btn-agendar-submit">
            Enviar Solicitud
          </button>

          {enviado && (
            <p className="agendar-success">
              ¡Gracias, {formData.nombre}! Hemos recibido tu solicitud para{' '}
              <strong>{formData.servicio}</strong>. Te contactaremos pronto.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
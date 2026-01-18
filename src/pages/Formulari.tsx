import React, { useState } from 'react';
import './Formulari.css';
import Header from '../components/Header';
import fotomaton from '../assets/images/fotomaton.png';
import Footer from '../components/Footer';

const Formulari: React.FC = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
    
  const [form, setForm] = useState<any>({
    name: "",
    asistencia: "",
    alergias: "",
    bus: "",
    canciones: ""
  });

  const handleSend = async () => {
    // Validación campos obligatorios
    if (!form.name || !form.asistencia || !form.bus) {
      setError(true);
      setTimeout(() => setError(false), 2500); // desaparece solo
      return;
    }

    // Si todo correcto
    setSending(true);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSending(false);
      setSent(true);

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setSending(false);
      setError(true);
      setTimeout(() => setError(false), 2500);
    }
  };

  return (
    <div className="formulari-page">
      <Header />

      <main>
        <img className="image-fotomaton" src={fotomaton} />

        <h1 className='header-section-formulari'>formulari</h1>   

        <div className="questions-container">

          {/* 1 - Nombre */}
          <div className="question-block">
            <label className='pregunta'>Nom i cognoms(*)</label>
            <input
              type="text"
              placeholder="Escriu el teu nom complet"
              className="question-input"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          {/* 2 - Asistencia */}
          <div className="question-block assistencia">
            <label className='pregunta'>Vindràs a la boda?(*)</label>
            <div className="options">
            {["sí", "no"].map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name="asistencia"
                  value={option}
                  checked={form.asistencia === option}  // <--- clave
                  onChange={(e) =>
                    setForm({ ...form, asistencia: e.target.value })
                  }
                />
                {option}
              </label>
            ))}
          </div>
          </div>

          {/* 3 - Alergias */}
          <div className="question-block alergia">
            <label className='pregunta'>
              Al·lèrgies o intoleràncies? Si tens al·lèrgia a algun aliment avisa'ns si us plau, no volem que et converteixis en peix globus el dia del casament (ni cap altre dia). També pots fer-nos saber si ets vegetarià, vegà, etc.
            </label>
            <textarea
              placeholder="Escriu-ho aquí"
              className="question-input"
              value={form.alergias}
              onChange={(e) => setForm({ ...form, alergias: e.target.value })}
            />
          </div>

          {/* 4 - Bus */}
          <div className="question-block transportformulari">
            <label className='pregunta black'>Faràs servir el bus de la boda?(*)  </label>
            <p className='black'><em>info: el bus sortirà del centre de Girona sobre les 12.30h i tornarà al centre de Girona a les 24h // horaris orientatius</em></p>
            <div className="options black">
              {["Anada", "Tornada", "Anada i tornada", "No el necessito"].map(
                (option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="bus"
                      value={option}
                      checked={form.bus === option} // <--- clave
                      onChange={(e) => setForm({ ...form, bus: e.target.value })}
                    />
                    {option}
                  </label>
                )
              )}
            </div>
          </div>

          {/* 5 - Canciones */}
          <div className="question-block">
            <label className='pregunta'>Tens alguna suggerència de cançons?</label>
            <textarea
              placeholder="Escriu la teva cançó!"
              className="question-input"
              value={form.canciones}
              onChange={(e) => setForm({ ...form, canciones: e.target.value })}
            />
          </div>

          
          {!sending && !sent && !error && (
            <button className="send-button" onClick={handleSend}>
              ENVIAR
            </button>
          )}

          {error && (
            <div className="error-message">
              😢 Falta contestar alguna pregunta obligatòria
            </div>
          )}

          {sending && (
            <div className="loading-animation"></div>
          )}

          {sent && (
            <div className="sent-message">
              🎉 <span>Enviat!</span>
            </div>
          )}

        </div>
      </main>

      <Footer/>
    </div>
  );
};

export default Formulari;

"use client";

import { useState } from "react";
import "../st-pages.css";

export default function SolicitarValoracionPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="sp">
      {/* HERO */}
      <section className="sp-hero sp-hero--dark">
        <img className="sp-hero__glow" src="/images/degradado-cream.png" alt="" aria-hidden="true" />
        <div className="sp-hero__inner">
          <p className="sp-eyebrow sp-eyebrow--gold">
            <span className="sp-eyebrow__line" />
            Solicitar valoración
          </p>
          <h1>Empezá por entender qué está pasando.</h1>
          <p className="sp-hero__sub">
            Completá el formulario con la mayor información posible. Nuestro
            equipo revisará tu solicitud y te contactará para indicarte el
            siguiente paso.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="sp-sec">
        <img className="sp-sec__glow sp-sec__glow--right" src="/images/degradado-olive.png" alt="" aria-hidden="true" />
        <div className="sp-sec__inner">
          <p className="sp-eyebrow">
            <span className="sp-eyebrow__line" />
            Formulario
          </p>
          <h2>Tu solicitud, con contexto.</h2>
          <p className="sp-sec__lead">
            No es un turno automático: es una solicitud médica. Cuanta más
            información nos des, mejor podremos preparar el primer contacto.
          </p>

          {sent ? (
            <div className="sp-form">
              <div className="sp-form__ok">
                <h3>Solicitud enviada.</h3>
                <p>
                  Nuestro equipo revisará tu información y te contactará para
                  indicarte el siguiente paso.
                </p>
              </div>
            </div>
          ) : (
            <form className="sp-form" onSubmit={onSubmit}>
              <div className="sp-form__field">
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" name="nombre" type="text" required autoComplete="name" />
              </div>
              <div className="sp-form__field">
                <label htmlFor="edad">Edad</label>
                <input id="edad" name="edad" type="number" min="18" max="110" required />
              </div>
              <div className="sp-form__field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" />
              </div>
              <div className="sp-form__field">
                <label htmlFor="pais">País / Ciudad</label>
                <input id="pais" name="pais" type="text" required />
              </div>
              <div className="sp-form__field sp-form__field--full">
                <label htmlFor="motivo">Principal motivo de consulta</label>
                <textarea
                  id="motivo"
                  name="motivo"
                  required
                  placeholder="Contanos qué te preocupa y qué síntomas venís sintiendo."
                />
              </div>
              <div className="sp-form__field sp-form__field--full">
                <label htmlFor="cuanto">¿Hace cuánto ocurre?</label>
                <input
                  id="cuanto"
                  name="cuanto"
                  type="text"
                  required
                  placeholder="Ej.: hace 6 meses, desde hace un año, de forma intermitente…"
                />
              </div>
              <div className="sp-form__field sp-form__field--full">
                <label htmlFor="objetivo">¿Qué te gustaría conseguir?</label>
                <textarea
                  id="objetivo"
                  name="objetivo"
                  required
                  placeholder="Ej.: entender qué me pasa, ordenar síntomas, un plan de seguimiento…"
                />
              </div>
              <div className="sp-form__field sp-form__field--full">
                <label htmlFor="conociste">¿Cómo conociste a la Dra. Alejandra?</label>
                <select id="conociste" name="conociste" required defaultValue="">
                  <option value="" disabled>
                    Elegí una opción
                  </option>
                  <option>Instagram</option>
                  <option>Google / búsqueda</option>
                  <option>Recomendación de otra persona</option>
                  <option>Otro profesional de salud</option>
                  <option>Otro</option>
                </select>
              </div>
              <button className="pill sp-form__submit sp-cta__primary" type="submit">
                Enviar solicitud
              </button>
            </form>
          )}
        </div>
      </section>

      {/* DESPUÉS DE ENVIAR */}
      <section className="sp-sec sp-sec--pink">
        <div className="sp-sec__inner sp-split">
          <div>
            <p className="sp-eyebrow">
              <span className="sp-eyebrow__line" />
              Qué pasa después
            </p>
            <h2>Nuestro equipo revisa tu solicitud.</h2>
            <p className="sp-sec__lead">
              Te contactaremos para coordinar la valoración inicial y
              explicarte el proceso. La valoración no implica automáticamente
              entrar al programa: primero se comprende tu caso; después se
              decide, juntas.
            </p>
          </div>
          <div className="sp-box">
            <h3>¿Es una urgencia?</h3>
            <p>
              Este canal no atiende emergencias médicas. Si es una urgencia,
              contactá los servicios de emergencia de tu localidad.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

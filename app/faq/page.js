"use client";

import { useState } from "react";
import "../st-pages.css";

const PREGUNTAS = [
  [
    "¿Trabajás únicamente problemas digestivos?",
    "No. La salud digestiva y la microbiota son un eje importante del abordaje, pero el proceso integra también metabolismo, hormonas, energía, prevención y longevidad. El eje se define según tu caso, no al revés.",
  ],
  [
    "¿Necesito tener estudios antes de la primera consulta?",
    "No es obligatorio. Si ya tenés estudios recientes, traelos: se revisan en contexto. Si no, la valoración inicial define qué estudios tienen sentido pedir — y cuáles no hace falta.",
  ],
  [
    "¿Atendés en línea?",
    "Sí. El programa puede funcionar de forma presencial o en línea (videollamada), según el caso y lo que este requiera. Lo definimos juntas en la valoración inicial.",
  ],
  [
    "¿Por qué el programa dura seis meses?",
    "Porque los cambios biológicos, el seguimiento y los ajustes necesitan tiempo. Un mes puede mostrar señales; seis meses permiten medir, corregir rumbo y consolidar hábitos con evidencia.",
  ],
  [
    "¿Puedo hacer solamente una consulta?",
    "Sí. Existe la valoración inicial como instancia propia: sirve para comprender tu caso y definir próximos pasos. A partir de ahí decidís si continuás con el programa o no. La valoración no implica automáticamente entrar al programa.",
  ],
  [
    "¿Trabajás con otros especialistas?",
    "Sí, cuando corresponde. Hay una red de profesionales colaboradores (nutrición, psicología, endocrinología, gastroenterología) que se activa según el caso — siempre con dirección clínica única.",
  ],
  [
    "¿Qué ocurre después de solicitar una valoración?",
    "Nuestro equipo revisa tu solicitud y te contacta para coordinar la valoración inicial: horario, modalidad (presencial o en línea) y qué material traer. Recién ahí, y solo si lo decidís, se avanza hacia el programa.",
  ],
];

export default function FaqPage() {
  const [open, setOpen] = useState(0);

  return (
    <div className="sp">
      {/* HERO */}
      <section className="sp-hero">
        <img className="sp-hero__glow" src="/images/degradado-olive.png" alt="" aria-hidden="true" />
        <div className="sp-hero__inner">
          <p className="sp-eyebrow">
            <span className="sp-eyebrow__line" />
            Preguntas frecuentes
          </p>
          <h1>Lo que más suelen preguntar antes de empezar.</h1>
          <p className="sp-hero__sub">
            Respuestas directas, sin letra chica. Si tu pregunta no está acá,
            escribinos — o dejala en el formulario de valoración.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="sp-sec">
        <div className="sp-sec__inner reveal">
          <div className="sp-faq">
            {PREGUNTAS.map(([q, a], i) => (
              <div className={`sp-faq__item${open === i ? " sp-faq__item--open" : ""}`} key={q}>
                <button
                  className="sp-faq__q"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  {q}
                  <span className="sp-faq__icon" aria-hidden="true" />
                </button>
                <div className="sp-faq__a">
                  <p>{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-cta">
        <img className="sp-cta__bg" src="/images/client-3.png" alt="" aria-hidden="true" />
        <div className="sp-cta__shade" />
        <img className="sp-cta__glow" src="/images/degradado-cream.png" alt="" aria-hidden="true" />
        <div className="sp-cta__inner reveal">
          <p className="sp-eyebrow sp-eyebrow--gold">
            <span className="sp-eyebrow__line" />
            ¿Otra pregunta?
          </p>
          <h2>Cuéntanos tu caso.</h2>
          <p className="sp-cta__sub">
            El formulario de valoración es el mejor canal: llega al equipo con
            contexto, no como una consulta suelta.
          </p>
          <div className="sp-cta__btns">
            <a className="pill sp-cta__primary" href="/solicitar-valoracion">Solicitar una valoración</a>
            <a className="pill" href="/valoracion-inicial">Qué incluye la valoración</a>
          </div>
        </div>
      </section>
    </div>
  );
}

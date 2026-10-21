import Image from "next/image";
import { AREAS } from "../areas";
import "../medicina-de-precision/medicina.css";

export const metadata = {
  title: "Salud integral | Dra. Alejandra Stivaletta",
  description:
    "No esperar a que algo pase para empezar a mirar. Señales tempranas, biomarcadores en tendencia y seguimiento para decidir con anticipación.",
};

const ANALIZA = [
  "Historia clínica y familiar",
  "Biomarcadores en tendencia",
  "Metabolismo y glucemia",
  "Perfil cardiovascular",
  "Salud hormonal",
  "Composición corporal",
  "Hábitos y sueño",
  "Nivel de actividad",
  "Contexto emocional",
  "Evolución en el tiempo",
];

const PUNTOS = [
  "Detectar señales tempranas antes de que se conviertan en un problema.",
  "Conocer tu riesgo real, con datos y contexto.",
  "Priorizar hábitos y controles según tu momento de vida.",
  "Dar seguimiento y ajustar el plan en el tiempo.",
];

const HREF = "/salud-integral";

export default function MedicinaPredictivaPage() {
  return (
    <div className="mp">
      {/* 01 — HERO */}
      <section className="mp-hero" id="inicio">
        <img className="mp-hero__glow" src="/images/degradado-cream.png" alt="" aria-hidden="true" />
        <div className="mp-hero__text">
          <p className="mp-eyebrow mp-eyebrow--wine">
            <span className="mp-eyebrow__line" />
            Salud integral
          </p>
          <h1>No esperar a que algo pase para empezar a mirar.</h1>
          <p className="mp-hero__concept">Señales tempranas + seguimiento en el tiempo.</p>
          <div className="mp-hero__btns">
            <a className="pill" href="/solicitar-valoracion">Solicitar una valoración</a>
            <a className="pill pill--soft" href="/#metodo">Conocer el método</a>
          </div>
        </div>
        <div className="mp-hero__photo">
          <Image
            src="/images/alejandra-predictiva.jpg"
            alt="Dra. Alejandra Stivaletta en su consulta"
            fill
            sizes="(max-width: 1100px) 100vw, 45vw"
            quality={82}
            priority
          />
        </div>
      </section>

      {/* 02 — CONCEPTO */}
      <section className="mp-manifesto">
        <img className="mp-manifesto__glow" src="/images/degradado-olive.png" alt="" aria-hidden="true" />
        <div className="mp-manifesto__inner reveal">
          <div className="mp-manifesto__left">
            <p className="mp-eyebrow mp-eyebrow--wine">
              <span className="mp-eyebrow__line" />
              El concepto
            </p>
            <h2>La mejor hora para cuidarte es la que todavía no llegó.</h2>
          </div>
          <div className="mp-manifesto__right">
            <p>
              La medicina predictiva mira hacia adelante. No se trata de
              asustarse con números, sino de leer a tiempo lo que tu cuerpo
              viene mostrando: antecedentes familiares, tendencias de
              biomarcadores, hábitos y momento de vida.
            </p>
            <p>
              El objetivo es simple: anticipar. Si un marcador empieza a
              desviarse, si aparece un factor de riesgo, si tu contexto cambia —
              ahí se decide, con información y con tiempo. No hace falta
              estudiarlo todo: hace falta estudiar lo que cambia una decisión.
            </p>
          </div>
          <div className="mp-points">
            <p className="mp-points__label">Qué permite</p>
            <ul>
              {PUNTOS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 02.5 — EL MENSAJE */}
      <section className="mp-msg">
        <img className="mp-analiza__glow" src="/images/degradado-cream.png" alt="" aria-hidden="true" />
        <div className="mp-msg__inner reveal">
          <p className="mp-eyebrow" style={{ justifyContent: "center" }}>
            <span className="mp-eyebrow__line" />
            El mensaje
          </p>
          <p className="mp-msg__big">
            No es <em>predecir enfermedades</em>. Es comprender riesgos y tomar
            mejores decisiones antes.
          </p>
          <ul className="mp-msg__list">
            <li>Prevención con base clínica</li>
            <li>Antecedentes leídos en contexto</li>
            <li>Factores de riesgo priorizados</li>
            <li>Biomarcadores en tendencia</li>
            <li>Cambios fisiológicos a tiempo</li>
            <li>Seguimiento, no improvisación</li>
            <li>Decisiones con información</li>
            <li>Tiempo a favor, no en contra</li>
          </ul>
        </div>
      </section>

      {/* 03 — QUÉ ANALIZO */}
      <section className="mp-analiza">
        <img className="mp-analiza__glow" src="/images/degradado-cream.png" alt="" aria-hidden="true" />
        <div className="mp-analiza__inner reveal">
          <div className="mp-analiza__head">
            <p className="mp-eyebrow">
              <span className="mp-eyebrow__line" />
              Qué analizo
            </p>
            <h2>En cada persona analizo</h2>
            <p className="mp-analiza__sub">
              Diez fuentes de información que se leen en conjunto, no por
              separado.
            </p>
          </div>
          <ol className="mp-analiza__list">
            {ANALIZA.map((item, i) => (
              <li className="mp-analiza__item" key={item}>
                <span className="mp-analiza__n">{String(i + 1).padStart(2, "0")}.</span>
                <span className="mp-analiza__t">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 04 — EL PARAGUAS / ÁREAS */}
      <section className="mp-areas" id="areas">
        <div className="mp-areas__inner reveal">
          <div className="mp-areas__head">
            <p className="mp-eyebrow">
              <span className="mp-eyebrow__line" />
              El paraguas
            </p>
            <h2>Cuatro áreas, una misma mirada.</h2>
          </div>
          <div className="mp-areas__grid">
            {AREAS.map((a) => {
              const current = a.href === HREF;
              return current ? (
                <div key={a.href} className="mp-areas__card mp-areas__card--current">
                  <span className="mp-areas__n">{a.n}</span>
                  <h3>{a.t}</h3>
                  <p>{a.d}</p>
                  <span className="mp-areas__chip">Esta página</span>
                </div>
              ) : (
                <a key={a.href} href={a.href} className="mp-areas__card">
                  <span className="mp-areas__n">{a.n}</span>
                  <h3>{a.t}</h3>
                  <p>{a.d}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 — CTA FINAL */}
      <section className="mp-cta" id="contacto">
        <img className="mp-cta__bg" src="/images/alejandra-cta.jpg" alt="" aria-hidden="true" />
        <div className="mp-cta__shade" />
        <img className="mp-cta__glow" src="/images/degradado-cream.png" alt="" aria-hidden="true" />
        <div className="mp-cta__inner reveal">
          <p className="mp-eyebrow">
            <span className="mp-eyebrow__line" />
            Solicitar valoración
          </p>
          <h2>¿Te gustaría mirar tu salud con anticipación?</h2>
          <p className="mp-cta__sub">
            Solicitá una valoración. Nuestro equipo revisará tu información y te
            contactará para indicarte el siguiente paso.
          </p>
          <div className="mp-cta__btns">
            <a className="pill mp-cta__primary" href="/solicitar-valoracion">
              Solicitar una valoración
            </a>
            <a className="pill" href="/#metodo">
              Conocer el método
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

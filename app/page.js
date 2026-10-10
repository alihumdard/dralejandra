import Image from "next/image";

const TICKER = "MEDICINA FAMILIAR Y DE PRECISIÓN · MICROBIOTA · MEDICINA PREDICTIVA · LONGEVIDAD · ";

const SINTOMAS = [
  "inflamación",
  "síntomas digestivos persistentes",
  "cansancio",
  "alteraciones metabólicas",
  "cambios hormonales",
  "perimenopausia o menopausia",
  "dificultad para entender por qué distintos síntomas aparecen al mismo tiempo.",
];

const PASOS = [
  ["01.", "DESCUBRIR", "Historia clínica profunda. Contexto. Hábitos. Antecedentes. Síntomas."],
  ["02.", "COMPRENDER", "Interpretación integral de biomarcadores, estudios y señales del cuerpo."],
  ["03.", "INTERVENIR", "Diseño de una estrategia médica personalizada."],
  ["04.", "AJUSTAR", "Seguimiento, medición de evolución y adaptación del plan."],
  ["05.", "CONSOLIDAR", "Construcción de hábitos y herramientas para sostener los resultados."],
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero" id="inicio">
        {/* Desktop image */}
        <Image className="hero__bg hero__bg--desktop" src="/images/hero.png" alt="Dra. Alejandra Stivaletta" fill sizes="100vw" quality={90} priority />
        {/* Mobile image */}
        <Image className="hero__bg hero__bg--mobile" src="/images/hero-mobile.jpg" alt="Dra. Alejandra Stivaletta" fill sizes="100vw" quality={90} priority />
        <div className="hero__shade" />
        <div className="ticker" aria-hidden="true">
          <div className="ticker__track">
            {[0, 1, 2, 3].map((i) => (
              <span key={i}>{TICKER}</span>
            ))}
          </div>
        </div>
        <div className="hero__inner">
          <div className="hero__text">
            <span className="hero__line" />
            <h1>
              Dra. Alejandra
              <br />
              Stivaletta
            </h1>
            <p>Tu salud no se entiende por partes.</p>
          </div>
          <div className="hero__btns">
            <a className="pill" href="#contacto">Solicitar una valoración</a>
            <a className="pill pill--soft" href="#metodo">Conocer el método</a>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="problem">
        <img className="problem__bg" src="/images/problema.png" alt="" />
        <div className="problem__photo">
          <img src="/images/problema.png" alt="" />
        </div>
        <div className="problem__text">
          <h2>
            El problema muchas veces no es un síntoma.
            <br />
            Es que nadie vio todavía cómo se relacionan todos entre sí.
          </h2>
          <p className="problem__lead">Para personas que llevan tiempo sintiendo que algo no termina de encajar:</p>
          <ul>
            {SINTOMAS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <a className="pill problem__btn" href="#contacto">Quiero entender qué me pasa</a>
      </section>

      {/* MÉTODO */}
      <section className="method" id="metodo">
        <img className="method__bg" src="/images/metodo.png" alt="" />
        <div className="method__shade" />
        <div className="method__inner">
          <div className="method__head">
            <h2>El método</h2>
            <p>UN PROCESO MÉDICO, NO UNA CONSULTA AISLADA.</p>
          </div>
          <div className="steps">
            {PASOS.map(([n, t, d]) => (
              <div className="step" key={n}>
                <span className="step__n">{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
          <div className="method__foot">
            <p>No buscamos una solución rápida. Buscamos entender tu biología y trabajar sobre ella con tiempo, evidencia y seguimiento.</p>
            <a className="pill" href="#contacto">Conocer el método completo</a>
          </div>
        </div>
      </section>
    </main>
  );
}

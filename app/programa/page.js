import "../st-pages.css";

export const metadata = {
  title: "Programa · Método Dra. Alejandra Stivaletta | Dra. Alejandra Stivaletta",
  description:
    "Programa médico personalizado de 6 meses. Valoración inicial profunda, interpretación médica, plan personalizado y seguimiento longitudinal con ajustes según evolución.",
};

const PASOS = [
  [
    "01",
    "Valoración inicial profunda",
    "Historia clínica completa, contexto, hábitos, síntomas y antecedentes. El punto de partida de todo el proceso.",
  ],
  [
    "02",
    "Interpretación médica",
    "Lectura integral de biomarcadores, estudios previos y señales del cuerpo — en contexto, no aislados.",
  ],
  [
    "03",
    "Plan personalizado",
    "Diseño de una estrategia médica hecha para vos: prioridades concretas, objetivos claros y próximos pasos definidos.",
  ],
  [
    "04",
    "Seguimiento longitudinal",
    "Controles periódicos a lo largo de los seis meses para medir evolución y mantener el rumbo.",
  ],
  [
    "05",
    "Ajustes según evolución",
    "El plan se adapta a cómo respondés. Nada queda escrito en piedra: se ajusta con evidencia y tiempo.",
  ],
  [
    "06",
    "Educación",
    "Herramientas y criterios para que entiendas lo que está pasando y puedas sostener los cambios.",
  ],
  [
    "07",
    "Consolidación",
    "Construcción de hábitos y recursos para sostener los resultados en el tiempo, más allá del programa.",
  ],
];

export default function ProgramaPage() {
  return (
    <div className="sp">
      {/* HERO */}
      <section className="sp-hero">
        <img className="sp-hero__glow" src="/images/degradado-olive.png" alt="" aria-hidden="true" />
        <div className="sp-hero__inner">
          <p className="sp-eyebrow">
            <span className="sp-eyebrow__line" />
            Programa
          </p>
          <h1>Método Dra. Alejandra Stivaletta</h1>
          <p className="sp-hero__sub">
            Un programa médico personalizado de 6 meses. No vendemos sesiones:
            acompañamos un proceso completo, con seguimiento y ajustes.
          </p>
          <div className="sp-hero__btns">
            <a className="pill" href="/valoracion-inicial">Valoración inicial</a>
            <a className="pill pill--soft" href="/solicitar-valoracion">Solicitar valoración</a>
          </div>
        </div>
      </section>

      {/* CONCEPTO */}
      <section className="sp-sec">
        <img className="sp-sec__glow sp-sec__glow--right" src="/images/degradado-olive.png" alt="" aria-hidden="true" />
        <div className="sp-sec__inner sp-split reveal">
          <div>
            <p className="sp-eyebrow">
              <span className="sp-eyebrow__line" />
              El proceso
            </p>
            <h2>Un proceso médico, no una consulta aislada.</h2>
            <p className="sp-sec__lead">
              Los cambios biológicos necesitan tiempo para aparecer, medirse y
              consolidarse. Por eso el programa está diseñado como un proceso de
              seis meses: con valoración inicial, plan propio, seguimiento
              longitudinal y ajustes reales según tu evolución.
            </p>
            <ul className="sp-list sp-list--check">
              <li>Modalidad presencial y en línea (videollamada) según el caso.</li>
              <li>La valoración inicial no implica automáticamente entrar al programa.</li>
              <li>Cada etapa se define con vos, con objetivos y plazos claros.</li>
            </ul>
          </div>
          <div className="sp-box">
            <h3>Duración</h3>
            <p className="sp-box__price">6 meses</p>
            <p>
              El tiempo mínimo para que un proceso de salud se mida, se ajuste y
              empiece a consolidarse con sentido.
            </p>
          </div>
        </div>
      </section>

      {/* LAS 7 ETAPAS */}
      <section className="sp-sec sp-sec--pink">
        <div className="sp-sec__inner reveal">
          <p className="sp-eyebrow">
            <span className="sp-eyebrow__line" />
            Las etapas
          </p>
          <h2>De la valoración inicial a la consolidación.</h2>
          <div className="sp-flow">
            {PASOS.map(([n, t, d]) => (
              <div className="sp-flow__step" key={n}>
                <span className="sp-flow__n">{n}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRASE */}
      <section className="sp-sec sp-sec--dark">
        <img className="sp-sec__glow sp-sec__glow--left" src="/images/degradado-cream.png" alt="" aria-hidden="true" />
        <div className="sp-sec__inner sp-manifesto reveal">
          <p className="sp-eyebrow sp-eyebrow--gold" style={{ justifyContent: "center" }}>
            <span className="sp-eyebrow__line" />
            Nuestra filosofía
          </p>
          <p>
            No buscamos una solución rápida. Buscamos entender tu biología y
            trabajar sobre ella con tiempo, evidencia y seguimiento.
          </p>
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
            Primer paso
          </p>
          <h2>Empezá por la valoración inicial.</h2>
          <p className="sp-cta__sub">
            Antes de entrar al programa, necesitamos comprender tu caso. La
            valoración inicial es la puerta de entrada.
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

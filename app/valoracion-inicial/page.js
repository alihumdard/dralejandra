import "../st-pages.css";

export const metadata = {
  title: "Valoración inicial | Dra. Alejandra Stivaletta",
  description:
    "Antes de tratar, necesitamos comprender. La valoración inicial no es una consulta superficial: comprende el caso, revisa antecedentes y define los próximos pasos.",
};

const PARA = [
  "Comprender tu caso en profundidad, no solo el síntoma del día.",
  "Revisar antecedentes, estudios previos y tratamientos en curso.",
  "Identificar prioridades reales, no una lista interminable de pendientes.",
  "Determinar si esta metodología es adecuada para vos.",
  "Diseñar los próximos pasos con claridad — entren o no al programa.",
];

export default function ValoracionInicialPage() {
  return (
    <div className="sp">
      {/* HERO */}
      <section className="sp-hero">
        <img className="sp-hero__glow" src="/images/degradado-olive.png" alt="" aria-hidden="true" />
        <div className="sp-hero__inner">
          <p className="sp-eyebrow">
            <span className="sp-eyebrow__line" />
            Valoración inicial
          </p>
          <h1>Antes de tratar, necesitamos comprender.</h1>
          <p className="sp-hero__sub">
            La valoración inicial no es una consulta superficial. Es el espacio
            donde se entiende tu caso y se define si esta metodología es para
            vos.
          </p>
          <div className="sp-hero__btns">
            <a className="pill" href="/solicitar-valoracion">Solicitar una valoración</a>
            <a className="pill pill--soft" href="/programa">Conocer el programa</a>
          </div>
        </div>
      </section>

      {/* PARA QUÉ SIRVE */}
      <section className="sp-sec">
        <div className="sp-sec__inner sp-split reveal">
          <div>
            <p className="sp-eyebrow">
              <span className="sp-eyebrow__line" />
              Para qué sirve
            </p>
            <h2>Una valoración médica de verdad.</h2>
            <p className="sp-sec__lead">
              Se trata de una sesión extensa y preparada — no de un turno de
              quince minutos. Sirve para ordenar tu historia, revisar lo
              importante y decidir con criterio médico cuál es el siguiente
              paso.
            </p>
            <ul className="sp-list">
              {PARA.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="sp-box">
            <h3>Valoración inicial</h3>
            <p className="sp-box__price">
              220 €
              <small>Sesión única · presencial o en línea</small>
            </p>
            <p>
              Incluye la revisión completa de tu caso y la definición de
              prioridades y próximos pasos.
            </p>
            <p className="sp-box__note">
              Importante: solicitar la valoración no implica automáticamente
              entrar al programa de 6 meses. Primero se comprende; después se
              decide, juntas.
            </p>
          </div>
        </div>
      </section>

      {/* DESPUÉS DE LA VALORACIÓN */}
      <section className="sp-sec sp-sec--dark">
        <img className="sp-sec__glow sp-sec__glow--right" src="/images/degradado-cream.png" alt="" aria-hidden="true" />
        <div className="sp-sec__inner reveal">
          <p className="sp-eyebrow sp-eyebrow--gold">
            <span className="sp-eyebrow__line" />
            Después
          </p>
          <h2>Tres caminos posibles.</h2>
          <div className="sp-cards">
            <div className="sp-card">
              <span className="sp-card__n">01.</span>
              <h3>Entrar al programa</h3>
              <p>
                Si el caso lo requiere y ambos estamos de acuerdo, se diseña el
                plan de seis meses con seguimiento longitudinal.
              </p>
            </div>
            <div className="sp-card">
              <span className="sp-card__n">02.</span>
              <h3>Un plan puntual</h3>
              <p>
                A veces lo que necesitás es una orientación clara y algunos
                ajustes concretos, sin entrar a un proceso largo.
              </p>
            </div>
            <div className="sp-card">
              <span className="sp-card__n">03.</span>
              <h3>Otra dirección</h3>
              <p>
                Si esta metodología no es la adecuada para tu situación, te lo
                diremos con claridad y orientaremos el próximo paso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-cta">
        <img className="sp-cta__bg" src="/images/alejandra-cta.jpg" alt="" aria-hidden="true" />
        <div className="sp-cta__shade" />
        <img className="sp-cta__glow" src="/images/degradado-cream.png" alt="" aria-hidden="true" />
        <div className="sp-cta__inner reveal">
          <p className="sp-eyebrow sp-eyebrow--gold">
            <span className="sp-eyebrow__line" />
            Empezar
          </p>
          <h2>Solicitá tu valoración inicial.</h2>
          <p className="sp-cta__sub">
            Completá el formulario. Nuestro equipo revisará tu información y te
            contactará para coordinar el siguiente paso.
          </p>
          <div className="sp-cta__btns">
            <a className="pill sp-cta__primary" href="/solicitar-valoracion">Solicitar una valoración</a>
            <a className="pill" href="/faq">Ver preguntas frecuentes</a>
          </div>
        </div>
      </section>
    </div>
  );
}

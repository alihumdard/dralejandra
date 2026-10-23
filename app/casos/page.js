import "../st-pages.css";

export const metadata = {
  title: "Casos y experiencias | Dra. Alejandra Stivaletta",
  description:
    "Historias de procesos reales, anonimizadas y autorizadas. Relatos de pacientes que encontraron un plan y un seguimiento para lo que venían sintiendo.",
};

const TESTIMONIOS = [
  [
    "Llegué con cinco síntomas que parecían no tener relación. Por primera vez alguien los miró juntos.",
    "Proceso de 6 meses · salud digestiva y energía",
  ],
  [
    "Por primera vez entendí por qué me estaban pasando distintas cosas al mismo tiempo.",
    "Valoración inicial + programa · salud hormonal",
  ],
  [
    "Sentí que había un plan y alguien siguiendo mi evolución. Eso cambió todo.",
    "Programa de 6 meses · metabolismo",
  ],
  [
    "No me dieron una receta. Me explicaron qué estaba pasando y por qué. Después vino el plan.",
    "Proceso de 6 meses · prevención",
  ],
];

export default function CasosPage() {
  return (
    <div className="sp">
      {/* HERO */}
      <section className="sp-hero">
        <img className="sp-hero__glow" src="/images/degradado-olive.png" alt="" aria-hidden="true" />
        <div className="sp-hero__inner">
          <p className="sp-eyebrow">
            <span className="sp-eyebrow__line" />
            Casos y experiencias
          </p>
          <h1>Historias de procesos, no promesas.</h1>
          <p className="sp-hero__sub">
            Testimonios reales, autorizados y anonimizados. Cada proceso es de
            una persona: lo que sigue son experiencias, no resultados
            garantizados.
          </p>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="sp-sec">
        <img className="sp-sec__glow sp-sec__glow--right" src="/images/degradado-olive.png" alt="" aria-hidden="true" />
        <div className="sp-sec__inner reveal">
          <p className="sp-eyebrow">
            <span className="sp-eyebrow__line" />
            Relatos
          </p>
          <h2>Lo que cuentan quienes atravesaron un proceso.</h2>
          <div className="sp-quotes">
            {TESTIMONIOS.map(([q, c]) => (
              <blockquote className="sp-quote" key={q}>
                <p>«{q}»</p>
                <cite>{c}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* NOTA MÉDICA */}
      <section className="sp-sec sp-sec--pink">
        <div className="sp-sec__inner sp-split reveal">
          <div>
            <p className="sp-eyebrow">
              <span className="sp-eyebrow__line" />
              Cómo leer esto
            </p>
            <h2>Cada caso es único. Y así se trata.</h2>
            <p className="sp-sec__lead">
              En medicina no hay promesas tipo «curamos tu intestino». Hay
              procesos clínicos: comprensión, plan, seguimiento y ajustes. Lo
              que una persona experimenta no predice lo que otra va a
              experimentar — y cualquier profesional serio lo dice con
              claridad.
            </p>
          </div>
          <div className="sp-box">
            <h3>Tu historia es tuya</h3>
            <p>
              Si atravesaste un proceso con nosotras y querés compartir tu
              experiencia, podés escribirnos. Solo se publican relatos
              autorizados, sin datos identificables y sin alterar el sentido
              original.
            </p>
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
            Tu proceso
          </p>
          <h2>¿Querés entender qué está pasando?</h2>
          <p className="sp-cta__sub">
            El primer paso no es un tratamiento: es una valoración donde se
            comprende tu caso con tiempo y criterio médico.
          </p>
          <div className="sp-cta__btns">
            <a className="pill sp-cta__primary" href="/solicitar-valoracion">Solicitar una valoración</a>
            <a className="pill" href="/programa">Conocer el programa</a>
          </div>
        </div>
      </section>
    </div>
  );
}

import "../st-pages.css";

export const metadata = {
  title: "Recursos · Journal | Dra. Alejandra Stivaletta",
  description:
    "Artículos, videos, guías, newsletter y masterclasses sobre salud digestiva, hormonal, metabolismo, inflamación, longevidad, medicina preventiva, microbiota y salud de la mujer.",
};

const CATEGORIAS = [
  "Gut Health",
  "Hormonal Health",
  "Metabolism",
  "Inflammation",
  "Longevity",
  "Preventive Medicine",
  "Microbiome",
  "Women's Health",
];

const TIPOS = [
  ["01.", "Artículos", "Lecturas clínicas y contemporáneas sobre los temas que más consultan las pacientes."],
  ["02.", "Videos", "Explicaciones breves de conceptos clave, en el mismo lenguaje de la consulta."],
  ["03.", "Guías", "Material de referencia para ordenar información antes o después de una valoración."],
  ["04.", "Newsletter", "Actualizaciones por email: nuevos contenidos, sin ruido y sin promesas."],
  ["05.", "Masterclasses", "Sesiones profundas en vivo sobre ejes completos: digestión, hormonas, longevidad."],
];

export default function RecursosPage() {
  return (
    <div className="sp">
      {/* HERO */}
      <section className="sp-hero">
        <img className="sp-hero__glow" src="/images/degradado-olive.png" alt="" aria-hidden="true" />
        <div className="sp-hero__inner">
          <p className="sp-eyebrow">
            <span className="sp-eyebrow__line" />
            Recursos · Journal
          </p>
          <h1>Información médica, bien explicada.</h1>
          <p className="sp-hero__sub">
            Un espacio de contenido clínico, contemporáneo y cercano: lo mismo
            que trabajamos en consulta, pero en formato lectura, video o
            masterclass.
          </p>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="sp-sec sp-sec--dark">
        <img className="sp-sec__glow sp-sec__glow--left" src="/images/degradado-cream.png" alt="" aria-hidden="true" />
        <div className="sp-sec__inner">
          <p className="sp-eyebrow sp-eyebrow--gold">
            <span className="sp-eyebrow__line" />
            Categorías
          </p>
          <h2>Ocho ejes de contenido.</h2>
          <ul className="sp-tags sp-tags--gold">
            {CATEGORIAS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FORMATOS */}
      <section className="sp-sec">
        <img className="sp-sec__glow sp-sec__glow--right" src="/images/degradado-olive.png" alt="" aria-hidden="true" />
        <div className="sp-sec__inner">
          <p className="sp-eyebrow">
            <span className="sp-eyebrow__line" />
            Formatos
          </p>
          <h2>Cinco maneras de consumir el contenido.</h2>
          <div className="sp-cards">
            {TIPOS.map(([n, t, d]) => (
              <div className="sp-card" key={t}>
                <span className="sp-card__n">{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRÓXIMAMENTE */}
      <section className="sp-sec sp-sec--pink">
        <div className="sp-sec__inner sp-split">
          <div>
            <p className="sp-eyebrow">
              <span className="sp-eyebrow__line" />
              En camino
            </p>
            <h2>El journal se está preparando.</h2>
            <p className="sp-sec__lead">
              Estamos cerrando los primeros artículos y guías con el mismo
              criterio clínico de la consulta: ciencia bien explicada, sin
              tono pseudocientífico y sin promesas fáciles. Suscribite a la
              newsletter para recibir el lanzamiento.
            </p>
          </div>
          <div className="sp-box">
            <h3>Mientras tanto</h3>
            <p>
              Si tenés una pregunta clínica concreta, el mejor espacio para
              responderla es una valoración inicial — no un comentario
              genérico de blog.
            </p>
            <p style={{ marginTop: "16px" }}>
              <a className="pill" href="/solicitar-valoracion">Solicitar una valoración</a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-cta">
        <img className="sp-cta__bg" src="/images/alejandra-cta.jpg" alt="" aria-hidden="true" />
        <div className="sp-cta__shade" />
        <img className="sp-cta__glow" src="/images/degradado-cream.png" alt="" aria-hidden="true" />
        <div className="sp-cta__inner">
          <p className="sp-eyebrow sp-eyebrow--gold">
            <span className="sp-eyebrow__line" />
            ¿Tu caso?
          </p>
          <h2>La información general nunca reemplaza una consulta.</h2>
          <p className="sp-cta__sub">
            Si algo de esto te resonó, el siguiente paso es comprender tu caso
            en particular.
          </p>
          <div className="sp-cta__btns">
            <a className="pill sp-cta__primary" href="/solicitar-valoracion">Solicitar una valoración</a>
            <a className="pill" href="/faq">Ver FAQ</a>
          </div>
        </div>
      </section>
    </div>
  );
}

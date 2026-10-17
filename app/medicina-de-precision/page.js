import Image from "next/image";
import { AREAS } from "../areas";
import "./medicina.css";

export const metadata = {
  title: "Medicina de Precisión | Dra. Alejandra Stivaletta",
  description:
    "Una medicina diseñada alrededor de ti. Historia clínica, síntomas, biomarcadores, microbiota, metabolismo y contexto humano. Datos + medicina + contexto humano.",
};

const ANALIZA = [
  "Historia clínica",
  "Síntomas",
  "Antecedentes",
  "Estilo de vida",
  "Biomarcadores",
  "Microbiota cuando corresponde",
  "Metabolismo",
  "Salud hormonal",
  "Contexto emocional y ambiental",
  "Evolución a lo largo del tiempo",
];

const PUNTOS = [
  "Entender por qué distintos síntomas aparecen al mismo tiempo.",
  "Detectar señales tempranas y actuar con anticipación.",
  "Tomar decisiones de salud a partir de información, no de suposiciones.",
  "Seguir tu evolución y ajustar el plan en el tiempo.",
];

export default function MedicinaDePrecisionPage() {
  return (
    <div className="mp">
      {/* 01 — HERO */}
      <section className="mp-hero" id="inicio">
        <img className="mp-hero__glow" src="/images/degradado-cream.png" alt="" aria-hidden="true" />
        <div className="mp-hero__text">
          <p className="mp-eyebrow mp-eyebrow--wine">
            <span className="mp-eyebrow__line" />
            Medicina de Precisión
          </p>
          <h1>Una medicina diseñada alrededor de ti.</h1>
          <p className="mp-hero__concept">Datos + medicina + contexto humano.</p>
          <div className="mp-hero__btns">
            <a className="pill" href="/solicitar-valoracion">Solicitar una valoración</a>
            <a className="pill pill--soft" href="/#metodo">Conocer el método</a>
          </div>
        </div>
        <div className="mp-hero__photo">
          <Image
            src="/images/alejandra-precision.jpg"
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
            <h2>No se trata de tener más datos, sino de leerlos en contexto.</h2>
          </div>
          <div className="mp-manifesto__right">
            <p>
              La medicina de precisión parte de una idea simple: cada persona es
              distinta, y su salud se comprende cuando la información se mira en
              conjunto. Tu historia, tus síntomas, tus hábitos y tus
              biomarcadores cuentan una sola historia, no diez separadas.
            </p>
            <p>
              Por eso este abordaje funciona como un paraguas: reúne las
              distintas áreas —digestiva, metabólica, hormonal, predictiva y de
              longevidad— dentro de una misma mirada médica, con seguimiento en
              el tiempo.
            </p>
            <div className="mp-points">
              <p className="mp-points__label">Qué permite</p>
              <ul>
                {PUNTOS.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
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
              const current = a.href === "/medicina-de-precision";
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

      {/* 05 — SIGUIENTE PASO */}
      <section className="mp-next">
        <div className="mp-next__inner reveal">
          <p className="mp-eyebrow mp-eyebrow--wine">
            <span className="mp-eyebrow__line" />
            El camino
          </p>
          <h2 className="mp-next__title">Cuando querés dar el siguiente paso.</h2>
          <div className="mp-next__grid">
            <a className="mp-next__card" href="/valoracion-inicial">
              <h3>Valoración inicial</h3>
              <p>
                Una sesión médica extensa para comprender tu caso, revisar
                antecedentes y definir prioridades — antes de cualquier
                tratamiento.
              </p>
              <span className="mp-next__go">Conocer la valoración →</span>
            </a>
            <a className="mp-next__card" href="/programa">
              <h3>Programa de 6 meses</h3>
              <p>
                El método Dra. Alejandra Stivaletta: plan personalizado,
                seguimiento longitudinal y ajustes según tu evolución.
              </p>
              <span className="mp-next__go">Conocer el programa →</span>
            </a>
          </div>
        </div>
      </section>

      {/* 06 — CTA FINAL */}
      <section className="mp-cta" id="contacto">
        <img className="mp-cta__bg" src="/images/alejandra-cta.jpg" alt="" aria-hidden="true" />
        <div className="mp-cta__shade" />
        <img className="mp-cta__glow" src="/images/degradado-cream.png" alt="" aria-hidden="true" />
        <div className="mp-cta__inner reveal">
          <p className="mp-eyebrow">
            <span className="mp-eyebrow__line" />
            Solicitar valoración
          </p>
          <h2>¿Te gustaría entender qué está pasando?</h2>
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

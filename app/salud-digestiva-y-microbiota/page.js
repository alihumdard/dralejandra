import Image from "next/image";
import { AREAS } from "../areas";
import "../medicina-de-precision/medicina.css";

export const metadata = {
  title: "Salud digestiva y microbiota | Dra. Alejandra Stivaletta",
  description:
    "El intestino puede contar mucho más que una historia digestiva. Síntomas, alimentación, microbiota e inflamación leídos en conjunto, con seguimiento en el tiempo.",
};

const ANALIZA = [
  "Síntomas digestivos",
  "Alimentación",
  "Microbiota cuando corresponde",
  "Función intestinal",
  "Niveles de inflamación",
  "Metabolismo",
  "Salud hormonal",
  "Medicación y suplementos",
  "Estrés y contexto",
  "Evolución en el tiempo",
];

const PUNTOS = [
  "Entender qué está pasando con tu digestión, más allá del síntoma.",
  "Conectar síntomas digestivos con alimentación, microbiota e inflamación.",
  "Definir un plan realista, con prioridades concretas.",
  "Ajustar el rumbo según cómo evolucionás.",
];

const HREF = "/salud-digestiva-y-microbiota";

export default function SaludDigestivaPage() {
  return (
    <div className="mp">
      {/* 01 — HERO */}
      <section className="mp-hero" id="inicio">
        <img className="mp-hero__glow" src="/images/degradado-cream.png" alt="" aria-hidden="true" />
        <div className="mp-hero__text">
          <p className="mp-eyebrow mp-eyebrow--wine">
            <span className="mp-eyebrow__line" />
            Salud digestiva y microbiota
          </p>
          <h1>El intestino puede contar mucho más que una historia digestiva.</h1>
          <p className="mp-hero__concept">Digestión, microbiota e inflamación — leídas en conjunto.</p>
          <div className="mp-hero__btns">
            <a className="pill" href="/solicitar-valoracion">Solicitar una valoración</a>
            <a className="pill pill--soft" href="/#metodo">Conocer el método</a>
          </div>
        </div>
        <div className="mp-hero__photo">
          <Image
            src="/images/client-4.png"
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
            <h2>Cuando el intestino no está bien, algo más se mueve con él.</h2>
          </div>
          <div className="mp-manifesto__right">
            <p>
              El sistema digestivo no trabaja solo. La microbiota conversa con el
              sistema inmune, el metabolismo, las hormonas y hasta con el ánimo.
              Por eso un síntoma digestivo muchas veces llega acompañado de otras
              cosas que parecen no tener relación.
            </p>
            <p>
              El abordaje empieza por entender tu historia completa: cómo comés,
              cómo duermes, qué medicación tomás, cómo estás. Los estudios se
              piden cuando van a aportar una respuesta, no para acumular datos.
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

      {/* 03.5 — CONEXIONES */}
      <section className="mp-conn">
        <div className="mp-conn__inner reveal">
          <p className="mp-eyebrow mp-eyebrow--wine">
            <span className="mp-eyebrow__line" />
            La conversación interna
          </p>
          <h2 style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "clamp(28px, 3.6vw, 64px)", color: "var(--rose)", margin: 0, lineHeight: 1.05, letterSpacing: "-0.015em" }}>
            La microbiota conversa con todo el cuerpo.
          </h2>
          <p style={{ color: "var(--olive-text)", fontSize: "clamp(14px, 1.1vw, 18px)", lineHeight: 1.65, maxWidth: "40em", margin: "20px 0 0" }}>
            El abordaje es científico y proporcional: no todo nace en el
            intestino, pero sí hay conexiones clínicas demostradas que vale la
            pena leer en contexto.
          </p>
          <div className="mp-conn__grid">
            <div className="mp-conn__item">
              <h3>Inflamación</h3>
              <p>La barrera intestinal y el sistema inmune dialogan constantemente; cuando ese diálogo se desordena, la inflamación puede verse de reflejo en otros sistemas.</p>
            </div>
            <div className="mp-conn__item">
              <h3>Metabolismo</h3>
              <p>La composición de la microbiota se asocia con cómo se procesa la glucemia, el peso y el perfil lipídico.</p>
            </div>
            <div className="mp-conn__item">
              <h3>Inmunidad</h3>
              <p>Gran parte del sistema inmune vive en el intestino. Su equilibrio depende, en parte, de lo que pasa ahí.</p>
            </div>
            <div className="mp-conn__item">
              <h3>Bienestar digestivo</h3>
              <p>Hinchazón, tránsito, molestias: síntomas con mecanismos múltiples donde la microbiota tiene un lugar real.</p>
            </div>
            <div className="mp-conn__item">
              <h3>Energía</h3>
              <p>Un eje digestivo desordenado consume recursos. Ordenarlo suele notarse en los niveles de energía del día a día.</p>
            </div>
            <div className="mp-conn__item">
              <h3>Salud global</h3>
              <p>Hormonas, ánimo, sueño: la evidencia crece sobre conexiones que hoy ya forman parte de la práctica clínica seria.</p>
            </div>
          </div>
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
        <img className="mp-cta__bg" src="/images/client-3.png" alt="" aria-hidden="true" />
        <div className="mp-cta__shade" />
        <img className="mp-cta__glow" src="/images/degradado-cream.png" alt="" aria-hidden="true" />
        <div className="mp-cta__inner reveal">
          <p className="mp-eyebrow">
            <span className="mp-eyebrow__line" />
            Solicitar valoración
          </p>
          <h2>¿Querés entender qué está pasando con tu digestión?</h2>
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

import Image from "next/image";
import "../st-pages.css";

export const metadata = {
  title: "Dra. Alejandra Stivaletta | Sobre mí",
  description:
    "Soy Alejandra y desde chica quise ser médica. Medicina con ciencia, atención con tiempo. Medicina integrativa, funcional, digestiva, de precisión, prevención y longevidad.",
};

const MIRADA = [
  ["01.", "Medicina integrativa", "Cuerpo y síntomas leídos como un sistema, no como piezas sueltas."],
  ["02.", "Medicina funcional", "Busca el origen de los desequilibrios, no solo el nombre del síntoma."],
  ["03.", "Salud digestiva", "El eje digestivo como ventana privilegiada de la salud global."],
  ["04.", "Microbiota", "Un eje conversando con inmunidad, metabolismo y hormonas."],
  ["05.", "Epigenética", "Tu contexto y tus hábitos también escriben en tu biología."],
  ["06.", "Medicina de precisión", "Un plan diseñado alrededor de cada persona, no al revés."],
  ["07.", "Prevención", "Anticiparse con información, no esperar a que algo pase."],
  ["08.", "Longevidad", "Vivir mejor durante más tiempo, con evidencia y sin obsesiones."],
  ["09.", "Formación médica", "Base clínica sólida y actualización permanente."],
  ["10.", "Oncología", "Formación y experiencia en cáncer, integradas con respeto y sin sobredimensionar."],
];

const MANERA = [
  "Escuchar antes de interpretar.",
  "Comprender antes de intervenir.",
  "Medir antes de asumir.",
  "Acompañar después de indicar.",
];

export default function AlejandraPage() {
  return (
    <div className="sp">
      {/* HERO + RETRATO */}
      <section className="sp-sec" style={{ paddingTop: "clamp(120px, 16vh, 170px)", borderBottom: "none" }}>
        <div className="sp-sec__inner sp-portrait reveal">
          <div className="sp-portrait__img">
            <Image
              src="/images/alejandra-sobre.jpg"
              alt="Dra. Alejandra Stivaletta"
              fill
              sizes="(max-width: 767px) 100vw, 40vw"
              quality={82}
              priority
            />
          </div>
          <div className="sp-portrait__body">
            <p className="sp-eyebrow">
              <span className="sp-eyebrow__line" />
              Dra. Alejandra Stivaletta
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(30px, 3.8vw, 68px)",
                lineHeight: "1.03",
                color: "var(--rose)",
                margin: "0 0 20px",
                letterSpacing: "-0.015em",
              }}
            >
              Soy Alejandra y desde chica quise ser médica.
            </h1>
            <p>
              Medicina con ciencia. Atención con tiempo. Desde el principio me
              interesó entender por qué a cada persona le pasa lo que le pasa —
              y por qué rara vez una sola respuesta alcanza.
            </p>
            <p>
              Hoy mi práctica une la mirada clínica tradicional con medicina
              integrativa, funcional y de precisión: escuchar tu historia,
              leer tus datos en contexto y construir un plan que se sostenga en
              el tiempo, estos espacios permiten sostener el proceso en el tiempo con coherencia clínica y personal.
            </p>
          </div>
        </div>
      </section>

      {/* MI MODO DE EJERCER */}
      <section className="sp-sec sp-sec--pink">
        <div className="sp-sec__inner reveal">
          <p className="sp-eyebrow">
            <span className="sp-eyebrow__line" />
            Mi manera de ejercer la medicina
          </p>
          <ul className="sp-manifesto__lines">
            {MANERA.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* MI MIRADA */}
      <section className="sp-sec sp-sec--dark">
        <img className="sp-sec__glow sp-sec__glow--left" src="/images/degradado-cream.png" alt="" aria-hidden="true" />
        <div className="sp-sec__inner reveal">
          <p className="sp-eyebrow sp-eyebrow--gold">
            <span className="sp-eyebrow__line" />
            Mi mirada
          </p>
          <h2>Diez lugares desde donde miro la salud.</h2>
          <div className="sp-cards sp-cards--4">
            {MIRADA.map(([n, t, d]) => (
              <div className="sp-card" key={t}>
                <span className="sp-card__n">{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
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
            Trabajemos juntas
          </p>
          <h2>¿Te gustaría entender qué está pasando?</h2>
          <p className="sp-cta__sub">
            Solicitá una valoración. Primero se comprende tu caso; después se
            decide el camino.
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

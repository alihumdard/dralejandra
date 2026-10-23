import "../st-pages.css";

export const metadata = {
  title: "Equipo | Dra. Alejandra Stivaletta",
  description:
    "Una mirada integral necesita más de una disciplina. Profesionales colaboradores que amplían el abordaje cuando el caso lo requiere — con la autoridad clínica central en la Dra. Stivaletta.",
};

const COLABORADORES = [
  ["01.", "Nutrición", "Acompañamiento alimentario conectado con el plan médico: digestión, metabolismo y hábitos sostenibles."],
  ["02.", "Psicología", "El contexto emocional también es clínica. Apoyo cuando el proceso lo requiere."],
  ["03.", "Endocrinología", "Segunda opinión médica para casos que requieren un recorte hormonal más específico."],
  ["04.", "Gastroenterología", "Coordinación con especialistas digestivos cuando el caso lo necesita."],
];

export default function EquipoPage() {
  return (
    <div className="sp">
      {/* HERO */}
      <section className="sp-hero">
        <img className="sp-hero__glow" src="/images/degradado-olive.png" alt="" aria-hidden="true" />
        <div className="sp-hero__inner">
          <p className="sp-eyebrow">
            <span className="sp-eyebrow__line" />
            Equipo
          </p>
          <h1>Una mirada integral necesita más de una disciplina.</h1>
          <p className="sp-hero__sub">
            La autoridad clínica del proceso es de la Dra. Alejandra
            Stivaletta. Cuando el caso lo requiere, se suma una red de
            profesionales colaboradores para ampliar el abordaje.
          </p>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="sp-sec sp-sec--pink">
        <div className="sp-sec__inner sp-split reveal">
          <div>
            <p className="sp-eyebrow">
              <span className="sp-eyebrow__line" />
              Cómo funciona
            </p>
            <h2>Un equipo, un solo criterio médico.</h2>
            <p className="sp-sec__lead">
              No se trata de sumar profesionales por sumar. El equipo se activa
              cuando un caso lo necesita, y siempre con dirección clínica única:
              la de Alejandra. Así el proceso se mantiene coherente, sin
              indicaciones dispersas ni espejos que no conversan entre sí.
            </p>
            <ul className="sp-list sp-list--check">
              <li>Derivaciones puntuales, nunca circuitos eternos.</li>
              <li>Los colaboradores reciben el contexto clínico del proceso.</li>
              <li>La decisión final del plan siempre es médica y personal.</li>
            </ul>
          </div>
          <div className="sp-box">
            <h3>La marca</h3>
            <p>
              Detrás hay equipo, pero la marca —y la relación médica— es Dra.
              Alejandra Stivaletta. Tu información, tu proceso y tu confianza
              se manejan con un solo interlocutor clínico.
            </p>
          </div>
        </div>
      </section>

      {/* COLABORADORES */}
      <section className="sp-sec sp-sec--dark">
        <img className="sp-sec__glow sp-sec__glow--right" src="/images/degradado-cream.png" alt="" aria-hidden="true" />
        <div className="sp-sec__inner reveal">
          <p className="sp-eyebrow sp-eyebrow--gold">
            <span className="sp-eyebrow__line" />
            Disciplinas
          </p>
          <h2>Colaboradores según corresponda.</h2>
          <div className="sp-cards">
            {COLABORADORES.map(([n, t, d]) => (
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
        <img className="sp-cta__bg" src="/images/client-3.png" alt="" aria-hidden="true" />
        <div className="sp-cta__shade" />
        <img className="sp-cta__glow" src="/images/degradado-cream.png" alt="" aria-hidden="true" />
        <div className="sp-cta__inner reveal">
          <p className="sp-eyebrow sp-eyebrow--gold">
            <span className="sp-eyebrow__line" />
            Primer paso
          </p>
          <h2>Empezá por comprender tu caso.</h2>
          <p className="sp-cta__sub">
            La valoración inicial define si este proceso —con o sin
            colaboradores— es el adecuado para vos.
          </p>
          <div className="sp-cta__btns">
            <a className="pill sp-cta__primary" href="/solicitar-valoracion">Solicitar una valoración</a>
            <a className="pill" href="/alejandra">Conocer a Alejandra</a>
          </div>
        </div>
      </section>
    </div>
  );
}

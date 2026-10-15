"use client";
import Image from "next/image";
import { useState } from "react";

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

const ANALIZA = [
  "Historia clínica", "Microbiota",
  "Síntomas", "Metabolismo",
  "Antecedentes", "Salud hormonal",
  "Estilo de vida", "Contexto emocional y ambiental",
  "Biomarcadores", "Evolución a lo largo del tiempo",
];

const PARA_QUIEN = [
  ["01.", "SALUD DIGESTIVA", "Tenés inflamación, molestias intestinales, digestiones difíciles o síntomas recurrentes que todavía no lograste ordenar."],
  ["02.", "ENERGÍA Y METABOLISMO", "Experimentás fatiga, cambios de peso, alteraciones metabólicas o sensación de falta de energía que impacta en tu día a día."],
  ["03.", "SALUD HORMONAL", "Estás atravesando cambios hormonales, perimenopausia o menopausia y querés comprender lo que te está pasando dentro de una mirada médica más amplia."],
  ["04.", "PREVENCIÓN", "No necesariamente estás enferma, pero querés entender mejor tu estado de salud, conocer tus riesgos y empezar a cuidarte con anticipación."],
  ["05.", "LONGEVIDAD Y BIENESTAR", "Querés trabajar sobre cómo vivir y envejecer mejor, con más energía, funcionalidad y autonomía."],
];

const COMO_TRABAJAMOS = [
  {
    id: "preconsulta",
    n: "01.",
    title: "Preconsulta",
    desc: "La preconsulta es un primer espacio para orientarte, conocer tu motivo de consulta y explicarte cómo trabaja Alejandra. Permite entender si este enfoque es el adecuado para vos y cuál sería el siguiente paso recomendado.",
    btn: "Solicitar preconsulta",
    href: "#contacto",
  },
  {
    id: "consulta",
    n: "02.",
    title: "Consulta individual",
    desc: "Para algunos casos, puede indicarse una consulta individual como instancia inicial o como necesidad puntual. Es un espacio de evaluación médica; cuando el caso lo requiere, Alejandra prioriza procesos con seguimiento y continuidad.",
    btn: "Consultar por esta opción",
    href: "#contacto",
  },
  {
    id: "packs",
    n: "03.",
    title: "Packs de consultas",
    desc: "Los packs están pensados para quienes necesitan un abordaje más ordenado, con seguimiento y una mirada longitudinal del proceso. En lugar de consultas aisladas, permiten trabajar con mayor continuidad y construir un plan más coherente en el tiempo.",
    btn: "Quiero conocer los packs",
    href: "#contacto",
  },
  {
    id: "seguimiento",
    n: "04.",
    title: "Seguimiento extenso",
    desc: "En los casos que lo requieran, Alejandra trabaja con procesos más amplios y personalizados, orientados al seguimiento clínico, la interpretación médica y la evolución del paciente a lo largo del tiempo. La indicación se define una vez comprendido cada caso.",
    btn: "Solicitar información",
    href: "#contacto",
  },
];

const DIFERENCIAL = [
  "Escuchar antes de interpretar.",
  "Comprender antes de intervenir.",
  "Medir antes de asumir.",
  "Acompañar después de indicar.",
];

const PROGRAMA_PASOS = [
  "Valoración inicial",
  "Interpretación médica",
  "Plan personalizado",
  "Seguimiento longitudinal",
  "Ajustes según evolución",
  "Educación",
  "Consolidación",
];

const AREAS = [
  ["MEDICINA DE PRECISIÓN", "Una medicina diseñada alrededor de ti. Datos, biomarcadores y contexto humano."],
  ["SALUD DIGESTIVA Y MICROBIOTA", "El intestino puede contar mucho más que una historia digestiva."],
  ["MEDICINA PREDICTIVA", "No esperar a que algo pase para empezar a mirar."],
  ["LONGEVIDAD", "Vivir más importa. Vivir mejor, todavía más."],
];

const TESTIMONIOS = [
  ["Llegué con cinco síntomas que parecían no tener relación.", "Por primera vez alguien los miró todos juntos y logró armar un plan que realmente me funcionó."],
  ["Por primera vez entendí por qué me estaban pasando distintas cosas al mismo tiempo.", "Me sentí escuchada, acompañada y con explicaciones claras."],
  ["Sentí que había un plan y alguien siguiendo mi evolución.", "No es solo una consulta, es un proceso. Estoy muy agradecida."],
];

const JOURNAL = [
  ["GUT HEALTH", "La importancia de una microbiota saludable.", "Cómo influye en tu energía, inmunidad y bienestar general."],
  ["HORMONAL HEALTH", "Perimenopausia: qué cambia y cómo acompañarlo.", "Síntomas, herramientas y un enfoque integral."],
  ["LONGEVIDAD", "Metabolismo lento: señales y estrategias.", "Cómo identificarlo y qué podés hacer."],
];

const FAQS = [
  ["¿Trabajás únicamente problemas digestivos?", "No. Aunque la salud digestiva y la microbiota son áreas importantes del enfoque, Alejandra también aborda síntomas metabólicos, hormonales e inflamatorios, y procesos de prevención y longevidad."],
  ["¿Necesito tener estudios antes de contactarme?", "No necesariamente. Si ya tenés estudios, el equipo te indicará cómo compartirlos. Si no los tenés, el proceso puede comenzar con tu historia clínica y tu motivo de consulta."],
  ["¿La atención puede ser online?", "La modalidad depende de las características del caso y de la disponibilidad del servicio."],
  ["¿Puedo hacer solo una consulta?", "En algunos casos puede realizarse una consulta individual. Cuando resulta adecuado, Alejandra prioriza procesos de seguimiento más ordenados y completos."],
  ["¿Qué pasa después de completar el formulario?", "El equipo revisará tu solicitud y se pondrá en contacto para orientarte sobre el siguiente paso."],
  ["¿Los estudios, tests o suplementos están incluidos?", "No necesariamente. Su necesidad se define individualmente; cuando corresponda, secretaría informará los presupuestos después de la valoración."],
  ["¿Puedo consultar precios por WhatsApp?", "Sí. Podés escribir a secretaría para recibir orientación sobre modalidades, disponibilidad y los valores confirmados."],
];

function FAQ({ pregunta, respuesta }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq__item${open ? " faq__item--open" : ""}`} onClick={() => setOpen(!open)}>
      <div className="faq__q">
        <span>{pregunta}</span>
        <span className="faq__icon">{open ? "−" : "+"}</span>
      </div>
      {open && <p className="faq__a">{respuesta}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero" id="inicio">
        <Image className="hero__bg hero__bg--desktop" src="/images/hero.png" alt="Dra. Alejandra Stivaletta" fill sizes="100vw" quality={90} priority />
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
        <img className="problem__bg" src="/images/problema.jpg" alt="" />
        <div className="problem__photo">
          <img src="/images/problema.jpg" alt="" />
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

      {/* 04 — PROPUESTA */}
      <section className="propuesta">
        <div className="propuesta__inner">
          <div className="propuesta__left">
            <p className="propuesta__eyebrow">
              <span className="propuesta__eyebrow-line" />
              Medicina de Precisión
            </p>
            <h2>Una medicina diseñada alrededor de ti.</h2>
            <p className="propuesta__concepto">Datos + medicina + contexto humano.</p>
          </div>
          <div className="propuesta__right">
            <p className="propuesta__sublabel">En cada persona analizo:</p>
            <ul className="propuesta__tags">
              {ANALIZA.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 05 — PARA QUIÉN */}
      <section className="paraquien" id="para-quien">
        <div className="paraquien__inner">
          <h2>Este abordaje puede ser para vos si sentís que algo en tu salud necesita ser comprendido de una forma más integral.</h2>
          <div className="paraquien__grid">
            {PARA_QUIEN.map(([n, t, d]) => (
              <div className="paraquien__card" key={n}>
                <span className="paraquien__n">{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
          <p className="paraquien__cierre">No se trata solamente de mirar un síntoma aislado, sino de comprender cómo se relacionan entre sí tu historia clínica, tus hábitos, tu contexto y tu biología.</p>
          <div className="paraquien__btns">
            <a className="pill" href="#como-trabajamos">Quiero saber cómo trabajamos</a>
            <a className="pill pill--soft" href="https://wa.me/PENDIENTE" target="_blank" rel="noopener noreferrer">Hablar con secretaría</a>
          </div>
        </div>
      </section>

      {/* 05b — CÓMO TRABAJAMOS */}
      <section className="comotrabajamos" id="como-trabajamos">
        <div className="comotrabajamos__inner">
          <div className="comotrabajamos__head">
            <p className="comotrabajamos__eyebrow">
              <span className="comotrabajamos__eyebrow-line" />
              Cómo trabajamos
            </p>
            <h2>Cada paciente necesita un recorrido distinto.</h2>
            <p className="comotrabajamos__sub">Por eso, el primer paso es entender qué necesitás y cuál es la mejor forma de acompañarte.</p>
          </div>
          <div className="comotrabajamos__grid">
            {COMO_TRABAJAMOS.map((item) => (
              <div key={item.id} className="comotrabajamos__card">
                <span className="comotrabajamos__n">{item.n}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a className="pill comotrabajamos__btn" href={item.href}>{item.btn}</a>
              </div>
            ))}
          </div>
          <p className="comotrabajamos__nota">Los precios de tests, estudios complementarios y otros recursos no figuran en la web: secretaría los presupuestará una vez valorado cada caso.</p>
          <a className="pill pill--soft comotrabajamos__wa" href="https://wa.me/PENDIENTE" target="_blank" rel="noopener noreferrer">Tengo dudas, quiero hablar con secretaría</a>
        </div>
      </section>

      {/* 06 — DIFERENCIAL */}
      <section className="diferencial">
        <div className="diferencial__inner">
          <p className="diferencial__eyebrow">
            <span className="diferencial__line" />
            Por qué es diferente
          </p>
          <div className="diferencial__lines">
            {DIFERENCIAL.map((l, i) => (
              <div key={i} className="diferencial__item" data-n={`0${i + 1}`}>
                <span className="diferencial__n">0{i + 1}.</span>
                <p>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — PROGRAMA */}
      <section className="programa">
        <img className="programa__bg" src="/images/metodo.png" alt="" />
        <div className="programa__shade" />
        <div className="programa__inner">
          <div className="programa__head">
            <p className="programa__eyebrow">
              <span className="programa__eyebrow-line" />
              Programa de Precisión
            </p>
            <h2>Método Dra. Alejandra Stivaletta</h2>
            <p className="programa__sub">Programa médico personalizado de 6 meses</p>
            <div className="programa__tags">
              <span className="programa__tag">📅 Duración: 6 meses</span>
              <span className="programa__tag">🖥 Modalidad: Presencial + Online</span>
            </div>
          </div>
          <div className="programa__flow">
            {PROGRAMA_PASOS.map((p) => (
              <div key={p} className="programa__flow-item">
                <div className="programa__step">{p}</div>
              </div>
            ))}
          </div>
          <div className="programa__foot">
            <a className="pill" href="#contacto">Solicitar valoración inicial</a>
          </div>
        </div>
      </section>

      {/* 08 — SOBRE ALEJANDRA */}
      <section className="sobre" id="alejandra">
        <div className="sobre__photo">
          <img src="/images/problema.jpg" alt="Dra. Alejandra Stivaletta" />
        </div>
        <div className="sobre__text">
          <p className="sobre__eyebrow">
            <span className="sobre__eyebrow-line" />
            Sobre Alejandra
          </p>
          <h2>Medicina con ciencia.<br />Atención con tiempo.</h2>
          <p className="sobre__bio">Soy Alejandra Stivaletta, médica. Desde muy chica sentí la vocación de cuidar, y con los años esa vocación se transformó en una manera muy personal de ejercer la medicina.</p>
          <p className="sobre__bio">A lo largo de mi recorrido fui entendiendo que la salud no puede abordarse únicamente desde un diagnóstico o un síntoma aislado. Aprendí a mirar al paciente más allá de su enfermedad, comprendiendo que su historia, su entorno, sus hábitos y su forma de vivir también forman parte de su salud.</p>
          <p className="sobre__bio sobre__bio--cite">&ldquo;No mirar únicamente qué le ocurre a una persona, sino intentar comprender quién es, cómo vive y qué puede estar influyendo en su salud. La salud es conexión.&rdquo;</p>
          <div className="sobre__formacion">
            <p className="sobre__formacion-label">Formación</p>
            <ul className="sobre__formacion-list">
              <li>Médica. Universidad Nacional de Rosario, Argentina (2008). Título homologado en España (2009).</li>
              <li>Especialista en Medicina Familiar y Comunitaria, vía MIR, Palma de Mallorca (2011–2016).</li>
              <li>Máster en Nutrición, Medicina y Práctica Ortomolecular (SESAP, 2022). Fellow en Salud de Precisión, Clínica Cellmedik (2023).</li>
              <li>Miembro afiliada a la Sociedad Española de Salud de Precisión.</li>
            </ul>
          </div>
          <div className="sobre__btns">
            <a className="pill" href="#como-trabajamos">Conocer cómo trabajamos</a>
            <a className="pill pill--soft" href="#contacto">Solicitar preconsulta</a>
          </div>
        </div>
      </section>

      {/* 09 — ÁREAS */}
      <section className="areas" id="areas">
        <div className="areas__inner">
          <div className="areas__head">
            <p className="areas__eyebrow">
              <span className="areas__eyebrow-line" />
              Áreas de expertise
            </p>
            <h2>Áreas de expertise</h2>
          </div>
          <div className="areas__grid">
            {AREAS.map(([t, d], i) => (
              <div key={t} className="areas__card">
                <span className="areas__n">0{i + 1}.</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — TESTIMONIOS */}
      <section className="testimonios">
        <div className="testimonios__inner">
          <p className="testimonios__eyebrow">
            <span className="testimonios__eyebrow-line" />
            Historias reales
          </p>
          <h2>Lo que dicen mis pacientes</h2>
          <div className="testimonios__grid">
            {TESTIMONIOS.map(([q, d], i) => (
              <div key={i} className="testimonios__card">
                <span className="testimonios__quote">&ldquo;</span>
                <p className="testimonios__q">{q}</p>
                <p className="testimonios__d">{d}</p>
                <span className="testimonios__label">Paciente anónima</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11 — JOURNAL */}
      <section className="journal" id="recursos">
        <div className="journal__inner">
          <div className="journal__head">
            <p className="journal__eyebrow">
              <span className="journal__eyebrow-line" />
              Journal / Contenido
            </p>
            <h2>Conocimiento para tu salud</h2>
          </div>
          <div className="journal__grid">
            {JOURNAL.map(([cat, title, excerpt]) => (
              <div key={title} className="journal__card">
                <span className="journal__cat">{cat}</span>
                <h3>{title}</h3>
                <p>{excerpt}</p>
                <a href="#" className="journal__link">Leer artículo →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 — FAQ */}
      <section className="faq" id="faq">
        <div className="faq__inner">
          <div className="faq__left">
            <p className="faq__eyebrow">
              <span className="faq__eyebrow-line" />
              Preguntas frecuentes
            </p>
            <h2>Todo lo que necesitás saber antes de empezar.</h2>
          </div>
          <div className="faq__list">
            {FAQS.map(([p, r]) => (
              <FAQ key={p} pregunta={p} respuesta={r} />
            ))}
          </div>
        </div>
      </section>

      {/* 13 — CONTACTO */}
      <section className="contacto" id="contacto">
        <div className="contacto__inner">
          <div className="contacto__head">
            <p className="contacto__eyebrow">
              <span className="contacto__eyebrow-line" />
              Contacto
            </p>
            <h2>Empezá por entender qué está pasando.</h2>
            <p className="contacto__sub">Si querés saber cuál es la mejor forma de trabajar tu caso, podés completar el formulario o escribir a secretaría.</p>
          </div>
          <div className="contacto__cols">
            <form className="contacto__form" onSubmit={(e) => { e.preventDefault(); }}>
              <div className="contacto__row contacto__row--2">
                <div className="contacto__field">
                  <label>Nombre y apellido</label>
                  <input type="text" name="nombre" required placeholder="Tu nombre completo" />
                </div>
                <div className="contacto__field">
                  <label>Edad</label>
                  <input type="number" name="edad" required placeholder="Tu edad" />
                </div>
              </div>
              <div className="contacto__row contacto__row--2">
                <div className="contacto__field">
                  <label>Email</label>
                  <input type="email" name="email" required placeholder="tu@email.com" />
                </div>
                <div className="contacto__field">
                  <label>Teléfono</label>
                  <input type="tel" name="telefono" placeholder="+34 600 000 000" />
                </div>
              </div>
              <div className="contacto__field">
                <label>País / Ciudad</label>
                <input type="text" name="ciudad" placeholder="Madrid, España" />
              </div>
              <div className="contacto__field">
                <label>Motivo de contacto</label>
                <select name="motivo" required>
                  <option value="">Seleccioná una opción</option>
                  <option value="preconsulta">Preconsulta</option>
                  <option value="consulta">Consulta individual</option>
                  <option value="packs">Packs de consultas</option>
                  <option value="seguimiento">Seguimiento extenso</option>
                  <option value="otra">Otra consulta</option>
                </select>
              </div>
              <div className="contacto__field">
                <label>Mensaje breve</label>
                <textarea name="mensaje" rows={4} placeholder="Contanos brevemente qué te trae..."></textarea>
              </div>
              <div className="contacto__field">
                <label>¿Cómo conociste a Alejandra?</label>
                <input type="text" name="referencia" placeholder="Instagram, recomendación, búsqueda..." />
              </div>
              <div className="contacto__privacy">
                <input type="checkbox" id="privacidad" name="privacidad" required />
                <label htmlFor="privacidad">He leído y acepto la <a href="#" className="contacto__privacy-link">política de privacidad</a>.</label>
              </div>
              <button type="submit" className="pill contacto__submit">Enviar solicitud</button>
            </form>
            <div className="contacto__aside">
              <div className="contacto__wa-box">
                <p className="contacto__wa-label">¿Preferís escribir directamente?</p>
                <p className="contacto__wa-desc">Si preferís consultar sobre disponibilidad, modalidades o próximos pasos, podés escribir a secretaría.</p>
                <a className="pill contacto__wa-btn" href="https://wa.me/PENDIENTE" target="_blank" rel="noopener noreferrer">Hablar con secretaría</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

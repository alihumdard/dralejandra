import Image from "next/image";
import { AREAS } from "../areas";
import "../medicina-de-precision/medicina.css";

export const metadata = {
    title: "Longevidad | Dra. Alejandra Stivaletta",
    description: "Vivir más importa. Vivir mejor, todavía más. Músculo, metabolismo, hormonas y hábitos — con evidencia y seguimiento en el tiempo.",
};

const ANALIZA = [
    "Objetivos y contexto",
    "Composición corporal",
    "Músculo y fuerza",
    "Metabolismo",
    "Salud hormonal",
    "Sueño y energía",
    "Actividad física",
    "Alimentación",
    "Marcadores de riesgo",
    "Evolución en el tiempo",
];

const PUNTOS = [
    "Construir hábitos que sostienen tu salud a largo plazo.",
    "Cuidar músculo, metabolismo y energía con un plan concreto.",
    "Acompañar cambios hormonales y cognitivos con evidencia.",
    "Revisar tu evolución y ajustar el rumbo en el tiempo.",
];

const HREF = "/longevidad";

export default function LongevidadPage() {
    return ( <
        div className = "mp" > { /* 01 — HERO */ } <
        section className = "mp-hero"
        id = "inicio" >
        <
        img className = "mp-hero__glow"
        src = "/images/degradado-cream.png"
        alt = ""
        aria - hidden = "true" / >
        <
        div className = "mp-hero__text" >
        <
        p className = "mp-eyebrow mp-eyebrow--wine" >
        <
        span className = "mp-eyebrow__line" / >
        Longevidad <
        /p> <
        h1 > Vivir más importa.Vivir mejor, todavía más. < /h1> <
        p className = "mp-hero__concept" > Calidad de vida, músculo, metabolismo y hábitos— con evidencia. < /p> <
        div className = "mp-hero__btns" >
        <
        a className = "pill"
        href = "/solicitar-valoracion" > Solicitar una valoración < /a> <
        a className = "pill pill--soft"
        href = "/#metodo" > Conocer el método < /a> <
        /div> <
        /div> <
        div className = "mp-hero__photo" >
        <
        Image src = "/images/alejandra-digestiva.jpg"
        alt = "Dra. Alejandra Stivaletta en su consulta"
        fill sizes = "(max-width: 1100px) 100vw, 45vw"
        quality = { 82 }
        priority /
        >
        <
        /div> <
        /section>

        { /* 02 — CONCEPTO */ } <
        section className = "mp-manifesto" >
        <
        img className = "mp-manifesto__glow"
        src = "/images/degradado-olive.png"
        alt = ""
        aria - hidden = "true" / >
        <
        div className = "mp-manifesto__inner reveal" >
        <
        div className = "mp-manifesto__left" >
        <
        p className = "mp-eyebrow mp-eyebrow--wine" >
        <
        span className = "mp-eyebrow__line" / >
        El concepto <
        /p> <
        h2 > La longevidad se cuida todos los días, no se recupera de golpe. < /h2> <
        /div> <
        div className = "mp-manifesto__right" >
        <
        p >
        Envejecer bien no es una cuestión de suerte.Es el resultado de cómo cuidás tu músculo, tu metabolismo, tu sueño y tu energía a lo largo de los años.La evidencia es clara: los hábitos de hoy definen cómo te vas a sentir mañana. <
        /p> <
        p >
        El plan no es igual para todos ni para todos los momentos de la vida.Se arma según tu contexto, tu historia y tus objetivos, y se revisa en el tiempo.Sin modas: con evidencia, seguimiento y ajustes concretos. <
        /p> <
        /div> <
        div className = "mp-points" >
        <
        p className = "mp-points__label" > Qué permite < /p> <
        ul > {
            PUNTOS.map((p) => ( <
                li key = { p } > { p } < /li>
            ))
        } <
        /ul> <
        /div> <
        /div> <
        /section>

        { /* 02.5 — DE QUÉ HABLAMOS */ } <
        section className = "mp-topics" >
        <
        div className = "mp-topics__inner reveal" >
        <
        p className = "mp-eyebrow mp-eyebrow--wine" >
        <
        span className = "mp-eyebrow__line" / >
        De qué hablamos <
        /p> <
        h2 style = {
            { fontFamily: "var(--font-serif), Georgia, serif", fontSize: "clamp(28px, 3.6vw, 64px)", color: "var(--rose)", margin: 0, lineHeight: 1.05, letterSpacing: "-0.015em" } } >
        Longevidad: once territorios, una sola vida. <
        /h2> <
        ul className = "mp-topics__tags" > {
            [
                "Vida saludable",
                "Energía",
                "Función metabólica",
                "Composición corporal",
                "Sueño",
                "Hormonas",
                "Fuerza",
                "Nutrición",
                "Prevención",
                "Salud cognitiva",
                "Autonomía",
            ].map((t) => ( <
                li key = { t } > { t } < /li>
            ))
        } <
        /ul> <
        p className = "mp-topics__note" >
        Longevidad no como obsesión por la edad, sino como capacidad de sostener bienestar y funcionalidad durante más años. <
        /p> <
        /div> <
        /section>

        { /* 03 — QUÉ ANALIZO */ } <
        section className = "mp-analiza" >
        <
        img className = "mp-analiza__glow"
        src = "/images/degradado-cream.png"
        alt = ""
        aria - hidden = "true" / >
        <
        div className = "mp-analiza__inner reveal" >
        <
        div className = "mp-analiza__head" >
        <
        p className = "mp-eyebrow" >
        <
        span className = "mp-eyebrow__line" / >
        Qué analizo <
        /p> <
        h2 > En cada persona analizo < /h2> <
        p className = "mp-analiza__sub" >
        Diez fuentes de información que se leen en conjunto, no por separado. <
        /p> <
        /div> <
        ol className = "mp-analiza__list" > {
            ANALIZA.map((item, i) => ( <
                li className = "mp-analiza__item"
                key = { item } >
                <
                span className = "mp-analiza__n" > { String(i + 1).padStart(2, "0") }. < /span> <
                span className = "mp-analiza__t" > { item } < /span> <
                /li>
            ))
        } <
        /ol> <
        /div> <
        /section>

        { /* 04 — EL PARAGUAS / ÁREAS */ } <
        section className = "mp-areas"
        id = "areas" >
        <
        div className = "mp-areas__inner reveal" >
        <
        div className = "mp-areas__head" >
        <
        p className = "mp-eyebrow" >
        <
        span className = "mp-eyebrow__line" / >
        El paraguas <
        /p> <
        h2 > Cuatro áreas, una misma mirada. < /h2> <
        /div> <
        div className = "mp-areas__grid" > {
            AREAS.map((a) => {
                const current = a.href === HREF;
                return current ? ( <
                    div key = { a.href }
                    className = "mp-areas__card mp-areas__card--current" >
                    <
                    span className = "mp-areas__n" > { a.n } < /span> <
                    h3 > { a.t } < /h3> <
                    p > { a.d } < /p> <
                    span className = "mp-areas__chip" > Esta página < /span> <
                    /div>
                ) : ( <
                    a key = { a.href }
                    href = { a.href }
                    className = "mp-areas__card" >
                    <
                    span className = "mp-areas__n" > { a.n } < /span> <
                    h3 > { a.t } < /h3> <
                    p > { a.d } < /p> <
                    /a>
                );
            })
        } <
        /div> <
        /div> <
        /section>

        { /* 05 — CTA FINAL */ } <
        section className = "mp-cta"
        id = "contacto" >
        <
        img className = "mp-cta__bg"
        src = "/images/client-3.png"
        alt = ""
        aria - hidden = "true" / >
        <
        div className = "mp-cta__shade" / >
        <
        img className = "mp-cta__glow"
        src = "/images/degradado-cream.png"
        alt = ""
        aria - hidden = "true" / >
        <
        div className = "mp-cta__inner reveal" >
        <
        p className = "mp-eyebrow" >
        <
        span className = "mp-eyebrow__line" / >
        Solicitar valoración <
        /p> <
        h2 > ¿Querés empezar a cuidar tu longevidad hoy ? < /h2> <
        p className = "mp-cta__sub" >
        Solicitá una valoración.Nuestro equipo revisará tu información y te contactará para indicarte el siguiente paso. <
        /p> <
        div className = "mp-cta__btns" >
        <
        a className = "pill mp-cta__primary"
        href = "/solicitar-valoracion" >
        Solicitar una valoración <
        /a> <
        a className = "pill"
        href = "/#metodo" >
        Conocer el método <
        /a> <
        /div> <
        /div> <
        /section> <
        /div>
    );
}
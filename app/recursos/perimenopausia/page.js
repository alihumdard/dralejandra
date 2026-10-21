import "../../st-pages.css";
import "../meditacion-sistema-nervioso/article.css";

export const metadata = {
  title: "Perimenopausia: qué cambia en tu cuerpo y cómo acompañarlo | Dra. Alejandra Stivaletta",
  description: "Una etapa de transformación hormonal que merece comprensión, atención y un acompañamiento personalizado.",
};

export default function ArticlePage() {
  return (
    <div className="sp">
      <article className="art">
        <div className="art__header">
          <p className="sp-eyebrow">
            <span className="sp-eyebrow__line" />
            Salud hormonal · Medicina integradora
          </p>
          <h1>Perimenopausia: qué cambia en tu cuerpo y cómo acompañarlo</h1>
          <p className="art__excerpt">Una etapa de transformación hormonal que merece comprensión, atención y un acompañamiento personalizado.</p>
        </div>

        <div className="art__body">
          <p>Hay momentos en los que empezamos a sentir que nuestro cuerpo funciona de una manera diferente. El descanso ya no es igual. Aparecen cambios en el ciclo menstrual, variaciones en el estado de ánimo o una sensación de cansancio que antes no estaba presente.</p>
          <p>Muchas mujeres atraviesan estas experiencias sin saber que podrían estar relacionadas con una etapa natural de la vida: la perimenopausia. Comprender lo que sucede durante esta transición es el primer paso para vivirla con mayor bienestar y tomar decisiones informadas sobre nuestra salud.</p>

          <h2>¿Qué es la perimenopausia?</h2>
          <p>La perimenopausia es el período de transición que precede a la menopausia. Durante esta etapa, los niveles hormonales, especialmente los de estrógenos y progesterona, comienzan a fluctuar. Estos cambios pueden influir en diferentes funciones del organismo.</p>
          <p>Aunque suele comenzar durante la década de los 40, su inicio y duración varían de una mujer a otra. La menopausia se confirma cuando transcurren 12 meses consecutivos sin menstruación, siempre que no exista otra causa que explique su ausencia. La perimenopausia, en cambio, puede extenderse durante varios años y manifestarse de formas muy diferentes.</p>

          <h2>¿Qué cambios podemos experimentar?</h2>
          <p>Los cambios hormonales pueden manifestarse tanto a nivel físico como emocional. Entre los más frecuentes se encuentran:</p>
          <ul>
            <li><strong>Alteraciones del ciclo menstrual:</strong> menstruaciones más cortas, más largas, irregulares o con cambios en la cantidad de sangrado.</li>
            <li><strong>Cambios en el descanso:</strong> dificultades para conciliar el sueño o despertares nocturnos.</li>
            <li><strong>Sofocos y sudoración nocturna:</strong> sensaciones repentinas de calor que pueden interferir con la vida cotidiana.</li>
            <li><strong>Cambios emocionales:</strong> mayor irritabilidad, sensibilidad o fluctuaciones en el estado de ánimo.</li>
            <li><strong>Dificultades de concentración:</strong> sensación de niebla mental u olvidos más frecuentes.</li>
            <li><strong>Cambios urogenitales:</strong> sequedad vaginal, molestias durante las relaciones sexuales o síntomas urinarios.</li>
          </ul>
          <p>Estos síntomas no aparecen necesariamente juntos ni tienen la misma intensidad en todas las personas. Además, algunas manifestaciones pueden tener otras causas médicas, por lo que una valoración profesional resulta fundamental.</p>

          <h2>Hormonas, metabolismo y bienestar</h2>
          <p>Durante la perimenopausia también pueden producirse cambios en la distribución de la grasa corporal, la composición corporal y diferentes indicadores metabólicos. Con la transición hacia la menopausia, adquieren especial importancia la salud ósea, cardiovascular y muscular.</p>
          <p>Pero no todo lo que sucede durante esta etapa puede atribuirse exclusivamente a las hormonas. El envejecimiento, la alimentación, el descanso, la actividad física, los antecedentes personales y el contexto emocional también influyen en cómo nos sentimos.</p>

          <h2>¿Cómo podemos acompañar esta etapa?</h2>
          <p>La perimenopausia no es una enfermedad y no necesita ser tratada por el simple hecho de ocurrir. Sin embargo, cuando los síntomas afectan el bienestar o la calidad de vida, existen diferentes estrategias que pueden ayudar.</p>
          <ul>
            <li><strong>Alimentación y salud metabólica:</strong> una alimentación equilibrada y adaptada a cada persona contribuye al mantenimiento de la masa muscular, la salud ósea y el bienestar general.</li>
            <li><strong>Movimiento y fuerza muscular:</strong> el ejercicio regular, especialmente el entrenamiento de fuerza, es una herramienta valiosa para preservar la masa muscular y favorecer la salud metabólica y ósea.</li>
            <li><strong>Descanso y gestión del estrés:</strong> cuidar los horarios de sueño, identificar los factores que alteran el descanso y desarrollar estrategias para manejar el estrés puede mejorar el bienestar cotidiano.</li>
            <li><strong>Valoración médica personalizada:</strong> en algunas mujeres, los cambios en el estilo de vida pueden resultar suficientes. En otras, puede ser conveniente considerar tratamientos específicos, incluida la terapia hormonal menopáusica cuando esté indicada.</li>
          </ul>

          <h2>¿Es necesario realizar estudios hormonales?</h2>
          <p>En muchas mujeres mayores de 45 años, la perimenopausia puede identificarse a partir de los síntomas y los cambios menstruales, sin necesidad de realizar estudios hormonales de rutina. Esto sucede porque las concentraciones hormonales pueden variar considerablemente de un día a otro.</p>
          <p>En determinadas circunstancias, especialmente cuando los síntomas aparecen antes de lo esperado o existen dudas diagnósticas, el profesional puede recomendar estudios complementarios. Lo importante no es analizar hormonas de manera indiscriminada, sino interpretar cada situación dentro de su contexto clínico.</p>

          <div className="art__cta">
            <p>Si estás experimentando cambios en tu ciclo menstrual, en tu descanso o en tu bienestar general, una valoración médica personalizada puede ayudarte a comprender qué está sucediendo y explorar las opciones más adecuadas para vos.</p>
            <a href="/solicitar-valoracion" className="pill">Solicitar una valoración</a>
          </div>
        </div>
      </article>
    </div>
  );
}

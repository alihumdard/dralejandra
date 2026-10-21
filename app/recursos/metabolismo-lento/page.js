import "../../st-pages.css";
import "../meditacion-sistema-nervioso/article.css";

export const metadata = {
  title: "Metabolismo lento: señales, causas y estrategias para cuidar tu salud | Dra. Alejandra Stivaletta",
  description: "Cómo identificar los cambios de tu metabolismo, comprender sus posibles causas y acompañar a tu cuerpo de manera saludable.",
};

export default function ArticlePage() {
  return (
    <div className="sp">
      <article className="art">
        <div className="art__header">
          <p className="sp-eyebrow">
            <span className="sp-eyebrow__line" />
            Longevidad · Salud metabólica · Medicina integradora
          </p>
          <h1>Metabolismo lento: señales, causas y estrategias para cuidar tu salud</h1>
          <p className="art__excerpt">Cómo identificar los cambios de tu metabolismo, comprender sus posibles causas y acompañar a tu cuerpo de manera saludable.</p>
        </div>

        <div className="art__body">
          <p>¿Sentís que tu cuerpo ya no responde de la misma manera que antes? Tal vez notás que te cuesta más mantener tu peso, que tu energía disminuye a lo largo del día o que ciertos hábitos que antes funcionaban parecen haber dejado de hacerlo.</p>
          <p>Es frecuente atribuir estos cambios a un metabolismo lento. Sin embargo, nuestro metabolismo es mucho más complejo que la velocidad con la que quemamos calorías. Comprender cómo funciona y qué factores pueden modificarlo es fundamental para cuidar nuestra salud desde una perspectiva integral.</p>

          <h2>¿Qué es realmente el metabolismo?</h2>
          <p>El metabolismo es el conjunto de procesos químicos que nuestro organismo realiza constantemente para mantenerse con vida. Gracias a estos procesos podemos obtener y utilizar energía, reparar tejidos, regular nuestra temperatura corporal y sostener funciones esenciales.</p>
          <p>Una parte de nuestro gasto energético corresponde al metabolismo basal: la energía que el cuerpo necesita en reposo para mantener funciones como la respiración, la circulación y la actividad de nuestros órganos. El metabolismo no funciona de manera aislada: está relacionado con nuestra composición corporal, nuestras hormonas, nuestra edad y nuestros hábitos.</p>

          <h2>¿Cuáles son las señales de un metabolismo lento?</h2>
          <p>Muchas personas relacionan determinadas manifestaciones con un metabolismo más lento. Entre las más habituales se encuentran:</p>
          <ul>
            <li>Dificultad para mantener el peso habitual.</li>
            <li>Sensación persistente de cansancio.</li>
            <li>Mayor sensibilidad al frío.</li>
            <li>Estreñimiento.</li>
            <li>Cambios en la composición corporal.</li>
            <li>Menor tolerancia al esfuerzo físico.</li>
          </ul>
          <p>Sin embargo, estos síntomas no permiten diagnosticar un metabolismo lento por sí solos. Pueden estar relacionados con diferentes condiciones médicas, alteraciones del sueño, cambios hormonales, medicamentos o factores asociados al estilo de vida. Por eso, antes de intentar acelerar el metabolismo, es importante identificar qué está sucediendo realmente.</p>

          <h2>¿Por qué cambia nuestro metabolismo con el tiempo?</h2>
          <ul>
            <li><strong>Cambios en la masa muscular:</strong> el tejido muscular consume energía incluso cuando estamos en reposo. Con el paso de los años, especialmente si no realizamos actividad física de fuerza, podemos experimentar una disminución progresiva de la masa muscular.</li>
            <li><strong>Cambios hormonales:</strong> las hormonas tiroideas, por ejemplo, influyen directamente en el gasto energético. También pueden producirse cambios en la distribución de grasa durante la transición hacia la menopausia.</li>
            <li><strong>Alimentación y restricciones prolongadas:</strong> cuando reducimos considerablemente nuestra ingesta energética, el organismo puede responder disminuyendo parte de su gasto energético. Este fenómeno, conocido como adaptación metabólica, es una de las razones por las que las dietas muy restrictivas pueden resultar difíciles de sostener.</li>
            <li><strong>Movimiento y actividad cotidiana:</strong> la cantidad de energía que utilizamos a lo largo del día depende también de cuánto nos movemos. Una disminución de estas actividades puede producir cambios importantes, incluso cuando mantenemos una alimentación similar.</li>
          </ul>

          <h2>¿Cómo podemos cuidar nuestra salud metabólica?</h2>
          <ul>
            <li><strong>Priorizar el entrenamiento de fuerza:</strong> la actividad física que estimula la musculatura ayuda a mantener o desarrollar masa muscular. Además de sus beneficios sobre la composición corporal, el entrenamiento de fuerza contribuye a la salud ósea, la capacidad funcional y la autonomía a largo plazo.</li>
            <li><strong>Mantener una alimentación equilibrada:</strong> una alimentación variada, con un aporte adecuado de proteínas, fibra y nutrientes esenciales, contribuye al funcionamiento del organismo.</li>
            <li><strong>Cuidar el descanso:</strong> dormir lo suficiente es importante para la regulación del apetito, la energía y diferentes procesos metabólicos.</li>
            <li><strong>Evitar las dietas extremas:</strong> las restricciones alimentarias excesivas pueden favorecer la pérdida de masa muscular y dificultar el mantenimiento de hábitos saludables.</li>
          </ul>

          <h2>Una mirada integral de la salud metabólica</h2>
          <p>Desde la medicina integradora, comprender el metabolismo implica observar al organismo en su conjunto. La alimentación, el movimiento, el descanso, la historia clínica, las hormonas y el contexto personal pueden aportar información valiosa.</p>
          <p>Dos personas con síntomas similares pueden presentar causas completamente diferentes y necesitar estrategias de abordaje distintas. La salud metabólica no se define únicamente por el número que aparece en una balanza. También se relaciona con la capacidad de mantener nuestra energía, nuestra fuerza, nuestra autonomía y una buena calidad de vida a lo largo del tiempo.</p>

          <div className="art__cta">
            <p>Si notás cambios persistentes en tu energía, tu peso o tu bienestar general, una valoración médica personalizada puede ayudarte a identificar posibles causas y desarrollar estrategias adaptadas a tus necesidades.</p>
            <a href="/solicitar-valoracion" className="pill">Solicitar una valoración</a>
          </div>
        </div>
      </article>
    </div>
  );
}

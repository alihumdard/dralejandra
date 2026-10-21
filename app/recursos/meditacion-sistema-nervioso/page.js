import "../../st-pages.css";
import "./article.css";

export const metadata = {
  title: "Más allá de la calma: cómo la meditación recalibra tu sistema nervioso central | Dra. Alejandra Stivaletta",
  description: "Descubre el impacto neurobiológico de la meditación sobre el sistema nervioso, la regulación del estrés y su papel en la salud hormonal, digestiva y emocional.",
};

export default function ArticlePage() {
  return (
    <div className="sp">
      <article className="art">
        <div className="art__header">
          <p className="sp-eyebrow">
            <span className="sp-eyebrow__line" />
            Estilo de vida · Salud integral
          </p>
          <h1>Más allá de la calma: cómo la meditación recalibra tu sistema nervioso central</h1>
          <p className="art__excerpt">Descubre el impacto neurobiológico de la meditación sobre el sistema nervioso, la regulación del estrés y su papel en la salud hormonal, digestiva y emocional.</p>
        </div>

        <div className="art__body">
          <p>En la consulta médica diaria, con frecuencia vemos personas que sufren de inflamación persistente, fatiga crónica, alteraciones del sueño o desajustes hormonales. Cuando indagamos en su historia, notamos que el cuerpo ha estado operando en un estado sostenido de alerta.</p>
          <p>Comprender la salud exige mirar más allá de los síntomas aislados y prestar atención al gran regulador del organismo: el sistema nervioso central. La meditación no es únicamente una práctica contemplativa; es una intervención biológica directa que promueve la conciencia y la coherencia entre tu mente y tu fisiología.</p>

          <h2>¿Qué le ocurre a tu cerebro y a tu cuerpo cuando meditás?</h2>
          <p>Cuando meditamos con regularidad, enviamos señales fisiológicas claras de seguridad a nuestro organismo. Esto genera cambios concretos en el sistema nervioso central:</p>
          <ul>
            <li><strong>Activación del sistema parasimpático:</strong> A través de la estimulación del nervio vago, la meditación frena la dominancia simpática (el modo de "lucha o huida") y activa el modo de restauración, digestión y reparación celular.</li>
            <li><strong>Disminución del eje HPA (Estrés):</strong> Se regula la liberación de cortisol y adrenalina desde las glándulas suprarrenales, reduciendo el impacto inflamatorio del estrés en el metabolismo y las hormonas.</li>
            <li><strong>Neuroplasticidad y regulación emocional:</strong> Estudios de neuroimagen muestran que la meditación fortalece las conexiones en la corteza prefrontal —área encargada de la toma de decisiones conscientes y la autorregulación— mientras reduce la hiperactividad de la amígdala cerebral (centro del miedo y la ansiedad).</li>
          </ul>

          <h2>El puente entre la mente, la nutrición y la salud emocional</h2>
          <p>El sistema nervioso no trabaja de forma aislada; está en constante diálogo con el resto de tus sistemas:</p>
          <ul>
            <li><strong>El eje intestino-cerebro y la nutrición:</strong> Un sistema nervioso hiperreactivo altera la motilidad intestinal, la permeabilidad y la diversidad de la microbiota. Al regular el sistema nervioso a través de la meditación, preparamos al sistema digestivo para absorber nutrientes adecuadamente y reducir síntomas como la inflamación. A su vez, una nutrición equilibrada provee los precursores metabólicos necesarios para sintetizar neurotransmisores clave para el bienestar.</li>
            <li><strong>Salud emocional sustentable:</strong> La salud emocional no significa reprimir el malestar o buscar un optimismo forzado, sino desarrollar la capacidad biológica y mental para sostener los desafíos diarios sin desregularnos. La meditación nos brinda ese espacio de pausa para responder con claridad en lugar de reaccionar por impulso.</li>
          </ul>

          <h2>Encarnar los procesos: la clave de la coherencia</h2>
          <p>Restablecer la salud no ocurre de un día para otro. Entender teóricamente lo que nos hace bien no es suficiente; el verdadero cambio ocurre cuando logramos encarnar los procesos en la rutina diaria.</p>
          <p>Integrar pequeños espacios de silencio y presencia alinea tu biología, tus emociones y tus hábitos. Esa coherencia interna es la base de una medicina preventiva, profunda y verdaderamente orientada a la longevidad y el bienestar.</p>

          <div className="art__cta">
            <p>¿Sentís que tu cuerpo necesita un abordaje integral? En la medicina de precisión evaluamos cómo se relacionan tu estilo de vida, tus biomarcadores y tu contexto emocional para diseñar un plan a tu medida.</p>
            <a href="/solicitar-valoracion" className="pill">Solicitar una valoración</a>
          </div>
        </div>
      </article>
    </div>
  );
}

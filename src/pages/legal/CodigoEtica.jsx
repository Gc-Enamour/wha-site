import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check } from '../../components/icons/index.jsx';
import logoBlanco from '../../assets/logo-wha-blanco.png';
import '../../styles/legal.css';

const STORE_KEY = 'wha-etica-aceptada';

function AcceptButton({ accepted, onAccept }) {
  if (accepted) {
    return (
      <span className="accept-done">
        <Check size={17} strokeWidth={2.4} /> Código aceptado
      </span>
    );
  }
  return (
    <button className="btn btn-primary" onClick={onAccept}>
      Acepto el código
    </button>
  );
}

function SuccessPanel() {
  return (
    <div className="success-panel">
      <div className="success-inner">
        <div className="success-icon">
          <Check size={28} strokeWidth={2.2} />
        </div>
        <h3>Has aceptado el Código de Ética de WHA</h3>
        <p>Gracias por comprometerte con nuestros principios. Ya puedes solicitar tu aval y sumarte al directorio de profesionales avalados.</p>
        <Link to="/#aval" className="btn btn-primary">Solicitar mi aval WHA</Link>
      </div>
    </div>
  );
}

export default function CodigoEtica() {
  const [accepted, setAccepted] = useState(() => {
    try { return localStorage.getItem(STORE_KEY) === '1'; } catch { return false; }
  });

  const accept = () => {
    try { localStorage.setItem(STORE_KEY, '1'); } catch {}
    setAccepted(true);
  };

  useEffect(() => { document.title = 'Código de Ética · World Holistic Alliance'; }, []);

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-in">
          <span className="hero-logo"><img src={logoBlanco} alt="WHA" /></span>
          <div className="eyebrow" style={{ marginTop: 18 }}>World Holistic Alliance</div>
          <h1>Código de Ética</h1>
          <p>El compromiso que cada miembro de WHA acepta cumplir para ejercer las Terapias Holísticas con integridad, respeto y responsabilidad.</p>
        </div>
      </section>

      {/* Barra de aceptación (arriba) */}
      <div className="accept-bar">
        <div className="accept-bar-in">
          <p>Para formar parte del directorio, lee y acepta el Código de Ética.</p>
          <AcceptButton accepted={accepted} onAccept={accept} />
        </div>
      </div>

      {accepted && <SuccessPanel />}

      <article className="doc">
        <div className="doc-block">
          <h2>Nuestro Compromiso Ético</h2>
          <div className="intro-card" style={{ marginTop: 16 }}>
            <p>Todos los miembros de World Holistic Alliance, ya sea un Centro Holístico o un Terapeuta profesional, han aceptado cumplir con nuestro Código de Ética.</p>
            <p>El mismo fue diseñado para unificarnos en torno a principios compartidos y fomentar pautas respetuosas para el ejercicio de las Terapias Holísticas.</p>
            <p>Los miembros de WHA deben mantener un alto nivel de capacitación, de enseñanza y responsabilidad, para que consultantes del mundo entero puedan disfrutar de sus terapias con la confianza adecuada.</p>
            <p>Al definir y exigir estos estándares de conducta profesional y ética, buscamos promover la confianza y el respeto por las Terapias Holísticas, ampliando la comprensión pública del papel del Terapeuta, y promoviendo las buenas prácticas profesionales.</p>
          </div>
        </div>

        <div className="doc-block">
          <h2>Nuestro Código de Ética</h2>
          <p style={{ marginTop: 14 }}>El Código de Ética se aplica a todos los miembros de la WHA y establece el comportamiento profesional adecuado dentro del vínculo consultante-terapeuta, el contacto basado en el consentimiento y la honestidad en la aplicación de todas las Terapias Holísticas.</p>
          <p>Este código es parte integral del Compromiso Ético general que cada miembro de World Holistic Alliance acepta cumplir, como un compromiso con la integridad ética en el ejercicio terapéutico.</p>
        </div>

        <div className="principles-head">
          <h2>Principios</h2>
          <span className="line"></span>
        </div>

        <article className="principle">
          <div className="principle-h"><span className="principle-num">1°</span><h3>Adherirse a la Ley Aplicable</h3></div>
          <p>Los miembros de la WHA deben cumplir con todas las leyes y reglamentos locales, estatales, provinciales, nacionales y federales aplicables en sus ubicaciones.</p>
        </article>

        <article className="principle">
          <div className="principle-h"><span className="principle-num">2°</span><h3>Respetar las conductas recomendadas de la práctica profesional</h3></div>
          <ol>
            <li>Los miembros no harán daño, incluirán activamente a todos los individuos, respetarán las relaciones Terapeuta – Consultante y mantendrán comunicaciones honestas.</li>
            <li>Se permite a los miembros de la WHA tocar al consultante sólo si la práctica terapéutica lo requiere y únicamente con el consentimiento explícito e informado del consultante. El consentimiento previo no implica un permiso futuro, ni permite contacto físico futuro. El «consentimiento explícito e informado» se define estrictamente como el permiso manifiesto para que el Terapeuta use el contacto ha sido otorgado por el consultante. Este permiso se puede dar verbalmente, por escrito, mediante un gesto inequívoco o mediante un indicador de consentimiento. El silencio o la falta de resistencia, por sí solos, no demuestran consentimiento.</li>
            <li>Se prohíbe a los miembros de la WHA asesorar o enseñar en áreas en las que el miembro no tiene las credenciales y las competencias adecuadas. Los miembros no deben brindar asesoramiento o servicios para los que no tengan una licencia adecuada y actual. No emplearán técnicas para las cuales no hayan tenido la capacitación adecuada y representarán honestamente su educación, capacitación, calificaciones y habilidades.</li>
            <li>No diagnosticarán, recetarán, ni proporcionarán ningún servicio que requiera una licencia para ejercer, a menos que tenga una licencia específica para hacerlo.</li>
            <li>Demostrar compromiso para brindar un servicio profesional de la más alta calidad, abordando las consultas de acuerdo con las necesidades específicas del consultante, pues su comodidad, bienestar y salud son nuestra prioridad.</li>
            <li>Nunca criticar, condenar o denigrar el trabajo de colegas en presencia de un consultante u otras personas.</li>
            <li>Respetar los derechos de los profesionales de la salud y cooperar de manera amistosa y profesional.</li>
          </ol>
        </article>

        <article className="principle">
          <div className="principle-h"><span className="principle-num">3°</span><h3>Respetar la Política Contra el Acoso</h3></div>
          <p>Como organización internacional buscamos ayudar a garantizar que los entornos de práctica de terapias holísticas estén libres de acoso. WHA no tolerará a ningún miembro que viole estos principios.</p>
          <p>El acoso es una conducta, verbal o no verbal, no deseada. Se considera acoso a las conductas que denigren o muestren hostilidad o aversión hacia la persona y tienen el propósito o efecto de interferir irrazonablemente con su trabajo, estudio u otra actividad.</p>
          <p>También se considera acoso a las conductas ofensivas que se convierten en una condición para la continuación de la relación. Y también aquellas conductas que tienen el propósito o el efecto de crear un ambiente que una persona consideraría intimidatorio, hostil o abusivo.</p>
          <p>WHA prohíbe las conductas descritas a continuación por parte de todos sus miembros.</p>
          <ol className="nested">
            <li>Acoso por parte de un miembro a cualquier persona en función de la edad, género, identidad de género, uso de pronombres, orientación sexual, raza, etnia, cultura, origen nacional, religión, tipo de cuerpo, apariencia personal, capacidad física o mental, estado socioeconómico, estado civil, actividades o afiliaciones políticas, o cualquier otra base descritas en las leyes y reglamentos locales, estatales, provinciales, nacionales y federales.</li>
            <li>Acoso por parte de un miembro a cualquier persona, ya sea en persona o a través de actividades en línea ahora conocidas o desconocidas, como trolear, acechar, usar discurso de odio, amenazar, intimidar, acusar falsamente, informar quejas falsas, manipular o acosar de cualquier otra forma.</li>
            <li>Acoso sexual por parte de un miembro de cualquier persona.</li>
            <li>Represalias por parte de un miembro contra cualquier persona que denuncie cualquier caso de acoso.</li>
          </ol>
        </article>

        <article className="principle">
          <div className="principle-h"><span className="principle-num">4°</span><h3>Respetar los principios de conducta sexual inapropiada</h3></div>
          <p>Los miembros deben respetar los principios de lo que se considera conducta sexual inapropiada. No deben causar daño sexual intencional o negligentemente (verbal, físicamente o de otro modo) a otras personas a través de cualquier acción, incluidas, entre otras, las acciones prohibidas por leyes y reglamentos locales, estatales, provinciales, nacionales y federales.</p>
          <p>Las siguientes conductas están prohibidas:</p>
          <ol className="nested">
            <li>Contacto sexual no consentido. Cualquier contacto deliberado y no consentido del cuerpo de una persona, cuya conducta puede variar desde caricias hasta sexo no consentido.</li>
            <li>El uso de declaraciones sexualmente sugerentes, o explícitas, ya sea a través del habla o por escrito, que crean un ambiente hostil.</li>
            <li>Conductas que, si no son bien recibidas, pueden constituir una conducta sexual inapropiada, como por ejemplo:
              <ol className="nested">
                <li>Epítetos sexuales, chistes, referencias escritas o verbales a la conducta sexual, chismes sobre la vida sexual de una persona, comentarios sobre el cuerpo de una persona, comentarios sobre la actividad, las deficiencias o las proezas sexuales de una persona;</li>
                <li>Muestras de objetos, imágenes o dibujos animados sexualmente sugestivos;</li>
                <li>Miradas lascivas, silbidos, rozaduras contra el cuerpo, gestos sexuales o comentarios insinuantes o insultantes no deseados;</li>
                <li>Comentarios o conjeturas sobre la orientación sexual o identidad de género de una persona;</li>
                <li>Indagaciones y/o discusión sobre las experiencias sexuales.</li>
              </ol>
            </li>
          </ol>
        </article>

        <article className="principle">
          <div className="principle-h"><span className="principle-num">5°</span><h3>No hacer daño</h3></div>
          <p>Los miembros no deben hacer daño, tomarán medidas razonables para no causar daño y no causarán daño intencional o negligentemente a otras personas a través de cualquier acción o inacción, incluyendo pero no limitado a acciones proscritas por leyes y reglamentos locales, estatales, provinciales, nacionales y federales.</p>
        </article>

        <article className="principle">
          <div className="principle-h"><span className="principle-num">6°</span><h3>Incluir y no discriminar a las personas</h3></div>
          <p>Los miembros no deben discriminar y deben incluir activamente a todas las personas, especialmente, pero no únicamente, en las clases, formaciones y capacitaciones presenciales.</p>
          <p>Los miembros deben comprender y facilitar las adaptaciones razonables para las personas con discapacidad. Los miembros son responsables de cumplir con las leyes y reglamentaciones sobre discapacidad aplicables en sus jurisdicciones y de establecerse en una ubicación física razonable que considere la seguridad y la accesibilidad para todas las personas.</p>
        </article>

        <article className="principle">
          <div className="principle-h"><span className="principle-num">7°</span><h3>Respetar las relaciones alumno/maestro y terapeuta/consultante</h3></div>
          <p>Los miembros deben respetar las relaciones alumno/maestro y terapeuta/consultante a partir de:</p>
          <ol className="nested">
            <li>Consentimiento para el contacto físico (descrito en detalle en el 2° Principio, punto 2).</li>
            <li>No entablar una relación romántica y/o sexual con un estudiante o consultante durante la terapia, conferencia, taller, curso u otros eventos similares en que el Miembro es percibido como el Maestro o Terapeuta. Si se desarrollan sentimientos, o si las partes acuerdan mutuamente seguir adelante con esa relación, el Miembro debe sugerir al Estudiante o Consultante que encuentre un Maestro o Terapeuta alternativo.</li>
            <li>Los miembros no deben fotografiar, grabar videos ni capturar ninguna otra imagen en ningún otro medio, ni utilizar dichas imágenes sin el consentimiento expreso de los estudiantes, consultantes o miembros del público que pudieran también estar incluidos.</li>
            <li>Mantener la confidencialidad del consultante y sólo divulgar con su consentimiento, excepto cuando lo exija la ley.</li>
          </ol>
        </article>

        <article className="principle">
          <div className="principle-h"><span className="principle-num">8°</span><h3>Mantener la honestidad en las comunicaciones</h3></div>
          <p>Los miembros deben mantener la honestidad en las comunicaciones. Este principio incluye el deber tanto de abstenerse de hacer ciertas divulgaciones de manera proactiva y afirmativa, incluidas, entre otras, las siguientes:</p>
          <ol className="nested">
            <li>Los miembros no deben representar falsamente su historial profesional, que incluye, entre otros: educación, capacitación, experiencia y credenciales. No deben plagiar ningún material protegido por derechos de autor y deben revelar con precisión la fuente de cualquier enseñanza, escrito o recurso que no sea suyo.</li>
            <li>Los miembros no deben hacer afirmaciones exageradas o sin fundamento con respecto a los efectos de las prácticas terapéuticas.</li>
            <li>Los miembros no deben brindar asesoramiento o servicios en lugares no habilitados.</li>
            <li>Los miembros deben establecer una estructura individual y personalizada para las consultas.</li>
            <li>Practicar la honestidad en la publicidad, promocionar sus servicios de manera ética y publicitar solo aquellas habilidades para las que he recibido la capacitación o certificación adecuada.</li>
          </ol>
        </article>

        <article className="principle">
          <div className="principle-h"><span className="principle-num">9°</span><h3>Contribuir al desarrollo de las Terapias Holísticas de calidad</h3></div>
          <p>Los miembros se comprometen a compartir conocimientos profesionales, investigaciones y experiencias con otros miembros de la WHA para apoyar el avance de las terapias y prácticas holísticas.</p>
          <p>Además, los miembros se esforzarán por tomar cursos de desarrollo profesional continuo y mejorar sus habilidades y estándares profesionales.</p>
          <p>Estos principios se aplican a todos los miembros de la WHA en cualquier contexto o entorno en el que un miembro se presente como Terapeuta o Educador (maestro, entrenador, mentor u otro).</p>
          <p>Las actividades de la vida privada no son alcanzadas por este Código, sin embargo la WHA se reserva el derecho de admisión de sus miembros, pues estos deben comprometerse a aplicar sólidos principios éticos en su vida profesional y personal, y esto debe entenderse como algo intrínseco a su práctica y enseñanza de cualquier Terapia Holística.</p>
          <p>Todos los miembros aceptan eximir de responsabilidad a World Holistic Alliance por cualquier pérdida o daño en el que puedan incurrir debido a la revocación de las credenciales.</p>
          <p>Los miembros respetarán el alcance de su práctica profesional y darán fe de que han leído, entendido y están de acuerdo con este código que establece prácticas aceptables, recomendadas, requeridas y prohibidas, por las cuales, como miembros de la WHA, aceptan regirse.</p>
        </article>
      </article>

      {/* CTA de aceptación (abajo) */}
      <div className="accept-cta">
        <AcceptButton accepted={accepted} onAccept={accept} />
      </div>

      {accepted && <SuccessPanel />}
    </>
  );
}

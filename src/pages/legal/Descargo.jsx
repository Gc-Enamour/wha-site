import { useEffect } from 'react';
import logoBlanco from '../../assets/logo-wha-blanco.png';
import '../../styles/legal.css';

export default function Descargo() {
  useEffect(() => { document.title = 'Descargo de Responsabilidad · World Holistic Alliance'; }, []);

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-in">
          <span className="hero-logo"><img src={logoBlanco} alt="WHA" /></span>
          <div className="eyebrow" style={{ marginTop: 18 }}>World Holistic Alliance</div>
          <h1>Descargo de Responsabilidad</h1>
          <p>El alcance y los límites de la información, los servicios y el directorio de WHA.</p>
        </div>
      </section>

      <article className="doc">
        <p className="doc-intro">El contenido de este sitio web, incluidos los cursos y membresías ofrecidos, está diseñado con el propósito de promover el bienestar general. Sin embargo, los resultados pueden variar según las necesidades individuales y la disposición del usuario.</p>

        <div className="doc-sec">
          <p>Las terapias holísticas no garantizan un resultado específico y no deben ser utilizadas como sustituto de un diagnóstico o tratamiento profesional en ámbitos médicos, psicológicos o de salud.</p>
          <p>El uso de los materiales, información o servicios aquí ofrecidos es bajo tu propia responsabilidad.</p>
        </div>

        <div className="doc-sec">
          <div className="doc-sec-h"><span className="doc-sec-tag">A</span><h2>Exención de responsabilidad médica</h2></div>
          <p>Los cursos y terapias holísticas disponibles en este sitio web no constituyen consejo médico. No reemplazan el diagnóstico, tratamiento o consejo de profesionales de la salud calificados.</p>
          <p>Recomendamos que consultes con tu médico o proveedor de salud antes de iniciar cualquier programa de terapia o bienestar. Las terapias holísticas son un complemento para el bienestar personal, no un sustituto de los tratamientos médicos tradicionales.</p>
          <p>El sitio y sus creadores no son responsables de decisiones tomadas con base en la información proporcionada.</p>
        </div>

        <div className="doc-sec">
          <div className="doc-sec-h"><span className="doc-sec-tag">B</span><h2>Sobre el Directorio de Terapeutas WHA</h2></div>
          <p>World Holistic Alliance (WHA) mantiene un directorio en el que se listan terapeutas que han presentado certificaciones de formaciones que han realizado.</p>
          <p>WHA verifica que dichos certificados correspondan a estudios reales y confirma la aceptación de nuestro Código de Ética, pero no supervisa, evalúa ni garantiza la calidad profesional, la ética en la práctica, la metodología de trabajo o los resultados de la labor de los terapeutas incluidos en el directorio.</p>
          <p>La presencia de un terapeuta en este listado únicamente indica que hemos recibido y validado la documentación de estudios que afirma haber completado, así como su compromiso con nuestro Código de Ética.</p>
          <p>Esto no debe interpretarse como un aval sobre sus competencias, experiencia o efectividad en la práctica de su profesión. La decisión de contratar o recibir atención de un terapeuta listado es responsabilidad exclusiva del usuario o cliente.</p>
        </div>

        <div className="doc-sec">
          <div className="doc-sec-h"><span className="doc-sec-tag">C</span><h2>Sobre el Aval Maestro / Centro Holístico</h2></div>
          <p>En el marco del Aval Maestro/Centro Holístico, WHA revisa la documentación de formación que el maestro o centro presenta y los contenidos que desarrolla en sus formaciones, con el fin de constatar que respondan a estándares formativos adecuados.</p>
          <div className="doc-callout warn">
            <p>Esta revisión se refiere exclusivamente a la documentación y a los contenidos formativos presentados. WHA <b>no supervisa, evalúa ni garantiza</b> la calidad de la atención, la metodología de trabajo, la conducta profesional ni los resultados de cada terapeuta o alumno certificado por dichos maestros o centros.</p>
            <p>La certificación de un alumno o terapeuta a través de un maestro o centro avalado <b>no constituye una garantía de WHA</b> sobre las competencias, la experiencia o la efectividad de esa persona en su práctica profesional. La responsabilidad sobre la práctica recae en cada terapeuta, maestro o centro, y la decisión de contratar o recibir atención es responsabilidad exclusiva del usuario o cliente.</p>
          </div>
        </div>

        <div className="doc-sec">
          <div className="doc-sec-h"><span className="doc-sec-tag">D</span><h2>Derecho a cancelar la membresía</h2></div>
          <p>Nos reservamos el derecho de cancelar cualquier membresía en cualquier momento si lo consideramos necesario, sin previo aviso.</p>
          <p>Esta acción puede tomarse en situaciones donde haya incumplimiento de nuestros términos de uso, comportamiento inadecuado en la comunidad o cualquier otro motivo que afecte la integridad de nuestra plataforma o de nuestros miembros.</p>
          <p>En caso de cancelación, se evaluarán las circunstancias particulares para determinar si corresponde un reembolso o no.</p>
        </div>
      </article>
    </>
  );
}
